import { Star } from "lucide-react";

const mainTestimonial = {
  quote: "Ma collaboration avec Christian m'a permis de structurer ma présence digitale et de clarifier ma communication auprès de mon audience. Son approche professionnelle et ses contributions créatives ont vraiment fait la différence.",
  author: "Expérience Professionnelle",
  role: "Retours clients",
  company: "Projets en freelance et stage",
  rating: 5,
};

const secondaryTestimonials = [
  {
    quote: "Communication claire, créativité et respect des délais sont ses points forts.",
    author: "Qualités Reconnues",
    role: "Feed-back clients",
  },
  {
    quote: "Capable de proposer des idées adaptées à l'identité de la marque avec autonomie et organisation.",
    author: "Compétences",
    role: "Professionnalisme",
  },
  {
    quote: "Son double expertise en community management et développement web est un vrai atout pour les projets digitaux.",
    author: "Double Compétence",
    role: "Valeur Ajoutée",
  },
];

export function Testimonials() {
  return (
    <section className="pt-8 pb-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl w-full mx-auto">
        <div className="space-y-20">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center">
            <div className="space-y-6">
              <div className="w-16 h-1 bg-primary rounded-full mx-auto"></div>
              <h2 className="text-5xl md:text-6xl font-bold">Preuves de Collaboration</h2>
              <p className="text-xl text-muted-foreground">
                Les relations de confiance et les résultats mesurables sont au cœur de mon approche.
              </p>
            </div>
          </div>
          
          {/* Main Testimonial */}
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 rounded-3xl p-10 md:p-16 space-y-8">
              {/* Decorative Quote */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-xl shadow-primary/20">
                <svg className="w-8 h-8 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              
              {/* Rating */}
              <div className="flex justify-center gap-1">
                {[...Array(mainTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-xl md:text-2xl text-center leading-relaxed">
                "{mainTestimonial.quote}"
              </p>
              
              {/* Author */}
              <div className="text-center space-y-2 pt-4">
                <p className="text-xl font-semibold">{mainTestimonial.author}</p>
                <p className="text-muted-foreground">
                  {mainTestimonial.role} • {mainTestimonial.company}
                </p>
              </div>
            </div>
          </div>
          
          {/* Secondary Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {secondaryTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-8 space-y-4 hover:border-primary transition-all duration-300 group"
              >
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                
                <div className="pt-4 border-t border-border group-hover:border-primary transition-colors duration-300">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}