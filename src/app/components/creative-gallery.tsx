import { useEffect, useMemo, useState } from "react";
import { Images, Maximize2, X } from "lucide-react";

interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  filename: string;
}

export function CreativeGallery() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [galleryOpen, setGalleryOpen] = useState(false);

  useEffect(() => {
    fetch("/images/creative/images-list.json")
      .then((response) => {
        if (!response.ok) throw new Error("Gallery list unavailable");
        return response.json();
      })
      .then((imageList: GalleryItem[]) => {
        const unique = imageList.filter(
          (item, index, array) => array.findIndex((candidate) => candidate.src === item.src) === index,
        );
        setItems(unique);
      })
      .catch((error) => console.error("Gallery load error:", error))
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (selectedItem) setSelectedItem(null);
        else if (galleryOpen) setGalleryOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = galleryOpen || selectedItem ? "hidden" : "";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [galleryOpen, selectedItem]);

  const previewItems = useMemo(() => items.slice(0, 8), [items]);

  const cleanTitle = (value: string) => {
    const cleaned = value
      .replace(/^[0-9]+[_\s-]*/, "")
      .replace(/[_-]+/g, " ")
      .replace(/\s+/g, " ")
      .trim();

    if (!cleaned || /^\d+$/.test(cleaned)) return "Création visuelle";
    return cleaned;
  };

  return (
    <>
      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl w-full mx-auto space-y-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-3xl space-y-5">
              <div className="w-16 h-1 bg-primary rounded-full" />
              <p className="text-sm uppercase tracking-[0.25em] text-primary font-semibold">Creative work</p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">Galerie visuelle</h2>
              <p className="text-base sm:text-xl text-muted-foreground">
                Une sélection de créations social media, branding et supports digitaux réalisés sur différents projets.
              </p>
            </div>
            <button
              onClick={() => setGalleryOpen(true)}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-accent text-primary-foreground rounded-xl transition-all shadow-lg shadow-primary/20"
            >
              <Images className="w-5 h-5" />
              Voir la galerie complète {items.length > 0 ? `(${items.length})` : ""}
            </button>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {[...Array(8)].map((_, index) => (
                <div key={index} className="aspect-square rounded-2xl bg-card border border-border animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {previewItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className={`group relative overflow-hidden rounded-2xl border border-border bg-card text-left ${index === 0 || index === 5 ? "md:col-span-2" : ""}`}
                >
                  <div className="aspect-[4/3]">
                    <img src={item.src} alt={item.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-70" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between gap-3">
                    <p className="text-white text-sm font-medium line-clamp-2">{cleanTitle(item.alt)}</p>
                    <Maximize2 className="w-4 h-4 text-white shrink-0" />
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {galleryOpen && (
        <div className="fixed inset-0 z-40 bg-[#08080d]/95 backdrop-blur-xl overflow-y-auto">
          <div className="max-w-7xl mx-auto px-5 md:px-10 py-10 md:py-16">
            <div className="sticky top-4 z-20 mb-10 flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-black/55 backdrop-blur-xl px-5 py-4">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-primary">Portfolio créatif</p>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Galerie complète</h3>
              </div>
              <button
                onClick={() => setGalleryOpen(false)}
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
                aria-label="Fermer la galerie"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
              {items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className="group relative w-full mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-white/10 bg-slate-900"
                >
                  <img src={item.src} alt={item.alt} className="w-full h-auto block group-hover:scale-[1.02] transition-transform duration-300" loading="lazy" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors" />
                  <Maximize2 className="absolute right-3 top-3 w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/92 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
          onClick={() => setSelectedItem(null)}
        >
          <div className="relative max-w-6xl max-h-[92vh] w-full flex items-center justify-center" onClick={(event) => event.stopPropagation()}>
            <img src={selectedItem.src} alt={selectedItem.alt} className="max-h-[88vh] max-w-full object-contain rounded-2xl shadow-2xl" />
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-3 right-3 w-11 h-11 rounded-full bg-black/65 hover:bg-black/85 text-white flex items-center justify-center"
              aria-label="Fermer l'image"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
