import { profile } from "@/data/profile";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./icons";

export function Footer() {
  return (
    <footer className="mx-auto flex max-w-5xl flex-col gap-4 border-t border-border px-6 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
      <p>
        © {new Date().getFullYear()} {profile.name}. Feito com Next.js e
        Tailwind CSS.
      </p>
      <div className="flex items-center gap-4">
        <a
          href={`mailto:${profile.email}`}
          aria-label="E-mail"
          className="transition-colors hover:text-foreground"
        >
          <MailIcon className="size-4" />
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="transition-colors hover:text-foreground"
        >
          <LinkedInIcon className="size-4" />
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="transition-colors hover:text-foreground"
        >
          <GitHubIcon className="size-4" />
        </a>
      </div>
    </footer>
  );
}
