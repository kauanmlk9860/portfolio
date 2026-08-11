import { skills } from "@/data/profile";

export function Skills() {
  return (
    <section
      id="habilidades"
      className="mx-auto max-w-5xl border-t border-border px-6 py-20"
    >
      <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">
        Habilidades
      </h2>
      <p className="mt-4 max-w-xl text-muted">
        Tecnologias e ferramentas que uso no dia a dia, entre projetos
        pessoais, o estágio na Inova Tecnologia e os estudos na faculdade.
      </p>
      <div className="mt-10 grid gap-10 sm:grid-cols-2">
        {skills.map((group) => (
          <div key={group.category}>
            <h3 className="text-base font-medium">{group.category}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-card px-3.5 py-1.5 text-sm text-muted"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
