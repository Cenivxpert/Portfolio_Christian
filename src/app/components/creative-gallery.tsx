import { useState, useEffect } from "react";
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
  const [galleryOpen, setGalleryOpen] = useState(false);

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

  // Fonction pour déterminer la taille de l'item basée sur l'index
  const getItemSize = (index: number) => {
    const sizes = ["normal", "large-height", "large-width", "small"];
    return sizes[index % sizes.length];
  };

  const getSizeClasses = (size: string) => {
    switch (size) {
      case "large-height":
        return "md:row-span-2";
      case "large-width":
        return "md:col-span-2";
      case "small":
        return "col-span-1 row-span-1";
      default:
        return "col-span-1";
    }
  };

  if (error) {
    return (
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-background via-background to-background">
        <div className="max-w-7xl w-full mx-auto">
          <div className="mb-16 space-y-6">
            <div className="w-16 h-1 bg-primary rounded-full"></div>
            <h2 className="text-5xl md:text-6xl font-bold">Créations Visuelles</h2>
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
    <>
      {/* Section avec titre et bouton */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-background via-background to-background">
        <div className="max-w-7xl w-full mx-auto">
          <div className="mb-16 space-y-6">
            <div className="w-16 h-1 bg-primary rounded-full"></div>
            <h2 className="text-5xl md:text-6xl font-bold">Créations Visuelles</h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              {items.length} visuels créés sur Canva.
            </p>
            <button
              onClick={() => setGalleryOpen(true)}
              className="mt-8 px-8 py-4 bg-primary hover:bg-accent text-primary-foreground rounded-xl transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-xl hover:scale-105"
            >
              Découvrir la galerie
            </button>
          </div>
        </div>
      </section>

      {/* Zone Fixe - Galerie Fullscreen */}
      {galleryOpen && (
        <div className="fixed inset-0 top-0 left-0 right-0 h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 z-40 overflow-hidden">
          {/* Background avec effet */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-20"></div>
          </div>

          {/* Galerie Masonry */}
          <div className="relative h-full w-full overflow-y-auto">
            <div className="p-8 md:p-16">
              {/* Header interne */}
              <div className="mb-12 max-w-7xl mx-auto">
                <div className="w-16 h-1 bg-primary rounded-full"></div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mt-6">
                  Créations Visuelles
                </h2>
                <p className="text-gray-400 text-lg mt-4 max-w-2xl">
                  Explorez {items.length} créations dynamiques. Cliquez pour
                  agrandir.
                </p>
              </div>

              {/* Masonry Grid */}
              {isLoading ? (
                <div className="flex items-center justify-center h-96">
                  <p className="text-gray-400">Chargement des créations...</p>
                </div>
              ) : (
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px]">
                  {items.map((item, index) => {
                    const size = getItemSize(index);
                    const sizeClass = getSizeClasses(size);

                    return (
                      <div
                        key={item.id}
                        className={`${sizeClass} group relative overflow-hidden rounded-xl border border-white/10 hover:border-primary/50 transition-all duration-300 cursor-pointer hover:shadow-2xl hover:shadow-primary/40 bg-slate-800/50 backdrop-blur-sm`}
                        onClick={() => setSelectedItem(item)}
                      >
                        {/* Image */}
                        <img
                          src={item.src}
                          alt={item.alt}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />

                        {/* Overlay sombre au hover */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        {/* Texte au hover */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="text-center">
                            <p className="text-white font-semibold text-sm md:text-base">
                              Cliquez pour agrandir
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Bouton Fermer */}
          <button
            onClick={() => setGalleryOpen(false)}
            className="absolute top-8 right-8 z-50 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-all duration-200 backdrop-blur-sm"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      )}

      {/* Modal - Image agrandie */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-lg"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative max-h-[90vh] max-w-5xl w-full rounded-2xl overflow-hidden shadow-2xl"
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
    </>
  );
}
