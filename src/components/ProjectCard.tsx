import type { Project } from "@/data/projects";
import { ExternalLinkIcon, GitHubIcon } from "./icons";

const gradients = [
  "from-violet-500 to-fuchsia-500",
  "from-sky-500 to-cyan-400",
  "from-amber-500 to-orange-500",
  "from-emerald-500 to-teal-400",
  "from-rose-500 to-pink-500",
  "from-indigo-500 to-violet-500",
  "from-lime-500 to-emerald-500",
];

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const stopWords = new Set(["de", "da", "do", "das", "dos", "e"]);
  const words = project.name
    .replace(/\(.*?\)/g, "")
    .replace(/[^\p{L}\p{N} ]/gu, "")
    .split(" ")
    .filter((word) => word && !stopWords.has(word.toLowerCase()));
  const initials = (words.length ? words : [project.name])
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <article className="flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/60">
      <div>
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-medium">{project.name}</h3>
          <span
            className={`flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${
              gradients[index % gradients.length]
            } text-sm font-semibold text-white`}
          >
            {initials}
          </span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-6 flex items-center gap-4 text-sm font-medium">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 text-muted transition-colors hover:text-foreground"
        >
          <GitHubIcon className="size-4" />
          Código
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-accent transition-opacity hover:opacity-80"
          >
            <ExternalLinkIcon className="size-4" />
            Demo
          </a>
        )}
      </div>
    </article>
  );
}
