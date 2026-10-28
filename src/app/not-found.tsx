import { ButtonLink } from "@/components/ui/button";
export default function NotFound() {
  return (
    <div className="grid place-items-center gap-4 px-4 py-24 text-center">
      <h1 className="text-display">Page introuvable</h1>
      <p className="text-sm text-muted">Cette page n’existe pas ou a été déplacée.</p>
      <ButtonLink href="/">Retour à l’accueil</ButtonLink>
    </div>
  );
}
