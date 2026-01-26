import { Hero } from "./components/hero";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Projects } from "./components/projects";
import { Testimonials } from "./components/testimonials";
import { Contact } from "./components/contact";

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Projects />
      <About />
      <Testimonials />
      <Contact />
    </div>
  );
}
