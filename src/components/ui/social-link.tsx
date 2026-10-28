import { InstagramIcon, SnapchatIcon, TiktokIcon } from "./social-icons";

export function SocialIcon({ id, className }: { id: string; className?: string }) {
  if (id === "tiktok") return <TiktokIcon className={className} />;
  if (id === "instagram") return <InstagramIcon className={className} />;
  return <SnapchatIcon className={className} />;
}
