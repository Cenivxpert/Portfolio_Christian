import { Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { ProjectModal } from "./project-modal";

export function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="contact" className="pt-8 pb-16 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl w-full mx-auto">
        <div className="space-y-20">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center">
            <div className="space-y-6">
              <div className="w-16 h-1 bg-primary rounded-full mx-auto"></div>
              <h2 className="text-5xl md:text-6xl font-bold">Travaillons Ensemble</h2>
              <p className="text-xl text-muted-foreground">
                Un projet en tête ? Discutons de la façon dont je peux vous aider à atteindre vos objectifs.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left - Contact Info */}
            <div className="space-y-10">
              <div className="space-y-8">
                {/* Email */}
                <div className="group flex items-start gap-6 p-6 rounded-2xl bg-card border border-border hover:border-primary transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                    <Mail className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground uppercase tracking-wide">Email</p>
                    <p className="text-xl font-semibold">christseth.no96@outlook.fr</p>
                    <p className="text-sm text-muted-foreground">Réponse sous 24h</p>
                  </div>
                </div>
                
                {/* Location */}
                <div className="group flex items-start gap-6 p-6 rounded-2xl bg-card border border-border hover:border-primary transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                    <MapPin className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground uppercase tracking-wide">Localisation</p>
                    <p className="text-xl font-semibold">Marrakech, Maroc</p>
                    <p className="text-sm text-muted-foreground">Disponible à distance</p>
                  </div>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="space-y-6">
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                  Retrouvez-moi sur
                </p>
                <div className="flex gap-4">
                  {[
                    { icon: "/icones/ceniv_official_qr.png", label: "Instagram", href: "https://www.instagram.com/ceniv_official/" },
                    { icon: "/icones/linkedin.png", label: "LinkedIn", href: "https://www.linkedin.com/in/christian-serge-azane-7476b9227" },
                    { icon: "/icones/twitter.png", label: "Twitter", href: "https://www.tiktok.com/@tiktakservice" },
                  ].map((social, index) => {
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="w-14 h-14 flex items-center justify-center hover:scale-110 transition-all duration-300"
                      >
                        <img src={social.icon} alt={social.label} className="w-10 h-10" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
            
            {/* Right - CTA Card */}
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-3xl p-10 md:p-12 space-y-8 h-full flex flex-col justify-center">
                <div className="space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center">
                    <Send className="w-8 h-8 text-primary-foreground" />
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-3xl md:text-4xl font-bold">
                      Prêt à booster <br />votre présence ?
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Parlons de vos objectifs et créons ensemble une stratégie social media qui fait la différence.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full group px-8 py-5 bg-primary hover:bg-accent text-primary-foreground rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 hover:scale-105"
                  >
                    <span className="text-lg font-semibold">Démarrer un projet</span>
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </button>
                  
                  <div className="text-center space-y-2 pt-2">
                    <p className="text-sm text-muted-foreground">
                      ✓ Consultation gratuite • ✓ Sans engagement
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="mt-32 pt-12 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-2xl font-bold">Christian <span className="text-primary">Azane</span></p>
            <p className="text-sm text-muted-foreground mt-1">Community Manager • Développeur Web</p>
          </div>
          
          <p className="text-muted-foreground text-sm">
            © 2026 Christian Azane. Tous droits réservés.
          </p>
        </div>
      </div>
      
      <ProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}