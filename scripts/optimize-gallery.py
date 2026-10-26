"""Rebuild display assets. Install Pillow first: python -m pip install Pillow."""
from pathlib import Path
import hashlib
import json
from PIL import Image, ImageOps

root = Path(__file__).resolve().parent.parent
manifest = root / 'public/images/creative/images-list.json'
items = json.loads(manifest.read_text(encoding='utf-8'))
output = root / 'public/images/gallery'
output.mkdir(exist_ok=True)
seen = set()
result = []
for item in items:
    if item['filename'] in seen:
        continue
    seen.add(item['filename'])
    source = root / 'public/images/creative' / item['filename']
    if not source.is_file():
        raise FileNotFoundError(source)
    key = hashlib.sha256(('/images/creative/' + item['filename']).encode()).hexdigest()[:12]
    item.update(id=key, src=f'/images/gallery/{key}-1600.webp', thumbnail=f'/images/gallery/{key}-640.webp')
    result.append(item)
    with Image.open(source) as original:
        image = ImageOps.exif_transpose(original)
        image = image.convert('RGBA' if 'A' in image.getbands() or 'transparency' in image.info else 'RGB')
        for size in (640, 1600):
            resized = image.copy()
            resized.thumbnail((size, size))
            resized.save(output / f'{key}-{size}.webp', 'WEBP', quality=82, method=6)
manifest.write_text(json.dumps(result, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
print(f'Rebuilt {len(result)} display image pairs.')
