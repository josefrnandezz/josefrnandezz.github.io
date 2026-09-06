export type Role = {
  title: string;
  company: string;
  companyUrl: string;
  start: string;
  end: string;
  bullets: string[];
  stack?: string[];
};

export type Talk = { year: string; event: string; title: string; slidesUrl?: string };

/** A social link without `url` is not rendered. */
export type SocialLink = { label: string; url?: string };

export const profile = {
  name: 'Jose Fernández Alhama',
  role: 'Senior Product Engineer',
  location: 'Valencia, Spain',
  email: 'joseferr8@gmail.com',
  description:
    'Jose Fernández Alhama, Senior Product Engineer at Mercadona Tech, based in Valencia. Product engineering across the stack, payments and checkout.',

  about: {
    lede:
      'Senior Product Engineer at Mercadona Tech, based in Valencia — originally from Córdoba, Spain. Five-plus years building software across the stack for e-commerce, SaaS and regulated industries, with a product brain and a habit of asking what actually moves the needle.',
    body:
      'I care about the intersection of engineering and product: understanding users, making smart tradeoffs and shipping software that matters. I work with fast feedback loops, clean and maintainable code and close collaboration. XP practices like TDD, pair programming and CI/CD are tools I use to keep delivery predictable, not dogma. I’m at my best contributing beyond the ticket: shaping the problem, challenging assumptions and helping the team move faster together.',
  },

  socials: [
    { label: 'LinkedIn', url: 'https://linkedin.com/in/josefrnandezz' },
    { label: 'GitHub', url: 'https://github.com/josefrnandezz' },
    { label: 'X', url: 'https://x.com/jfrnandez_' },
  ] satisfies SocialLink[],

  experience: [
    {
      title: 'Senior Software Engineer',
      company: 'Mercadona Tech',
      companyUrl: 'https://www.mercadonatech.com/',
      start: 'May 2025',
      end: 'Present',
      bullets: [
        'Working at the checkout team, improving conversion for Mercadona’s online store, integrating payment systems and owning the address and authentication flows.',
        'Untangling heavy legacy through continuous refactoring, so the codebase gets simpler without delivery ever pausing for a rewrite.',
      ],
      stack: ['Python', 'Django', 'PostgreSQL', 'React', 'Kubernetes'],
    },
    {
      title: 'Software Engineer',
      company: 'Qualifyze',
      companyUrl: 'https://www.qualifyze.com/',
      start: 'Apr 2023',
      end: 'May 2025',
      bullets: [
        'Reduced system complexity by refactoring towards a modular monolith and applying engineering best practices, which led to a dramatic improvement in delivery speed.',
        'Key role in launching a new vertical, a supplier marketplace for the pharma industry, from inception to delivery: product definition, architecture decisions and day-to-day execution.',
        'Mentored interns joining the team, pairing with them on day-to-day delivery.',
      ],
      stack: ['TypeScript', 'NestJS', 'React', 'Next.js', 'Kubernetes', 'PostgreSQL'],
    },
    {
      title: 'Software Engineer',
      company: 'Genially',
      companyUrl: 'https://genially.com/',
      start: 'Jan 2022',
      end: 'Apr 2023',
      bullets: [
        'Subscriptions and payments team: built and maintained billing flows and integrations with payment providers.',
        'Contributed to the product’s move from a single-account model to multi-user workspaces, opening it up to teams.',
      ],
      stack: ['TypeScript', 'Express', 'React', 'Kubernetes'],
    },
    {
      title: 'QA Engineer & Trainee',
      company: 'Genially',
      companyUrl: 'https://genially.com/',
      start: 'Nov 2020',
      end: 'Jan 2022',
      bullets: [
        'Started as QA Trainee and progressed to QA Tester, contributing to test strategy and quality processes across the product.',
        'Built an end-to-end test suite with Cypress covering the product’s different areas.',
      ],
      stack: ['Cypress', 'React', 'Kubernetes'],
    },
  ] satisfies Role[],

  talks: [
    {
      year: '2026',
      event: 'Awakatech',
      title: 'Sustainable AI-assisted development: TDD, CI/CD & continuous refactoring',
      slidesUrl: 'https://view.genially.com/698a17e85467c6d257ca104c',
    },
    {
      year: '2024',
      event: 'Salmorejotech',
      title: 'Ship, validate, iterate and repeat',
      slidesUrl: 'https://view.genially.com/6626ba23edf99f0014f57f8d',
    },
  ] satisfies Talk[],
};

export type Profile = typeof profile;
