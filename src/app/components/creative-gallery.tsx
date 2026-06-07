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

  // Calculer les colonnes en fonction du ratio image
  const getColSpan = (filename: string) => {
    // Déterminer le ratio basé sur le format du filename ou dimensions aléatoires
    const random = Math.random();
    if (random > 0.7) return "md:col-span-2"; // 30% pour les paysages larges
    return "md:col-span-1";
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
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-primary/5 via-background to-background">
      <div className="max-w-7xl w-full mx-auto">
        {/* Header */}
        <div className="mb-16 space-y-6">
          <div className="w-16 h-1 bg-primary rounded-full"></div>
          <h2 className="text-5xl md:text-6xl font-bold">Portfolio Créatif</h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            {items.length} visuels créés sur Canva. Cliquez sur une création
            pour l'agrandir.
          </p>
        </div>

        {/* Gallery Grid */}
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
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 auto-rows-max">
            {items.map((item) => (
              <div
                key={item.id}
                className={`${getColSpan(
                  item.filename
                )} group relative overflow-hidden rounded-lg border border-primary/20 hover:border-primary/50 transition-all duration-300 cursor-pointer hover:shadow-xl hover:shadow-primary/30 bg-card`}
                onClick={() => setSelectedItem(item)}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />

                {/* Overlay au survol */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-white font-semibold text-lg">Agrandir</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal - Image agrandie */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative max-h-screen max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Bouton fermer */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 transition-all duration-200"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image agrandie */}
            <img
              src={selectedItem.src}
              alt={selectedItem.alt}
              className="w-full h-full object-contain max-h-screen"
            />

            {/* Info au bas */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
              <p className="text-lg font-semibold">{selectedItem.alt}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
