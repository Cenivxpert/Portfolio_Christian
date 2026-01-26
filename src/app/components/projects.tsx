import React from "react";
import { TrendingUp, Users, Eye, Heart } from "lucide-react";

const projects = [
  {
    client: "TikTak Livraison",
    platform: "Instagram & TikTok",
    image: "/images/tiktak_insta.png",
    description: "Gestion complète des réseaux sociaux et création de contenus digitaux promotionnels pour une application de livraison marocaine.",
    metrics: [
      { label: "Rôle", value: "CM + Marketing", icon: Heart },
      { label: "Plateforme", value: "Multi-canaux", icon: Eye },
    ],
    tag: "Community Mgmt",
    links: {
      tiktok: "https://www.tiktok.com/@tiktakservice",
      instagram: "https://www.instagram.com/tiktakservice2025"
    }
  },
  {
    client: "El Shammah Cosmetics",
    platform: "Instagram & TikTok",
    image: "/images/el_shammah.jpg",
    description: "Community management freelance avec création de visuels et mise en avant des produits e-commerce sur les pages Instagram, TikTok et WhatsApp.",
    metrics: [
      { label: "Rôle", value: "Community Manager", icon: Users },
      { label: "Format", value: "Visuels produits", icon: TrendingUp },
    ],
    tag: "E-commerce",
    links: {
      tiktok: "https://www.tiktok.com/@el.shammah_cosmetics01"
    }
  },
  {
    client: "CENIV - Projet Personnel",
    platform: "Web, Instagram, LinkedIn",
    image: "/images/ceniv_affiche_story.jpg",
    description: "Création d'une marque digitale complète avec développement du site web (React, Vite, Tailwind) et gestion des réseaux sociaux.",
    metrics: [
      { label: "Rôle", value: "Fondateur + Dev", icon: Users },
      { label: "Stack", value: "React/Tailwind", icon: TrendingUp },
    ],
    tag: "Design & Dev",
    links: {
      website: "https://ceniv.vercel.app/"
    }
  },
  {
    client: "Clermont School of Business",
    platform: "Réseaux Sociaux",
    image: "/images/clermont_school.png",
    description: "Stage : création de contenus, analyse concurrentielle et structuration de la communication digitale institutionnelle.",
    metrics: [
      { label: "Rôle", value: "Community Manager", icon: Users },
      { label: "Type", value: "Stage", icon: TrendingUp },
    ],
    tag: "Education",
    links: {
      instagram: "https://www.instagram.com/reel/DJtfKyANMEw/",
      facebook: "https://www.facebook.com/reel/1191961192414029/",
      tiktok: "https://www.tiktok.com/@esc_clermontbs_ca/video/7492463265503661317"
    }
  },
  {
    client: "Mythayun (Valex Group)",
    platform: "Application Web",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFjdCUyMHdlYnNpdGV8ZW58MXx8fHwxNzY1Njg3MTAzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Stage : UI/UX design, intégration de maquettes et développement web pour une application en environnement professionnel international.",
    metrics: [
      { label: "Rôle", value: "Analyste Programmeur", icon: Users },
      { label: "Client", value: "Canada", icon: TrendingUp },
    ],
    tag: "Développement",
    links: {}
  },
  {
    client: "Portfolio & Applications",
    platform: "Projets Techniques",
    image: "/images/portfolio.png",
    description: "Développement de projets techniques : site vitrine React/Tailwind, application CRUD (Node.js, MySQL), support technique TikTak App.",
    metrics: [
      { label: "Stack", value: "React/Node.js", icon: Users },
      { label: "Projets", value: "3+ projets", icon: TrendingUp },
    ],
    tag: "Full Stack",
    links: {}
  },
];

export function Projects() {
  return (
    <section id="projects" className="pt-8 pb-16 px-6 md:px-12 lg:px-24 bg-linear-to-b from-background to-secondary/20">
      <div className="max-w-7xl w-full mx-auto">
        <div className="space-y-20">
          {/* Header */}
          <div className="max-w-3xl">
            <div className="space-y-6">
              <div className="w-16 h-1 bg-primary rounded-full"></div>
              <h2 className="text-5xl md:text-6xl font-bold">Projets</h2>
              <p className="text-xl text-muted-foreground">
                Découvrez comment j'ai aidé mes clients à développer leur présence digitale et à atteindre leurs objectifs.
              </p>
            </div>
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary transition-all duration-500 hover:transform hover:-translate-y-2"
              >
                {/* Image with Mockup Style */}
                <div className="relative h-80 overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
                  <img
                    src={project.image}
                    alt={project.client}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
                  
                  {/* Platform Badge */}
                  <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm px-4 py-2 rounded-full border border-border">
                    <p className="text-xs font-medium">{project.platform}</p>
                  </div>
                  
                  {/* Tag */}
                  <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <p className="text-xs font-medium text-primary-foreground">{project.tag}</p>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 md:p-8 space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold">{project.client}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                    {project.metrics.map((metric, idx) => {
                      const Icon = metric.icon;
                      return (
                        <div key={idx} className="space-y-2">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Icon className="w-4 h-4" />
                            <span className="text-xs">{metric.label}</span>
                          </div>
                          <p className="text-2xl font-bold text-primary">{metric.value}</p>
                        </div>
                      );
                    })}
                  </div>
                  
                  {/* Social Links */}
                  {Object.keys(project.links).length > 0 && (
                    <div className="flex items-center gap-3 pt-4 border-t border-border">
                      {project.links.instagram && (
                        <a
                          href={project.links.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-10 h-10 rounded-full hover:scale-110 transition-all duration-300"
                          aria-label="Instagram"
                        >
                          <img src="/icones/instagram.png" alt="Instagram" className="w-8 h-8" />
                        </a>
                      )}
                      {project.links.facebook && (
                        <a
                          href={project.links.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-10 h-10 rounded-full hover:scale-110 transition-all duration-300"
                          aria-label="Facebook"
                        >
                          <img src="/icones/facebook.png" alt="Facebook" className="w-8 h-8" />
                        </a>
                      )}
                      {project.links.tiktok && (
                        <a
                          href={project.links.tiktok}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-10 h-10 rounded-full hover:scale-110 transition-all duration-300"
                          aria-label="TikTok"
                        >
                          <img src="/icones/tiktok.png" alt="TikTok" className="w-8 h-8" />
                        </a>
                      )}
                      {project.links.website && (
                        <a
                          href={project.links.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-10 h-10 rounded-full hover:scale-110 transition-all duration-300"
                          aria-label="Site web"
                        >
                          <img src="/icones/website_web.png" alt="Site web" className="w-8 h-8" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
                
                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            ))}
          </div>
          
          {/* CTA */}
          <div className="text-center pt-8">
            <button className="px-8 py-4 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-xl transition-all duration-300">
              Voir tous les projets
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}