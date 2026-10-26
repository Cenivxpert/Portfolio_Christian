import { Hero } from "./components/hero";
import { Projects } from "./components/projects";
import { Services } from "./components/services";
import { CreativeGallery } from "./components/creative-gallery";
import { About } from "./components/about";
import { Testimonials } from "./components/testimonials";
import { Contact } from "./components/contact";

export default function App() {
  return (
    <div className="min-h-screen">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 z-[100] bg-card p-3">Aller au contenu</a>
      <nav aria-label="Navigation principale" className="sticky top-0 z-30 flex gap-4 overflow-x-auto bg-background/95 border-b border-border px-5 py-3 text-sm">
        <a href="#projects">Projets</a><a href="#expertise">Expertise</a><a href="#gallery">Galerie</a><a href="#about">À propos</a><a href="#contact">Contact</a>
      </nav>
      <main id="main" tabIndex={-1}>
      <Hero />
      <Projects />
      <Services />
      <CreativeGallery />
      <About />
      <Testimonials />
      <Contact />
      </main>
    </div>
  );
}
