import Image from "next/image";
import Link from "next/link";
import { profile } from "@/data/profile";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#projetos", label: "Projetos" },
  { href: "#habilidades", label: "Habilidades" },
];

const mobileLinks = [...links, { href: "#contato", label: "Contato" }];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-background/70 backdrop-blur-xl">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent"
      />
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3.5">
        <Link href="#top" className="flex items-center gap-2.5">
          <Image
            src={profile.avatar}
            alt=""
            width={32}
            height={32}
            className="size-8 rounded-full border border-border object-cover"
          />
          <span className="text-sm font-semibold tracking-tight">
            {profile.name}
          </span>
        </Link>

        <ul className="hidden items-center gap-8 text-sm text-muted sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group relative inline-block py-1 transition-colors hover:text-foreground"
              >
                {link.label}
                <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#contato"
          className="hidden rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90 sm:block"
        >
          Vamos conversar
        </Link>

        <details className="group relative sm:hidden">
          <summary className="flex size-9 cursor-pointer list-none items-center justify-center rounded-full border border-border text-foreground">
            <span className="sr-only">Abrir menu</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              strokeLinecap="round"
              className="size-4"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </summary>
          <ul className="absolute top-12 right-0 flex w-48 flex-col gap-1 rounded-2xl border border-border bg-card p-2 text-sm shadow-lg shadow-black/40">
            {mobileLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-lg px-3 py-2 text-muted transition-colors hover:bg-background hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </details>
      </nav>
    </header>
  );
}
