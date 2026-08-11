import { profile } from "@/data/profile";
import { GitHubIcon, InstagramIcon, LinkedInIcon, MailIcon } from "./icons";

const links = [
  {
    label: profile.email,
    href: `mailto:${profile.email}`,
    icon: MailIcon,
  },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    icon: LinkedInIcon,
  },
  {
    label: "GitHub",
    href: profile.github,
    icon: GitHubIcon,
  },
  {
    label: "Instagram",
    href: profile.instagram,
    icon: InstagramIcon,
  },
];

export function Contact() {
  return (
    <section
      id="contato"
      className="mx-auto max-w-5xl border-t border-border px-6 py-20"
    >
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-8 py-14 sm:px-14">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-20 -right-20 size-72 rounded-full bg-accent/20 blur-3xl"
        />
        <h2 className="relative text-sm font-semibold uppercase tracking-widest text-accent">
          Contato
        </h2>
        <p className="relative mt-6 max-w-xl text-2xl leading-relaxed sm:text-3xl">
          Tem um projeto em mente ou quer trocar uma ideia? Me manda uma
          mensagem.
        </p>
        <p className="relative mt-3 max-w-xl text-muted">
          Respondo por qualquer um dos canais abaixo — o e-mail e o LinkedIn
          são os mais rápidos.
        </p>
        <div className="relative mt-10 flex flex-wrap gap-4">
          {links.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
              className="flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
            >
              <Icon className="size-4" />
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
