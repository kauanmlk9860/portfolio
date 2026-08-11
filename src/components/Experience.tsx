import { experience } from "@/data/profile";
import { BriefcaseIcon, GraduationCapIcon } from "./icons";

export function Experience() {
  return (
    <section
      id="experiencia"
      className="mx-auto max-w-5xl border-t border-border px-6 py-20"
    >
      <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">
        Experiência &amp; Formação
      </h2>
      <ol className="mt-10 space-y-10 border-l border-border pl-8">
        {experience.map((item) => {
          const Icon = item.type === "work" ? BriefcaseIcon : GraduationCapIcon;
          return (
            <li key={item.title} className="relative">
              <span className="absolute top-0.5 -left-[calc(2rem+1px)] flex size-8 items-center justify-center rounded-full border border-border bg-card text-accent">
                <Icon className="size-4" />
              </span>
              <p className="text-xs font-medium tracking-wide text-muted uppercase">
                {item.period}
              </p>
              <h3 className="mt-1 text-lg font-medium">{item.title}</h3>
              <p className="text-sm text-accent">{item.place}</p>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
