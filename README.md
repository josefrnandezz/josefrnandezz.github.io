# josefrnandezz.github.io

Personal site of Jose Fernández Alhama. Static, no client-side JavaScript.

## Stack

- [Astro](https://astro.build) 7, static output
- Self-hosted fonts via `@fontsource-variable`
- Vitest smoke tests against the built HTML
- GitHub Pages via GitHub Actions

## Scripts

```sh
pnpm install
pnpm dev        # local dev server
pnpm check      # astro check (types + templates)
pnpm test       # builds twice into temp dirs and asserts on the HTML
pnpm build      # writes dist/
pnpm verify     # check + test + build, what CI runs
```

## Editing content

Everything about the career lives in `src/data/profile.ts`. The markup never
hardcodes career text. A social link without `url` is not rendered.

## Adding your portrait

Drop a photo at `src/assets/portrait.jpg` (also `.jpeg`, `.png`, `.webp` or
`.avif`). Portrait orientation, at least 960 px wide. The hero picks it up on
the next build and replaces the placeholder block; nothing else to configure.

## Writing a post

Create `src/content/posts/<slug>.md`:

```md
---
title: Post title
date: 2026-09-06
description: One sentence shown in the list and in the meta description.
draft: false
---

Body in Markdown.
```

The "Writing" section on the home page appears automatically once at least one
non-draft post exists. The post is served at `/posts/<slug>/`.

## Deploy

Push to `main`. The workflow in `.github/workflows/deploy.yml` runs
`pnpm run verify` and publishes `dist/`.

One-time setup on GitHub: Settings → Pages → Build and deployment → Source:
**GitHub Actions**.
