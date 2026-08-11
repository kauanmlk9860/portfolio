import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section
      id="projetos"
      className="mx-auto max-w-5xl border-t border-border px-6 py-20"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-4">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">
          Projetos
        </h2>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="text-sm text-muted transition-colors hover:text-foreground"
        >
          Ver todos no GitHub →
        </a>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
