import { ExternalLink, Figma, Github, Smartphone } from "lucide-react";

type ProjectLink = {
  label: string;
  href: string;
  icon?: "figma" | "github" | "app";
};

const projects: Array<{
  client: string;
  platform: string;
  image: string;
  description: string;
  tag: string;
  period: string;
  stack: string[];
  links: ProjectLink[];
}> = [
  {
    client: "Ceniv Pulse",
    platform: "AI-powered Digital Presence Platform",
    image: "/images/portfolio.png",
    description:
      "Application SaaS en cours de développement : architecture produit, authentification Supabase, intégration GitHub, génération IA, approbations contrôlées, tests, CI et déploiements Vercel.",
    tag: "Product & AI",
    period: "2026 — présent",
    stack: ["React", "Vite", "Supabase", "GitHub", "Vercel", "Agile/Scrum"],
    links: [
      { label: "Voir l'application", href: "https://cenivai.vercel.app" },
      { label: "GitHub", href: "https://github.com/Cenivxpert/ceniv", icon: "github" },
    ],
  },
  {
    client: "MySuku",
    platform: "Application mobile • UI/UX",
    image: "/images/mysuku-cover.png",
    description:
      "Conception et amélioration de maquettes et parcours mobiles sur Figma pour une application de livraison, actuellement en développement et phase de test.",
    tag: "Mobile UI/UX",
    period: "2026",
    stack: ["Figma", "Prototypage", "Mobile UX", "Design system"],
    links: [
      { label: "App Store", href: "https://apps.apple.com/es/app/mysuku/id6766038228?l=en-GB", icon: "app" },
      { label: "Figma Design", href: "https://www.figma.com/design/31ljfUAnr4dieybHqTKCsb/MySuku-App?m=auto", icon: "figma" },
      { label: "Prototype", href: "https://www.figma.com/proto/31ljfUAnr4dieybHqTKCsb?node-id=0-1", icon: "figma" },
      { label: "Figma V2", href: "https://www.figma.com/design/ZvJJTWTmwGrg2VZTJ25JvG/MySuku-App-2?m=auto", icon: "figma" },
      { label: "Prototype V2", href: "https://www.figma.com/proto/ZvJJTWTmwGrg2VZTJ25JvG?node-id=0-1", icon: "figma" },
    ],
  },
  {
    client: "CENIV — Design, Digital & Communication",
    platform: "Site & présence digitale",
    image: "/images/ceniv_affiche_story.jpg",
    description:
      "Création d'une marque digitale et développement d'un site web avec React, Vite et Tailwind CSS, complétés par des supports de communication et une présence multi-canal.",
    tag: "Design & Dev",
    period: "Depuis 2025",
    stack: ["React", "Vite", "Tailwind", "EmailJS", "Vercel"],
    links: [{ label: "Site déployé", href: "https://ceniv.vercel.app" }],
  },
  {
    client: "TikTak Livraison",
    platform: "Application & réseaux sociaux",
    image: "/images/tiktak_insta.png",
    description:
      "Community management, création de contenus digitaux et accompagnement de la visibilité d'une application de livraison à domicile.",
    tag: "Community Mgmt",
    period: "2025 — présent",
    stack: ["Content", "Canva", "Instagram", "TikTok"],
    links: [
      { label: "App Store", href: "https://apps.apple.com/es/app/tiktak-livraison-à-domicile/id6740292789?l=en-GB", icon: "app" },
      { label: "Instagram", href: "https://www.instagram.com/tiktakservice2025" },
      { label: "TikTok", href: "https://www.tiktok.com/@tiktakservice" },
    ],
  },
  {
    client: "MythaYun — Valex Group",
    platform: "Application web",
    image: "/images/portfolio.png",
    description:
      "Contribution UI/UX, intégration de maquettes et développement web dans un contexte d'équipe distribuée entre le Canada et le Maroc.",
    tag: "Web Development",
    period: "2025",
    stack: ["React", "Vite", "Tailwind", "UI/UX"],
    links: [],
  },
  {
    client: "SpendEase",
    platform: "Expense Management App",
    image: "/images/portfolio.png",
    description:
      "Application de gestion de dépenses avec authentification, revenus/dépenses, catégories et intégration base de données.",
    tag: "Full Stack",
    period: "Projet personnel",
    stack: ["PHP", "JavaScript", "MySQL"],
    links: [{ label: "GitHub", href: "https://github.com/Clolas7/SpendEase", icon: "github" }],
  },
];

function LinkIcon({ type }: { type?: ProjectLink["icon"] }) {
  if (type === "figma") return <Figma className="w-4 h-4" />;
  if (type === "github") return <Github className="w-4 h-4" />;
  if (type === "app") return <Smartphone className="w-4 h-4" />;
  return <ExternalLink className="w-4 h-4" />;
}

export function Projects() {
  return (
    <section id="projects" className="pt-8 pb-16 px-6 md:px-12 lg:px-24 bg-linear-to-b from-background to-secondary/20">
      <div className="max-w-7xl w-full mx-auto space-y-16">
        <div className="max-w-3xl space-y-6">
          <div className="w-16 h-1 bg-primary rounded-full" />
          <p className="text-sm uppercase tracking-[0.25em] text-primary font-semibold">Sélection récente</p>
          <h2 className="text-5xl md:text-6xl font-bold">Projets</h2>
          <p className="text-xl text-muted-foreground">
            Des projets techniques, produit et digitaux présentés du plus récent au plus ancien.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <article
              key={project.client}
              className="group bg-card border border-border rounded-3xl overflow-hidden hover:border-primary/60 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="relative h-64 md:h-72 overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                <img
                  src={project.image}
                  alt={project.client}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <div className="absolute top-4 left-4 bg-primary/90 px-4 py-2 rounded-full text-xs font-medium text-primary-foreground">
                  {project.tag}
                </div>
                <div className="absolute top-4 right-4 bg-card/90 border border-border px-4 py-2 rounded-full text-xs">
                  {project.period}
                </div>
              </div>

              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <p className="text-sm text-primary font-medium mb-2">{project.platform}</p>
                  <h3 className="text-2xl md:text-3xl font-semibold">{project.client}</h3>
                  <p className="text-muted-foreground leading-relaxed mt-3">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="px-3 py-1.5 rounded-full bg-primary/8 border border-primary/15 text-xs text-muted-foreground">
                      {item}
                    </span>
                  ))}
                </div>

                {project.links.length > 0 && (
                  <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-border hover:border-primary hover:bg-primary/5 text-sm transition-all"
                      >
                        <LinkIcon type={link.icon} />
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
