import * as Dialog from "@radix-ui/react-dialog";
import { useRef, type ReactNode } from "react";
import { X } from "lucide-react";

export function AccessibleModal({ open, onClose, title, description, children, wide = false }: {
  open: boolean; onClose: () => void; title: string; description?: string; children: ReactNode; wide?: boolean;
}) {
  const returnFocus = useRef<HTMLElement | null>(null);
  return <Dialog.Root open={open} onOpenChange={(value) => { if (!value) onClose(); }}>
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm" />
      <Dialog.Content
        onOpenAutoFocus={() => { returnFocus.current = document.activeElement as HTMLElement; }}
        onCloseAutoFocus={(event) => { event.preventDefault(); returnFocus.current?.focus(); }}
        className={`fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 max-h-[90dvh] overflow-y-auto rounded-2xl border border-border bg-card p-5 sm:p-8 shadow-2xl ${wide ? "max-w-6xl" : "max-w-lg"}`}
      >
        <Dialog.Title className="pr-12 text-xl sm:text-2xl font-bold">{title}</Dialog.Title>
        <Dialog.Description className={description ? "mt-2 text-sm text-muted-foreground" : "sr-only"}>{description || "Appuyez sur Échap pour fermer cette fenêtre."}</Dialog.Description>
        <Dialog.Close aria-label="Fermer" className="absolute right-3 top-3 flex h-11 w-11 items-center justify-center rounded-lg bg-card hover:bg-primary/10"><X aria-hidden="true" /></Dialog.Close>
        <div className="mt-5">{children}</div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>;
}
