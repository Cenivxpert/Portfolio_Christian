import { afterEach, expect, test, vi } from 'vitest';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { AccessibleModal } from '../src/app/components/accessible-modal';
import { CreativeGallery } from '../src/app/components/creative-gallery';
afterEach(() => { cleanup(); vi.unstubAllGlobals(); });
function Example() {
 const [open, setOpen] = useState(false);
 return <><button onClick={() => setOpen(true)}>Ouvrir</button><AccessibleModal open={open} onClose={() => setOpen(false)} title="Contact"><input aria-label="Nom"/><button>Envoyer</button></AccessibleModal></>;
}
test('dialog traps focus, closes with Escape and restores trigger focus', async () => {
 const user = userEvent.setup(); render(<Example/>);
 const trigger = screen.getByRole('button', { name: 'Ouvrir' });
 await user.click(trigger);
 expect(screen.getByRole('dialog', { name: 'Contact' })).toBeTruthy();
 for (let i = 0; i < 8; i++) { await user.tab(); expect(screen.getByRole('dialog').contains(document.activeElement)).toBe(true); }
 await user.keyboard('{Escape}');
 await waitFor(() => expect(screen.queryByRole('dialog')).toBeNull());
 expect(document.activeElement).toBe(trigger);
});
test('gallery reports failed fetch and retry can recover', async () => {
 const fetchMock = vi.fn().mockRejectedValueOnce(new Error('offline')).mockResolvedValueOnce({ ok: true, json: async () => [{ id:'one', src:'/large.webp', thumbnail:'/small.webp', alt:'Création' }] });
 vi.stubGlobal('fetch', fetchMock);
 const user = userEvent.setup();render(<CreativeGallery/>);
 expect(await screen.findByRole('alert')).toBeTruthy();await user.click(screen.getByRole('button', {name:'Réessayer'}));
 expect(await screen.findByRole('button',{name:'Agrandir : Création'})).toBeTruthy();
 await user.click(screen.getByRole('button',{name:'Voir la galerie complète (1)'}));
 expect(screen.getByRole('dialog',{name:'Galerie complète'})).toBeTruthy();
 await user.click(screen.getAllByRole('button',{name:'Agrandir : Création'}).at(-1)!);
 expect(screen.getByRole('dialog',{name:'Création'})).toBeTruthy();
 await user.keyboard('{Escape}');
 expect(screen.getByRole('dialog',{name:'Galerie complète'})).toBeTruthy();
 await user.keyboard('{Escape}');
 expect(screen.queryByRole('dialog')).toBeNull();
});
