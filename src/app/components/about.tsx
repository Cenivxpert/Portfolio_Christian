export function About() {
  return (
    <section className="pt-8 pb-16 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left - Title */}
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <div className="space-y-4">
                <div className="w-16 h-1 bg-primary rounded-full"></div>
                <h2 className="text-5xl md:text-6xl font-bold">
                  À Propos
                </h2>
              </div>
            </div>
          </div>
          
          {/* Right - Content */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-6">
              <p className="text-2xl md:text-3xl leading-relaxed">
                Développeur web et community manager alliant <span className="text-primary font-semibold">stratégie, créativité et techniques</span> pour créer des expériences digitales impactantes.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Mon approche repose sur un équilibre entre stratégie, créativité et exécution technique. Avant de produire du contenu ou de développer une solution digitale, je cherche à comprendre les objectifs du projet, la cible et l'identité de la marque afin de proposer des actions cohérentes et mesurables.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold">Stratégie Digitale</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Définition de lignes éditoriales cohérentes et alignement du contenu avec les objectifs de visibilité et de croissance.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl">💡</span>
                </div>
                <h3 className="text-xl font-semibold">Créativité & Branding</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Conception de contenus visuels et messages engageants, respect de l'identité de marque et storytelling impactant.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl">💻</span>
                </div>
                <h3 className="text-xl font-semibold">Compétences Techniques</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Développement web (React, Tailwind), compréhension des outils digitaux et collaboration fluide avec les équipes techniques.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold">Analyse & Optimisation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Suivi des performances, veille concurrentielle et optimisation continue des actions pour des résultats mesurables.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}