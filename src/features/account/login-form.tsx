"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Field, inputClass } from "@/components/ui/form-field";
import { Button } from "@/components/ui/button";
import { loginSchema, type LoginValues } from "@/lib/schemas";

export function LoginForm() {
  const [notice, setNotice] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<LoginValues>({ resolver: zodResolver(loginSchema) });
  return (
    <form onSubmit={handleSubmit(() => setNotice(true))} noValidate className="space-y-1">
      <Field id="login-email" label="Adresse e-mail" error={errors.email?.message}>
        <input id="login-email" type="email" autoComplete="email" aria-invalid={!!errors.email} aria-describedby="login-email-err" className={inputClass} {...register("email")} />
      </Field>
      <Field id="login-pwd" label="Mot de passe" error={errors.password?.message}>
        <input id="login-pwd" type="password" autoComplete="current-password" aria-invalid={!!errors.password} aria-describedby="login-pwd-err" className={inputClass} {...register("password")} />
      </Field>
      <Button type="submit" className="w-full">Se connecter</Button>
      {notice && <p role="status" className="pt-3 text-sm text-muted">L’authentification n’est pas encore connectée (Supabase Auth à brancher). Aucune donnée n’a été envoyée.</p>}
    </form>
  );
}
