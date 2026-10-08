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
      <Hero />
      <Projects />
      <Services />
      <CreativeGallery />
      <About />
      <Testimonials />
      <Contact />
    </div>
  );
}
