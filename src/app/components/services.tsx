import { MessageCircle, Sparkles, Code, Zap } from "lucide-react";

const services = [
  {
    icon: MessageCircle,
    title: "Community Management",
    description: "Gestion et développement de la présence des marques sur les réseaux sociaux.",
    features: ["Ligne éditoriale & calendrier", "Gestion Instagram & TikTok", "Cohérence de marque"],
  },
  {
    icon: Sparkles,
    title: "Création de Contenus & Branding",
    description: "Conception de contenus visuels adaptés aux réseaux sociaux et au e-commerce.",
    features: ["Posts, stories, formats courts", "Supports promotionnels", "Storytelling de marque"],
  },
  {
    icon: Code,
    title: "Développement Web & Solutions Digitales",
    description: "Conception de sites web modernes et fonctionnels avec technologies actuelles.",
    features: ["React, Tailwind CSS, Vite", "Applications CRUD (Node.js, MySQL)", "UI/UX optimisée"],
  },
  {
    icon: Zap,
    title: "Gestion de Projets Digitaux",
    description: "Coordination et suivi de projets digitaux de bout en bout avec méthodologie agile.",
    features: ["Méthodologie Scrum", "Analyse fonctionnelle", "Coordination technique & créatif"],
  },
];

export function Services() {
  return (
    <section className="pt-8 pb-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl w-full mx-auto">
        <div className="space-y-20">
          {/* Header */}
          <div className="max-w-3xl">
            <div className="space-y-6">
              <div className="w-16 h-1 bg-primary rounded-full"></div>
              <h2 className="text-5xl md:text-6xl font-bold">Mes Services</h2>
              <p className="text-xl text-muted-foreground">
                Des solutions complètes pour développer et animer votre présence digitale avec impact.
              </p>
            </div>
          </div>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-card border border-border rounded-2xl p-8 md:p-10 space-y-6 hover:border-primary transition-all duration-500 overflow-hidden"
                >
                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  
                  <div className="relative space-y-6">
                    {/* Icon */}
                    <div className="flex items-center justify-between">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                        <Icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                      </div>
                      <span className="text-6xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors duration-500">
                        0{index + 1}
                      </span>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-semibold">{service.title}</h3>
                    
                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Features */}
                    <ul className="space-y-2 pt-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}