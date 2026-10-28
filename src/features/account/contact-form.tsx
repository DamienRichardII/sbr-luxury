"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Field, inputClass } from "@/components/ui/form-field";
import { Button } from "@/components/ui/button";
import { contactSchema, type ContactValues } from "@/lib/schemas";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactValues>({ resolver: zodResolver(contactSchema) });
  return (
    <form onSubmit={handleSubmit(() => { setSent(true); reset(); })} noValidate className="space-y-1">
      <Field id="c-name" label="Nom" error={errors.name?.message}>
        <input id="c-name" autoComplete="name" aria-invalid={!!errors.name} aria-describedby="c-name-err" className={inputClass} {...register("name")} />
      </Field>
      <Field id="c-email" label="Adresse e-mail" error={errors.email?.message}>
        <input id="c-email" type="email" autoComplete="email" aria-invalid={!!errors.email} aria-describedby="c-email-err" className={inputClass} {...register("email")} />
      </Field>
      <Field id="c-msg" label="Message" error={errors.message?.message}>
        <textarea id="c-msg" rows={5} aria-invalid={!!errors.message} aria-describedby="c-msg-err" className={inputClass} {...register("message")} />
      </Field>
      <Button type="submit" className="w-full sm:w-auto">Envoyer</Button>
      {sent && <p role="status" className="pt-3 text-sm text-muted">Message validé. L’envoi n’est pas encore connecté (aucun message n’a été transmis) : en attendant, contactez-nous en DM.</p>}
    </form>
  );
}
