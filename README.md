
  # Portfolio Website for Community Manager

  This is a code bundle for Portfolio Website for Community Manager. The original project is available at https://www.figma.com/design/59sWsV2BgGu6V85frZ4Rjo/Portfolio-Website-for-Community-Manager.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.
  
## Quality checks and gallery assets

Use Node.js 22 and npm (`package-lock.json` is authoritative):

```sh
npm ci
npm run check
```

Checks include strict TypeScript checking of the application entry and its imports,
gallery/project asset validation, dialog/focus and gallery recovery tests, and a production build.
GitHub Actions runs the same checks on main and pull requests, plus Chromium checks at 320, 390, 768 and 1440px. Screenshots are attached as a workflow artifact. Run browser checks locally with `npx playwright install chromium` then `npm run test:browser`.

The gallery manifest lists 102 unique creations. Display uses 640px WebP thumbnails;
1600px WebP versions load only in the image viewer. Original Canva exports remain
unchanged under `public/images/creative` as source assets. To regenerate display
versions, install Pillow (`python -m pip install Pillow`) and run
`python scripts/optimize-gallery.py`. When adding creations, include filename,
unique id, alt, thumbnail and src fields in the manifest and run `npm run check:assets`.
The `sync-canva` importer now invokes this optimizer after copying new exports.
It requires Python and Pillow; set the PYTHON environment variable if the executable has a different name.

Before production release, manually check 320px, 390px, 768px and desktop widths,
200% zoom, keyboard-only navigation, nested gallery dialogs, contact mailto/WhatsApp,
and reduced-motion mode. No contact form sends email automatically.
