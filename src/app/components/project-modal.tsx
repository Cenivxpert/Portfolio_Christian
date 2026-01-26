import { X } from "lucide-react";
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulaire soumis:", formData);
    // Ici vous pouvez envoyer les données à votre backend
    alert("Merci ! Je reviendrai vers vous sous peu.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      projectDetails: "",
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
        onClick={onClose}
      ></div>

      {/* Modal - Taille ~1/4 A4 */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[85%] max-w-lg max-h-[100vh] overflow-y-auto bg-card border border-primary/30 rounded-3xl shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border/50">
          <div>
            <h3 className="text-2xl font-bold">Nouveau Projet</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Parlez-moi de votre projet
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-lg hover:bg-primary/10 flex items-center justify-center transition-colors duration-300 group"
          >
            <X className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          {/* Name */}
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Nom
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Votre nom"
              required
              className="w-full px-4 py-2 bg-input-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="votre@email.com"
              required
              className="w-full px-4 py-2 bg-input-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
            />
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium">
              Téléphone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+212 6XX XXX XXX"
              className="w-full px-4 py-2 bg-input-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
            />
          </div>

          {/* Company */}
          <div className="space-y-2">
            <label htmlFor="company" className="text-sm font-medium">
              Entreprise / Marque
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Nom de votre entreprise"
              className="w-full px-4 py-2 bg-input-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
            />
          </div>

          {/* Project Details */}
          <div className="space-y-2">
            <label htmlFor="projectDetails" className="text-sm font-medium">
              Détails du Projet
            </label>
            <textarea
              id="projectDetails"
              name="projectDetails"
              value={formData.projectDetails}
              onChange={handleChange}
              placeholder="Décrivez votre projet, vos objectifs, délais..."
              rows={1}
              required
              className="w-full px-4 py-2 bg-input-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-2 px-6 py-3 bg-primary hover:bg-accent text-primary-foreground rounded-xl transition-all duration-300 font-semibold shadow-lg shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30"
          >
            Envoyer ma demande
          </button>
        </form>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-border/50 text-center text-xs text-muted-foreground">
          Je reviendrai vers vous sous 24h
        </div>
      </div>
    </>
  );
}
