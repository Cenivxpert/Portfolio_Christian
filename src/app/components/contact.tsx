import { Github, Globe2, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { ProjectModal } from "./project-modal";

export function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/christian-serge-azane-7476b9227" },
    { icon: Github, label: "GitHub", href: "https://github.com/Cenivxpert" },
    { icon: WhatsAppIcon, label: "WhatsApp Business", href: "https://wa.me/212601058129" },
    { icon: Globe2, label: "CENIV", href: "https://ceniv.vercel.app" },
  ];

  return (
    <section id="contact" className="pt-8 pb-16 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl w-full mx-auto space-y-16">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="w-16 h-1 bg-primary rounded-full mx-auto" />
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">Échangeons</h2>
          <p className="text-base sm:text-xl text-muted-foreground">
            Opportunité professionnelle, projet digital ou collaboration : je suis disponible à Marrakech et à distance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <a
              href="mailto:christseth.NO96@outlook.fr"
              className="group flex items-start gap-3 sm:gap-6 p-4 sm:p-6 rounded-2xl bg-card border border-border hover:border-primary transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                <Mail className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
              </div>
              <div className="space-y-1 min-w-0">
                <p className="text-sm text-muted-foreground uppercase tracking-wide">Email</p>
                <p className="text-sm sm:text-lg md:text-xl font-semibold break-all">christseth.NO96@outlook.fr</p>
              </div>
            </a>

            <a href="tel:+212601058129" className="group flex items-start gap-3 sm:gap-6 p-4 sm:p-6 rounded-2xl bg-card border border-border hover:border-primary transition-all">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                <Phone className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
              </div>
              <div className="space-y-1 min-w-0">
                <p className="text-sm text-muted-foreground uppercase tracking-wide">Téléphone</p>
                <p className="text-lg sm:text-xl font-semibold">+212 601 058 129</p>
              </div>
            </a>
            <div className="flex items-start gap-3 sm:gap-6 p-4 sm:p-6 rounded-2xl bg-card border border-border">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground uppercase tracking-wide">Localisation</p>
                <p className="text-xl font-semibold">Marrakech, Maroc</p>
                <p className="text-sm text-muted-foreground">Ouvert aux opportunités locales et remote</p>
              </div>
            </div>

            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-12 h-12 rounded-xl border border-border bg-card hover:border-primary hover:bg-primary/5 flex items-center justify-center transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
            <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-3xl p-6 sm:p-10 md:p-12 space-y-8 h-full flex flex-col justify-center">
              <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center">
                <Send className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl md:text-4xl font-bold">Parlons de votre besoin</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Développement web, coordination IT, UI/UX, IA ou présence digitale : partagez-moi le contexte et vos objectifs.
                </p>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full group px-8 py-5 bg-primary hover:bg-accent text-primary-foreground rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-primary/20"
              >
                <span className="text-lg font-semibold">Me contacter</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-32 pt-12 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-2xl font-bold">Christian <span className="text-primary">Azane</span></p>
            <p className="text-sm text-muted-foreground mt-1">Web • IT Project Management • AI & Digital</p>
          </div>
          <p className="text-muted-foreground text-sm">© 2026 Christian Azane. Tous droits réservés.</p>
        </div>
      </div>

      <ProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
