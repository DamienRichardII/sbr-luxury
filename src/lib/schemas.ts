import { z } from "zod";

export const newsletterSchema = z.object({
  email: z.string().min(1, "Veuillez saisir votre adresse e-mail.").email("Adresse e-mail invalide."),
});
export const contactSchema = z.object({
  name: z.string().min(2, "Votre nom est requis."),
  email: z.string().min(1, "Adresse e-mail requise.").email("Adresse e-mail invalide."),
  message: z.string().min(10, "Votre message doit contenir au moins 10 caractères."),
});
export const loginSchema = z.object({
  email: z.string().min(1, "Adresse e-mail requise.").email("Adresse e-mail invalide."),
  password: z.string().min(8, "8 caractères minimum."),
});
export type NewsletterValues = z.infer<typeof newsletterSchema>;
export type ContactValues = z.infer<typeof contactSchema>;
export type LoginValues = z.infer<typeof loginSchema>;
