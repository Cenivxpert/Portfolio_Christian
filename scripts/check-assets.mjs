import { readFileSync, existsSync } from 'node:fs';
import assert from 'node:assert/strict';
const items = JSON.parse(readFileSync('public/images/creative/images-list.json', 'utf8'));
assert(items.length > 0, 'Gallery must not be empty');
assert.equal(new Set(items.map(x => x.id)).size, items.length, 'Duplicate gallery IDs');
for (const item of items) {
  assert(item.alt.trim(), 'Missing image description');
  for (const key of ['src', 'thumbnail']) {
    assert(item[key].startsWith('/images/gallery/'), 'Unexpected asset location');
    assert(existsSync(`public${item[key]}`), `Missing ${item[key]}`);
  }
}
for (const file of ['hero.tsx','projects.tsx']) {
  const source = readFileSync(`src/app/components/${file}`, 'utf8');
  for (const [, path] of source.matchAll(/["'](\/images\/[^"']+)["']/g)) assert(existsSync(`public${path}`), `Missing ${path}`);
}
console.log(`Asset validation passed: ${items.length} gallery entries plus hero/project assets.`);
