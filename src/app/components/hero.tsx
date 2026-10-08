import { ArrowRight, Layers3, Sparkles } from "lucide-react";
import { useState } from "react";
import { ProjectModal } from "./project-modal";

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20">
        <div className="space-y-10">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2">
              <Sparkles className="w-4 h-4 text-primary" />
              <p className="text-xs md:text-sm uppercase tracking-[0.22em] text-primary font-medium">
                Web • IT Project Management • AI & Digital
              </p>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05]">
              Christian <br />
              <span className="text-primary">Azane</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
              Je conçois et coordonne des expériences digitales à l&apos;intersection du développement web,
              de l&apos;UI/UX, de l&apos;IA et de la gestion de projet Agile.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={scrollToProjects}
              className="group px-8 py-4 bg-primary hover:bg-accent text-primary-foreground rounded-xl transition-all duration-300 flex items-center gap-3 shadow-lg shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 hover:scale-105"
            >
              <span>Voir mes projets récents</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-transparent border-2 border-border hover:border-primary text-foreground hover:bg-primary/5 rounded-xl transition-all duration-300"
            >
              Me contacter
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-border/50">
            {[
              ["Produit", "React • Supabase • Vercel"],
              ["Projet", "Agile • Scrum • Notion"],
              ["Créatif", "Figma • Content • SEO"],
            ].map(([title, value]) => (
              <div key={title} className="rounded-2xl border border-border bg-card/40 p-4">
                <p className="text-sm text-primary font-semibold">{title}</p>
                <p className="text-sm text-muted-foreground mt-1">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-lg">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-primary/20 shadow-2xl bg-card">
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
              <img
                src="/images/profile.png"
                alt="Christian Serge Azane"
                className="w-full h-full object-cover brightness-95"
              />
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-6 w-full bg-card border border-primary/30 rounded-2xl px-6 py-4 shadow-xl hover:border-primary hover:bg-primary/5 transition-all duration-300 text-left"
            >
              <div className="flex items-center gap-3">
                <Layers3 className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Disponible pour</p>
                  <p className="font-bold text-lg">Projets web, produit digital & coordination IT</p>
                </div>
              </div>
            </button>

            <ProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </div>
        </div>
      </div>
    </section>
  );
}
