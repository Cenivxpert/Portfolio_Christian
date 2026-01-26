import { ArrowRight } from "lucide-react";
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
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div>
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20">
        {/* Left Content */}
        <div className="space-y-10">
          <div className="space-y-6">
            <div className="inline-block">
              <p className="text-sm uppercase tracking-[0.3em] text-primary font-medium">
                Community Manager • Développeur Web
              </p>
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1]">
              Christian <br />
              <span className="text-primary">Azane</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-xl leading-relaxed">
              Alliant stratégie digitale, créativité et développement web pour transformer les marques en communautés engagées.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={scrollToProjects}
              className="group px-8 py-4 bg-primary hover:bg-accent text-primary-foreground rounded-xl transition-all duration-300 flex items-center gap-3 shadow-lg shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 hover:scale-105"
            >
              <span>Voir mes projets</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-transparent border-2 border-border hover:border-primary text-foreground hover:bg-primary/5 rounded-xl transition-all duration-300"
            >
              Me contacter
            </button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50">
            <div>
              <p className="text-3xl font-bold text-primary">1+</p>
              <p className="text-sm text-muted-foreground">An d'expérience</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">10+</p>
              <p className="text-sm text-muted-foreground">Projets réalisés</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">Croissance</p>
              <p className="text-sm text-muted-foreground">Engagement constant</p>
            </div>
          </div>
        </div>

        {/* Right Content - Portrait avec effet moderne */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-lg">
            {/* Decorative Elements */}
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-20 rounded-3xl"></div>
            
            {/* Portrait Container */}
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-primary/20 shadow-2xl bg-card">
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10"></div>
              <img
                src="/images/profile.png"
                alt="Christian Azane"
                className="w-full h-full object-cover brightness-95"
              />
            </div>

            <div className="w-full flex justify-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="mt-8 bg-card border border-primary/30 rounded-2xl px-6 py-4 shadow-xl backdrop-blur-sm max-w-fit hover:border-primary hover:bg-primary/5 transition-all duration-300 cursor-pointer group"
              >
                <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">Cliquez ici pour</p>
                <p className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">Nouveaux projets</p>
              </button>
            </div>

            <ProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </div>
        </div>
      </div>
    </section>
  );
}