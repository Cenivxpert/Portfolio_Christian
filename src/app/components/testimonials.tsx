import { Bot, CheckCircle2, GraduationCap, PanelsTopLeft } from "lucide-react";

const evidence = [
  {
    icon: PanelsTopLeft,
    title: "Produit numérique",
    label: "Ceniv Pulse",
    text: "Conception produit, développement React/Vite, Supabase, intégration GitHub, workflows d'approbation, tests et déploiements contrôlés.",
  },
  {
    icon: Bot,
    title: "IA & qualité",
    label: "AI Training",
    text: "Évaluation de réponses IA, annotation, contrôle qualité et travail avec des critères structurés dans des environnements de projets distants.",
  },
  {
    icon: GraduationCap,
    title: "Transmission",
    label: "IT & Digital Instructor",
    text: "Préparation de contenus pédagogiques en culture numérique, développement web, gestion de projet IT et outils bureautiques.",
  },
];

export function Testimonials() {
  return (
    <section className="pt-8 pb-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl w-full mx-auto space-y-14">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="w-16 h-1 bg-primary rounded-full mx-auto" />
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">Repères professionnels</h2>
          <p className="text-base sm:text-xl text-muted-foreground">
            Des expériences concrètes qui illustrent mon évolution récente, sans témoignages génériques ni résultats inventés.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {evidence.map(({ icon: Icon, title, label, text }) => (
            <div key={title} className="bg-card border border-border rounded-2xl p-5 sm:p-8 space-y-5 hover:border-primary/60 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-primary font-semibold">{label}</p>
                <h3 className="text-xl font-semibold mt-1">{title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">{text}</p>
              <div className="pt-4 border-t border-border flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                Expérience documentée
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
