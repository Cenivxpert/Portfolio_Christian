import { AccessibleModal } from "./accessible-modal";
import { Mail } from "lucide-react";
import { useState } from "react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ isOpen, onClose }: ProjectModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectDetails: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Contact portfolio — ${formData.name}`);
    const body = encodeURIComponent(
      [
        `Nom : ${formData.name}`,
        `Email : ${formData.email}`,
        `Téléphone : ${formData.phone || "Non renseigné"}`,
        `Entreprise / marque : ${formData.company || "Non renseignée"}`,
        "",
        "Contexte / besoin :",
        formData.projectDetails,
      ].join("\n"),
    );

    window.location.href = `mailto:christseth.NO96@outlook.fr?subject=${subject}&body=${body}`;
    onClose();
  };

  return <AccessibleModal open={isOpen} onClose={onClose} title="Me contacter" description="Votre application email s’ouvrira avec le message prérempli. Vous devrez ensuite l’envoyer.">
        <form onSubmit={handleSubmit} className="p-4 sm:p-5 space-y-4">
          {[
            ["name", "Nom", "Votre nom", "text"],
            ["email", "Email", "votre@email.com", "email"],
            ["phone", "Téléphone", "+212 6XX XXX XXX", "tel"],
            ["company", "Entreprise / Marque", "Nom de l'entreprise", "text"],
          ].map(([name, label, placeholder, type]) => (
            <div className="space-y-2" key={name}>
              <label htmlFor={name} className="text-sm font-medium">{label}</label>
              <input
                type={type}
                id={name}
                name={name}
                value={formData[name as keyof typeof formData]}
                onChange={handleChange}
                placeholder={placeholder}
                required={name === "name" || name === "email"}
                className="w-full px-4 py-3 bg-input-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
              />
            </div>
          ))}

          <div className="space-y-2">
            <label htmlFor="projectDetails" className="text-sm font-medium">Votre message</label>
            <textarea
              id="projectDetails"
              name="projectDetails"
              value={formData.projectDetails}
              onChange={handleChange}
              placeholder="Décrivez brièvement votre besoin, le poste ou le projet..."
              rows={4}
              required
              className="w-full px-4 py-3 bg-input-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none resize-y"
            />
          </div>

          <button type="submit" className="w-full px-6 py-3 bg-primary hover:bg-accent text-primary-foreground rounded-xl transition-all font-semibold flex items-center justify-center gap-2">
            <Mail className="w-4 h-4" />
            Préparer l&apos;email
          </button>
        </form>
      <div className="mt-4 flex flex-wrap gap-4 text-sm">
        <a className="underline" href="mailto:christseth.NO96@outlook.fr">Ouvrir un email</a>
        <a className="underline" href="https://wa.me/212601058129" target="_blank" rel="noopener noreferrer">WhatsApp Business</a>
      </div>
    </AccessibleModal>;
}
