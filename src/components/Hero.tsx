import Image from "next/image";
import Link from "next/link";
import { profile, stats } from "@/data/profile";
import { ArrowDownIcon, GitHubIcon, LinkedInIcon } from "./icons";

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex min-h-[calc(100vh-65px)] max-w-5xl flex-col justify-center px-6 py-20"
    >
      <div className="flex flex-col gap-6">
        {profile.available && (
          <span className="flex w-fit items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500/60" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            Aberto a novas oportunidades
          </span>
        )}

        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          <Image
            src={profile.avatar}
            alt={profile.name}
            width={96}
            height={96}
            priority
            className="size-24 rounded-full border border-border object-cover"
          />
          <div>
            <p className="text-sm font-medium text-accent">
              Olá, eu sou {profile.name.split(" ")[0]} 👋
            </p>
            <h1 className="mt-1 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
              {profile.role} em constante evolução.
            </h1>
          </div>
        </div>

        <p className="max-w-xl text-lg text-muted">{profile.tagline}</p>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <Link
            href="#projetos"
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            Ver projetos
          </Link>
          <Link
            href="#contato"
            className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
          >
            Falar comigo
          </Link>
          <div className="flex items-center gap-3 pl-2 text-muted">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="transition-colors hover:text-foreground"
            >
              <GitHubIcon className="size-5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="transition-colors hover:text-foreground"
            >
              <LinkedInIcon className="size-5" />
            </a>
          </div>
        </div>

        <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-border pt-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dd className="text-2xl font-semibold text-foreground">
                {stat.value}
              </dd>
              <dt className="text-sm text-muted">{stat.label}</dt>
            </div>
          ))}
        </dl>

        <Link
          href="#sobre"
          aria-label="Rolar para a seção Sobre"
          className="mt-6 flex w-fit items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
        >
          Saiba mais sobre mim
          <ArrowDownIcon className="size-4 animate-bounce" />
        </Link>
      </div>
    </section>
  );
}
