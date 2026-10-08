export function About() {
  const pillars = [
    {
      icon: "🧭",
      title: "Gestion de projet IT",
      text: "Structuration de roadmaps, backlog et sprints avec Agile/Scrum, Notion et GitHub Projects.",
    },
    {
      icon: "💻",
      title: "Développement Web",
      text: "React, Vite, Tailwind CSS, Supabase, Git/GitHub, PHP, MySQL et déploiement Vercel.",
    },
    {
      icon: "🎨",
      title: "UI/UX & Produit",
      text: "Conception et prototypage Figma, intégration d'interfaces et amélioration continue de l'expérience utilisateur.",
    },
    {
      icon: "🤖",
      title: "IA & Qualité",
      text: "Évaluation de réponses IA, annotation, contrôle qualité et intégration de workflows IA dans des produits digitaux.",
    },
  ];

  return (
    <section className="pt-8 pb-16 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-4">
              <div className="w-16 h-1 bg-primary rounded-full" />
              <h2 className="text-5xl md:text-6xl font-bold">À propos</h2>
              <p className="text-muted-foreground">
                Profil hybride orienté produit, exécution technique et coordination.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-10">
            <div className="space-y-6">
              <p className="text-2xl md:text-3xl leading-relaxed">
                Professionnel IT et digital titulaire d&apos;un Master en gestion de projet informatique,
                avec une pratique concrète du <span className="text-primary font-semibold">développement web,
                de l&apos;UI/UX, de l&apos;IA et du digital</span>.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ces dernières années, j&apos;ai travaillé sur des applications web et mobiles, des projets de présence digitale,
                des workflows Agile et des missions d&apos;évaluation de contenus IA. Mon objectif est de relier la vision produit,
                les besoins utilisateurs et l&apos;exécution technique de manière claire et mesurable.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="rounded-2xl border border-border bg-card p-6 space-y-4 hover:border-primary/50 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-2xl">
                    {pillar.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{pillar.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{pillar.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
