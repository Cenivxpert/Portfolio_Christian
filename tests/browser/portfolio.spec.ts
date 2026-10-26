import { test, expect } from '@playwright/test';
for (const width of [320, 390, 768, 1440]) {
  test(`portfolio and dialogs at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/');
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(/Christian/);
    await expect(page.getByRole('button', { name: /Voir la galerie complète/ })).toBeVisible();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    await page.getByRole('button', { name: 'Disponible pour Projets web, produit digital & coordination IT' }).click();
    const contact = page.getByRole('dialog', { name: 'Me contacter' });
    await expect(contact).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(contact).toBeHidden();
    await page.getByRole('button', { name: /Voir la galerie complète/ }).click();
    await page.getByRole('dialog', { name: 'Galerie complète' }).getByRole('button', { name: /Agrandir/ }).first().click();
    await expect(page.getByRole('dialog')).toHaveCount(1);
    await page.keyboard.press('Escape');
    await expect(page.getByRole('dialog', { name: 'Galerie complète' })).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(page.getByRole('dialog')).toHaveCount(0);
    await page.screenshot({ path: `test-results/portfolio-${width}.png`, fullPage: true });
  });
}
