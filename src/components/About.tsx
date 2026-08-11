import { profile, quickFacts } from "@/data/profile";
import { BriefcaseIcon, CodeIcon, GraduationCapIcon, MapPinIcon, QuoteIcon } from "./icons";

const factIcons = [MapPinIcon, GraduationCapIcon, BriefcaseIcon, CodeIcon];

export function About() {
  return (
    <section
      id="sobre"
      className="mx-auto max-w-5xl border-t border-border px-6 py-20"
    >
      <div className="flex items-center gap-4">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">
          Sobre mim
        </h2>
        <span className="h-px flex-1 bg-gradient-to-r from-accent/40 to-transparent" />
      </div>

      <div className="mt-10 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div className="relative">
          <QuoteIcon className="size-10 text-accent/30" />
          <p className="mt-4 max-w-2xl text-2xl leading-relaxed text-foreground sm:text-3xl">
            {profile.bio[0]}
          </p>
          <div className="mt-6 max-w-xl space-y-4 text-lg leading-relaxed text-muted">
            {profile.bio.slice(1).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="relative self-start overflow-hidden rounded-2xl border border-border bg-card p-6">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-16 -right-16 size-48 rounded-full bg-accent/20 blur-3xl"
          />
          <dl className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {quickFacts.map((fact, index) => {
              const Icon = factIcons[index % factIcons.length];
              return (
                <div key={fact.label} className="flex items-start gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-border bg-background text-accent">
                    <Icon className="size-4" />
                  </span>
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-wide text-muted">
                      {fact.label}
                    </dt>
                    <dd className="mt-0.5 text-sm font-medium text-foreground">
                      {fact.value}
                    </dd>
                  </div>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </section>
  );
}
