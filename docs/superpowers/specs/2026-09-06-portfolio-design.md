# Portfolio personal — diseño

Fecha: 2026-09-06
Estado: aprobado en conversación, pendiente de revisión escrita

## Objetivo

Web personal de Jose Fernández Alhama. Puerta de entrada para gente que no le
conoce: recruiters, empresas, gente que llega desde LinkedIn, GitHub o X.
Debe dejar una impresión clara de quién es y provocar ganas de contactar.

Una sola página con toda la información de carrera, más una sección de
contacto. Preparada para añadir posts en el futuro sin migrar.

## Decisiones cerradas

| Tema | Decisión |
| --- | --- |
| Idioma | Solo inglés |
| Contenido | Extraído del CV `jose_fernandez_cv.pdf`; texto del CV como base |
| Contacto | `mailto:joseferr8@gmail.com` + enlaces a LinkedIn, GitHub y X. Sin formulario con backend |
| Fuera | Sección de educación. Teléfono (no se publica) |
| Ubicación | "based in Valencia". Origen Córdoba no se menciona salvo que el usuario lo pida |
| Stack | Astro estático, pnpm, cero JS en cliente |
| Hosting | GitHub Pages, repo `josefrnandezz.github.io`, deploy desde `main` con GitHub Actions |
| Diseño | Skill hallmark: género editorial, tema Brutal, macroestructura Marquee Hero |
| Posts | Content collection Markdown, ruta `/posts/[slug]`. Sección "Writing" en home oculta hasta que exista el primer post |

## Datos pendientes del usuario

- Handle de X. Hasta tenerlo, el enlace a X no se renderiza (la lista de
  enlaces sociales se genera a partir de los que tienen URL). El test de humo
  comprueba LinkedIn y GitHub; X se añade al test cuando exista.

## Contenido (fuente: CV)

**Nombre**: Jose Fernández Alhama
**Rol**: Senior Product Engineer
**Ubicación**: Valencia, Spain
**Email**: joseferr8@gmail.com
**LinkedIn**: https://linkedin.com/in/josefrnandezz
**GitHub**: https://github.com/josefrnandezz
**X**: pendiente

**About** (adaptado del CV, dos párrafos; el primero es el lede y empieza por
"Senior Product Engineer at Mercadona Tech, based in Valencia."):

- Product-minded engineer, 5+ años construyendo sistemas backend escalables en
  e-commerce, SaaS e industrias reguladas. Interés en la intersección entre
  ingeniería y producto: entender usuarios, tomar tradeoffs, entregar software
  que mueve la aguja.
- Software construido con feedback loops rápidos, código mantenible y
  colaboración. Prácticas XP (TDD, pair programming, CI/CD) como herramientas,
  no dogma. Mejor rendimiento contribuyendo más allá del ticket.

**Experience** (orden cronológico inverso):

1. Senior Software Engineer · Mercadona Tech · May 2025 – Present
   - Checkout team: conversión de la tienda online, integración de pagos,
     flujos de dirección y autenticación.
   - Staff team de adopción de herramientas de IA en el flujo de desarrollo.
   - Mentoring y knowledge-sharing interno.
   - Stack: Python, Django, PostgreSQL.
2. Software Engineer · Qualifyze · Apr 2023 – May 2025
   - Reducción de complejidad refactorizando hacia un monolito modular; mejora
     drástica de velocidad de entrega.
   - Lanzamiento de una nueva vertical: marketplace de proveedores para
     farma, desde inception hasta entrega.
   - Plataforma de gestión de auditorías para el sector farmacéutico.
   - Mentoring de interns.
   - Stack: TypeScript, NestJS, React, Next.js, PostgreSQL.
3. Software Engineer · Genially · Jan 2022 – Apr 2023
   - Subscriptions & payments: billing e integraciones con proveedores de pago.
   - Core team: contenido generado por usuarios.
   - Stack: TypeScript, Express, React.
4. QA Engineer & Trainee · Genially · Nov 2020 – Jan 2022
   - De QA Trainee a QA Tester; estrategia de test y procesos de calidad.

**Skills** (filas etiqueta · lista):

- Languages: Python, TypeScript, JavaScript
- Frameworks: Django, NestJS, Express, Next.js
- Infrastructure: PostgreSQL, MongoDB, OpenSearch, Kubernetes, Docker, AWS, GCP
- Practices: TDD, DDD, Hexagonal Architecture, CI/CD, Pair/Mob Programming
- AI tooling: Claude, GitHub Copilot, Cursor
- Payments: Redsys, Bizum, Stripe, 3DS v2

**Talks & certifications**:

- Speaker · Awakatech 2026 · "Sustainable AI-assisted development: TDD, CI/CD
  & continuous refactoring"
- Speaker · Salmorejotech 2024 · "Ship, validate, iterate and repeat"
- Architecting on AWS · Amazon Web Services

**Languages**: Spanish (native), English (professional working proficiency).
Va como una fila más dentro de Skills, no como sección propia.

Todo el contenido vive en `src/data/profile.ts`, tipado. El markup no
contiene texto de carrera hardcodeado.

## Diseño visual (hallmark)

Registro de decisiones hallmark, que irá también en el stamp del CSS:

```
Hallmark · genre: editorial · macrostructure: Marquee Hero · theme: Brutal
· enrichment: none · nav: N9 · footer: Ft5 · section head: S2 · cta: C3
· tone: brutalist · audience: general / first contact
· use case: clear impression + contact
```

Primera ejecución de hallmark en el proyecto: no hay rotación previa. Se crea
`.hallmark/log.json` con esta entrada.

### Estructura de la página (orden DOM)

1. **Nav N9 edge-aligned**. Izquierda: `josefrnandezz` en `--font-mono`.
   Derecha: enlace "Email me →" (C3) al `mailto:`. Nada en medio. Sin sticky.
2. **Hero H1 Marquee**. `h1` con "Jose Fernández Alhama" en
   `--font-display` 800, `clamp(3rem, 11vw, 9rem)`, `line-height: 0.92`,
   alineado a la izquierda y al fondo del fold (`min-height: 80dvh`,
   `align-content: end`). Sin subtítulo, sin botón. `overflow-wrap: anywhere;
   min-width: 0` para que no rompa a 320px.
3. **Regla gruesa** `--rule-thick` (4px) tinta, ancho completo del contenedor.
4. **About**. Cabecera S2 "About". Lede en `--text-lg`, párrafo en
   `--text-base`. Medida 65ch.
5. **Experience**. Cabecera S2. Cada puesto es una fila con regla 2px encima.
   Grid de dos columnas en ≥40rem: fechas en `--font-mono` `--text-sm` en la
   columna estrecha izquierda (micro-etiqueta de cuerpo, no eyebrow), y a la
   derecha rol en display 700 `--text-md`, empresa en cuerpo, bullets, y
   stack como última línea en mono muted. En móvil, una columna: fecha encima.
6. **Skills**. Cabecera S2. Filas `dt`/`dd` con regla 2px entre ellas.
   Etiqueta en display 700, valores en cuerpo. Sin chips, sin barras.
7. **Talks & certifications**. Cabecera S2. Lista de tres líneas: año en mono,
   evento y título de la charla. La certificación como cuarta línea.
8. **Writing** (condicional). Solo si la colección tiene ≥1 post no draft.
   Cabecera S2, lista de título enlazado y fecha en mono.
9. **Footer Ft5 Statement = Contact**. `id="contact"`. Frase display
   "Let's talk." en `clamp(2rem, 6vw, 4rem)` enlazada al `mailto:` y en color
   `--color-accent`. Debajo, línea con regla 2px encima: enlaces
   LinkedIn · GitHub · X (los que tengan URL), y a la derecha
   "Valencia, Spain".

Sin eyebrows, sin numeración de secciones, sin iconos, sin emojis, sin
sombras, sin `border-radius`, sin gradientes, sin cabecera italic.

### Tokens

Todos los colores y fuentes se referencian por token. Ningún valor inline.

```css
:root {
  /* Paper / ink, anclados en hue cálido 60 */
  --color-paper:   oklch(97% 0.010 80);
  --color-paper-2: oklch(93% 0.012 80);
  --color-rule:    oklch(18% 0.012 60);   /* reglas brutal: tinta, no gris */
  --color-muted:   oklch(45% 0.010 70);
  --color-ink:     oklch(18% 0.012 60);
  --color-accent:  oklch(58% 0.210 30);   /* rojo-naranja, <3% del viewport */
  --color-focus:   oklch(58% 0.210 30);

  --font-display: "Bricolage Grotesque Variable", ui-sans-serif, sans-serif;
  --font-body:    "Geist Variable", ui-sans-serif, sans-serif;
  --font-mono:    "Geist Mono Variable", ui-monospace, monospace;

  /* escala 1.25 */
  --text-sm: 0.8rem; --text-base: 1rem; --text-md: 1.25rem;
  --text-lg: 1.5625rem; --text-xl: 1.9531rem;
  --text-display: clamp(3rem, 11vw, 9rem);

  /* 4pt */
  --space-xs: 0.5rem; --space-sm: 0.75rem; --space-md: 1rem;
  --space-lg: 1.5rem; --space-xl: 2.5rem; --space-2xl: 4rem;
  --space-3xl: 6rem;

  --rule-thin: 2px; --rule-thick: 4px;
  --measure: 65ch;
  --page-gutter: clamp(1rem, 4vw, 4rem);
  --page-max: 72rem;

  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --dur-micro: 120ms;
}
@media (prefers-color-scheme: dark) {
  :root {
    --color-paper:   oklch(15% 0.010 60);
    --color-paper-2: oklch(19% 0.010 60);
    --color-rule:    oklch(93% 0.006 80);
    --color-muted:   oklch(70% 0.008 70);
    --color-ink:     oklch(94% 0.006 80);
    --color-accent:  oklch(66% 0.180 30);
    --color-focus:   oklch(66% 0.180 30);
  }
}
```

Los valores exactos pueden ajustarse en implementación si el contraste no
llega a 7:1 en cuerpo y 4.5:1 en texto grande. Las decisiones de hue, banda de
papel y un solo acento no cambian.

Fuentes autoalojadas vía `@fontsource-variable/bricolage-grotesque`,
`@fontsource-variable/geist` y `@fontsource-variable/geist-mono`. Cada
`font-family` lleva fallback de sistema.

### Motion

Un solo primitivo: el subrayado de los enlaces pasa de `--color-ink` a
`--color-accent` en `--dur-micro` con `--ease-out`. Nada de animación en
scroll ni en carga. `prefers-reduced-motion: reduce` desactiva la transición.
`:focus-visible` con outline 2px `--color-focus` y offset 2px, sin transición.

### Responsive

Base móvil, `min-width` hacia arriba. Breakpoints en 40rem y 60rem.
`html, body { overflow-x: clip }`. Verificación manual a 320, 375, 414 y
768px: sin scroll horizontal, ningún enlace en dos líneas, h1 rompe dentro de
palabras largas.

## Arquitectura del proyecto

```
josefrnandezz.github.io/
├── .github/workflows/deploy.yml   # withastro/action + deploy-pages
├── .hallmark/log.json
├── astro.config.mjs               # site: https://josefrnandezz.github.io
├── package.json                   # scripts: dev, build, preview, check, test
├── src/
│   ├── content.config.ts          # colección posts (title, date, description, draft)
│   ├── content/posts/             # vacío al inicio, con .gitkeep
│   ├── data/profile.ts            # todo el contenido de carrera, tipado
│   ├── layouts/Base.astro         # <head>, fuentes, global.css, nav, footer
│   ├── components/
│   │   ├── Nav.astro              # N9
│   │   ├── SectionHead.astro      # S2
│   │   ├── Experience.astro
│   │   ├── Skills.astro
│   │   ├── Talks.astro
│   │   ├── Writing.astro          # devuelve nada si no hay posts
│   │   └── Footer.astro           # Ft5 = contact
│   ├── pages/
│   │   ├── index.astro
│   │   └── posts/[slug].astro
│   └── styles/
│       ├── tokens.css             # los tokens de arriba, con el stamp hallmark
│       └── global.css             # reset mínimo, tipografía base, utilidades
├── tests/site.test.ts             # tests de humo sobre dist/
└── docs/superpowers/specs/
```

Unidades y responsabilidad:

- `profile.ts` es la única fuente de contenido. Exporta un objeto `profile`
  con tipos `Role`, `SkillRow`, `Talk`, `SocialLink`. Un enlace social sin
  `url` no se renderiza.
- `Base.astro` recibe `title` y `description` y pinta `<head>` completo:
  charset, viewport, título, meta description, Open Graph básico, favicon SVG
  con las iniciales "JF" en display sobre papel.
- Los componentes de sección reciben sus datos por props desde `index.astro`,
  no importan `profile` directamente. Así son reutilizables y testeables.
- `posts/[slug].astro` usa `getStaticPaths` sobre la colección, excluye
  drafts, y renderiza con el mismo `Base.astro`, prosa a 65ch.

## Despliegue

- `astro.config.mjs`: `site: "https://josefrnandezz.github.io"`, sin `base`.
- Workflow en push a `main`: checkout, `withastro/action@v3` (instala pnpm y
  hace build), `actions/deploy-pages@v4`. Permisos `pages: write`,
  `id-token: write`.
- En GitHub, Settings → Pages → Source: GitHub Actions. Paso manual del
  usuario, documentado en README.

## Verificación

- `pnpm check`: `astro check` sin errores.
- `pnpm build`: genera `dist/`.
- `pnpm test`: vitest lee `dist/index.html` y comprueba:
  - contiene "Jose Fernández Alhama";
  - contiene `href="mailto:joseferr8@gmail.com"`;
  - contiene los enlaces a LinkedIn y GitHub (X cuando exista);
  - no contiene "Education", "Universidad", "Groningen" ni el teléfono;
  - no contiene `<script` (cero JS en cliente);
  - no hay sección "Writing" cuando `src/content/posts` está vacío.
  Un segundo test crea un post temporal en un directorio de fixtures, hace
  build a un `outDir` alternativo y comprueba que aparece "Writing" y la
  ruta `/posts/<slug>/`.
- CI: el workflow ejecuta `check`, `test` y `build` antes de desplegar.
- Revisión hallmark: slop test de 58 gates al final de la implementación,
  con el resultado registrado en el stamp del CSS.

## Fuera de alcance

Formulario con backend, analytics, i18n, tema claro/oscuro manual, RSS,
página de índice de posts separada (la sección Writing de la home hace de
índice hasta que haya suficientes posts para justificar `/posts/`).
