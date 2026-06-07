import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";

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
  const [error, setError] = useState<string | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const galleryRef = useRef<HTMLDivElement>(null);

  // Charger les images depuis la liste JSON
  useEffect(() => {
    const loadImages = async () => {
      try {
        const response = await fetch("/images/creative/images-list.json");

        if (!response.ok) {
          setError(
            "Liste d'images non trouvée. Lancez d'abord le script sync-canva-images.mjs"
          );
          setIsLoading(false);
          return;
        }

        const imageList: GalleryItem[] = await response.json();

        // Mélanger les images aléatoirement
        const shuffled = imageList.sort(() => Math.random() - 0.5);
        setItems(shuffled);
        setIsLoading(false);
      } catch (error) {
        console.error("Erreur lors du chargement des images:", error);
        setError("Erreur lors du chargement des images");
        setIsLoading(false);
      }
    };

    loadImages();
  }, []);

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculer les colonnes et rows pour un meilleur layout masonry
  const getItemStyle = (index: number) => {
    const random = Math.random();
    let rowSpan = 1;
    let colSpan = 1;

    // 40% images normales, 30% doubles, 20% plus grandes, 10% petites
    if (random > 0.9) {
      rowSpan = 1;
      colSpan = 1;
    } else if (random > 0.7) {
      rowSpan = 2;
      colSpan = 1;
    } else if (random > 0.4) {
      rowSpan = 1;
      colSpan = 2;
    } else {
      rowSpan = 1;
      colSpan = 1;
    }

    return { rowSpan, colSpan };
  };

  if (error) {
    return (
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="max-w-7xl w-full mx-auto">
          <div className="mb-16 space-y-6">
            <div className="w-16 h-1 bg-primary rounded-full"></div>
            <h2 className="text-5xl md:text-6xl font-bold">Portfolio Créatif</h2>
          </div>
          <div className="bg-destructive/10 border border-destructive/50 rounded-lg p-6 text-destructive">
            <p className="font-semibold mb-2">⚠️ {error}</p>
            <p className="text-sm mb-4">
              Lancez le script suivant depuis votre terminal:
            </p>
            <code className="bg-background p-3 rounded block text-xs overflow-x-auto mb-4">
              node scripts/sync-canva-images.mjs
            </code>
            <p className="text-xs text-muted-foreground">
              Puis rafraîchissez la page
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={galleryRef}
      className="py-24 px-6 md:px-8 lg:px-12 bg-gradient-to-b from-background via-primary/2 to-background overflow-hidden"
    >
      <div className="max-w-[1400px] w-full mx-auto">
        {/* Header avec animation */}
        <div
          className="mb-20 space-y-6"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`,
            transition: "transform 0.3s ease-out",
          }}
        >
          <div className="w-16 h-1 bg-primary rounded-full"></div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold">
            Portfolio Créatif
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
            {items.length} visuels créés sur Canva. Explorez une collection
            dynamique de logos, affiches et flyers. Cliquez pour agrandir.
          </p>
        </div>

        {/* Gallery */}
        {isLoading ? (
          <div className="flex items-center justify-center h-96">
            <p className="text-muted-foreground">Chargement des créations...</p>
          </div>
        ) : items.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground mb-4">
              Aucune image trouvée. Veuillez lancer le script de synchronisation.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[300px]">
            {items.map((item, index) => {
              const style = getItemStyle(index);
              const offsetY = (index % 5) * 20;

              return (
                <div
                  key={item.id}
                  className={`group relative overflow-hidden rounded-xl md:rounded-2xl border border-primary/10 hover:border-primary/50 transition-all duration-500 cursor-pointer hover:shadow-2xl hover:shadow-primary/20 bg-card backdrop-blur-sm`}
                  style={{
                    gridColumn: style.colSpan > 1 ? `span ${style.colSpan}` : undefined,
                    gridRow: style.rowSpan > 1 ? `span ${style.rowSpan}` : undefined,
                    transform: `translateY(${(scrollY * 0.05 + offsetY) % 30}px)`,
                    transition: "all 0.3s ease-out",
                  }}
                  onClick={() => setSelectedItem(item)}
                >
                  {/* Image avec zoom au hover */}
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Overlay au survol */}
                  <div className="absolute inset-0 flex items-end justify-start p-4 md:p-6">
                    <div className="translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-white font-semibold text-sm md:text-base line-clamp-2">
                        {item.alt}
                      </p>
                      <p className="text-primary text-xs md:text-sm mt-2">
                        Cliquez pour agrandir
                      </p>
                    </div>
                  </div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 group-hover:translate-x-full"></div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Modal - Image agrandie */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-lg"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative max-h-[90vh] max-w-5xl w-full rounded-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Bouton fermer */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 bg-black/60 hover:bg-black/80 text-white rounded-full p-3 transition-all duration-200 hover:scale-110"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image agrandie */}
            <img
              src={selectedItem.src}
              alt={selectedItem.alt}
              className="w-full h-full object-contain"
            />

            {/* Info au bas */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 md:p-8 text-white">
              <p className="text-xl md:text-2xl font-semibold">
                {selectedItem.alt}
              </p>
              <p className="text-sm text-gray-300 mt-2">
                Appuyez sur Échap ou cliquez pour fermer
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
