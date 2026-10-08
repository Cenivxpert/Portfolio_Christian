import { BrainCircuit, Code, LayoutDashboard, Megaphone } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Développement Web",
    description: "Conception et amélioration de produits web modernes, responsive et déployables.",
    features: ["React, Vite, Tailwind CSS", "Supabase, Git/GitHub, Vercel", "PHP, MySQL & intégration API"],
  },
  {
    icon: LayoutDashboard,
    title: "Gestion de Projet IT & Agile",
    description: "Organisation et suivi de projets digitaux avec une approche structurée et itérative.",
    features: ["Agile / Scrum", "Notion & GitHub Projects", "Backlog, sprints, tests & documentation"],
  },
  {
    icon: BrainCircuit,
    title: "IA, Qualité & Produit Digital",
    description: "Évaluation de contenus IA et intégration de garde-fous, tests et workflows contrôlés.",
    features: ["AI training & response evaluation", "Quality assurance", "Workflows IA orientés produit"],
  },
  {
    icon: Megaphone,
    title: "Digital, Contenu & SEO",
    description: "Gestion de présence digitale, contenus de marque et optimisation de visibilité.",
    features: ["Community management", "SEO & veille concurrentielle", "Canva, contenu & branding"],
  },
];

export function Services() {
  return (
    <section className="pt-8 pb-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl w-full mx-auto space-y-16">
        <div className="max-w-3xl space-y-6">
          <div className="w-16 h-1 bg-primary rounded-full" />
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">Expertise</h2>
          <p className="text-base sm:text-xl text-muted-foreground">
            Une approche polyvalente pour passer de l&apos;idée à un produit digital structuré, visible et maintenable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="group relative bg-card border border-border rounded-2xl p-5 sm:p-8 md:p-10 space-y-6 hover:border-primary transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-all duration-500">
                      <Icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <span className="text-5xl font-bold text-primary/10">0{index + 1}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  <ul className="space-y-2 pt-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 mt-2 rounded-full bg-primary shrink-0" />
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
    </section>
  );
}
