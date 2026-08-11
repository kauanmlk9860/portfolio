# Portfólio — Kauan Rodrigues

Site pessoal com meus projetos, experiência e formação. Construído com Next.js, TypeScript e Tailwind CSS, publicado no GitHub Pages.

🔗 **[kauanmlk9860.github.io/portfolio](https://kauanmlk9860.github.io/portfolio/)**

## Stack

- [Next.js](https://nextjs.org) (App Router, exportação estática)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)

## Estrutura

```
src/
  app/            # layout, página principal e estilos globais
  components/     # seções e componentes de UI (Hero, About, Projects, Skills, Contact...)
  data/           # conteúdo do site (profile.ts, projects.ts) — editar aqui para atualizar textos e projetos
```

Para atualizar o conteúdo (bio, experiência, habilidades, links de contato), edite [`src/data/profile.ts`](src/data/profile.ts). Para adicionar ou remover projetos, edite [`src/data/projects.ts`](src/data/projects.ts).

## Rodando localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Deploy

O deploy é automático: todo push na branch `master` roda o workflow em [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), que builda o site como export estático (`next build` com `output: "export"`) e publica no GitHub Pages.

Para gerar o build estático manualmente:

```bash
npm run build
```

Os arquivos são gerados na pasta `out/`.
