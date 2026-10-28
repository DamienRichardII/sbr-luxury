"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { newsletterSchema, type NewsletterValues } from "@/lib/schemas";
import { siteConfig } from "@/data/site";

export function NewsletterForm() {
  const [done, setDone] = useState(false);
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<NewsletterValues>({ resolver: zodResolver(newsletterSchema) });
  const onSubmit = async () => {
    // TODO backend : envoyer l'e-mail à Supabase / outil d'emailing. Rien n'est enregistré pour l'instant.
    await new Promise((r) => setTimeout(r, 300));
    setDone(true);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-4">
      <div className="flex flex-col gap-2 sm:flex-row">
        <div className="flex-1">
          <label htmlFor="nl-email" className="sr-only">Adresse e-mail</label>
          <input
            id="nl-email" type="email" autoComplete="email" placeholder="Votre adresse e-mail"
            aria-invalid={!!errors.email} aria-describedby="nl-msg"
            className="h-12 w-full rounded-full border border-stone bg-white px-5 text-base outline-none focus:border-ink"
            {...register("email", { onChange: () => setDone(false) })}
          />
        </div>
        <button type="submit" disabled={isSubmitting} className="h-12 rounded-full bg-ink px-6 text-sm font-medium text-white disabled:opacity-60">S’inscrire</button>
      </div>
      <p id="nl-msg" role="status" className={`mt-2 min-h-5 text-xs ${errors.email ? "text-red-700" : "text-muted"}`}>
        {errors.email?.message ?? (done ? `Merci ! ${siteConfig.backendConnected ? "Votre inscription est confirmée." : "(Mode démo : aucune adresse n’est enregistrée tant que le backend n’est pas connecté.)"}` : "")}
      </p>
    </form>
  );
}
