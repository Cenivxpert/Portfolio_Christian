import { useEffect, useState } from "react";
import { AccessibleModal } from "./accessible-modal";

interface GalleryItem { id: string; src: string; thumbnail: string; alt: string; }
export function CreativeGallery() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [selected, setSelected] = useState<GalleryItem | null>(null);
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [attempt, setAttempt] = useState(0);
  useEffect(() => {
    const controller = new AbortController();
    setStatus("loading");
    fetch("/images/creative/images-list.json", { signal: controller.signal })
      .then((response) => { if (!response.ok) throw new Error("Gallery unavailable"); return response.json(); })
      .then((list: GalleryItem[]) => {
        if (!Array.isArray(list) || !list.every((item) => typeof item.src === "string" && typeof item.thumbnail === "string" && typeof item.alt === "string")) throw new Error("Invalid gallery");
        setItems(list); setStatus("ready");
      }).catch((error) => { if (error.name !== "AbortError") setStatus("error"); });
    return () => controller.abort();
  }, [attempt]);
  const grid = (list: GalleryItem[]) => <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    {list.map((item) => <button data-gallery-id={item.id} key={item.id} onClick={() => setSelected(item)} className="overflow-hidden rounded-2xl border border-border text-left" aria-label={`Agrandir : ${item.alt}`}>
      <img src={item.thumbnail} alt={item.alt} loading="lazy" decoding="async" width="640" height="640" className="w-full aspect-square object-cover" />
      <p className="p-3 text-sm line-clamp-2">{item.alt}</p>
    </button>)}
  </div>;
  const closeGallery = () => {
    if (selected) {
      const id = selected.id;
      setSelected(null);
      if (open) requestAnimationFrame(() => document.querySelector<HTMLElement>(`[role="dialog"] [data-gallery-id="${id}"]`)?.focus());
    } else setOpen(false);
  };
  return <>
    <section id="gallery" className="py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto space-y-8">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">Galerie visuelle</h2>
        <p className="text-muted-foreground">Une sélection de créations pour les réseaux sociaux, l’identité de marque et les supports digitaux.</p>
        {status === "loading" && <p role="status">Chargement de la galerie…</p>}
        {status === "error" && <div role="alert"><p>La galerie ne peut pas être chargée.</p><button className="underline p-3" onClick={() => setAttempt((value) => value + 1)}>Réessayer</button></div>}
        {status === "ready" && (items.length ? <>{grid(items.slice(0, 8))}<button className="rounded-xl bg-primary text-primary-foreground px-6 py-3" onClick={() => setOpen(true)}>Voir la galerie complète ({items.length})</button></> : <p>Aucune création disponible pour le moment.</p>)}
      </div>
    </section>
    <AccessibleModal open={open || !!selected} onClose={closeGallery} title={selected?.alt || "Galerie complète"} description={selected ? "Appuyez sur Échap pour revenir à la galerie." : "Sélectionnez une création pour l’agrandir."} wide>
      {selected ? <img src={selected.src} alt={selected.alt} className="max-h-[70dvh] w-full object-contain" /> : grid(items)}
    </AccessibleModal>
  </>;
}
