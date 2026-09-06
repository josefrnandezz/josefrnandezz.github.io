export type Role = {
  title: string;
  company: string;
  start: string;
  end: string;
  bullets: string[];
  stack?: string[];
};

export type SkillRow = { label: string; items: string[] };

export type Talk = { year: string; event: string; title: string };

export type Certification = { name: string; issuer: string };

/** A social link without `url` is not rendered. */
export type SocialLink = { label: string; url?: string };

export const profile = {
  name: 'Jose Fernández Alhama',
  handle: 'josefrnandezz',
  role: 'Senior Product Engineer',
  location: 'Valencia, Spain',
  email: 'joseferr8@gmail.com',
  description:
    'Jose Fernández Alhama, Senior Product Engineer at Mercadona Tech, based in Valencia. Backend systems, payments and product-minded engineering.',

  about: {
    lede:
      'Senior Product Engineer at Mercadona Tech, based in Valencia. Five-plus years building backend systems for e-commerce, SaaS and regulated industries, with a product brain and a habit of asking what actually moves the needle.',
    body:
      'I care about the intersection of engineering and product: understanding users, making smart tradeoffs and shipping software that matters. I work with fast feedback loops, clean and maintainable code and close collaboration. XP practices like TDD, pair programming and CI/CD are tools I use to keep delivery predictable, not dogma. I’m at my best contributing beyond the ticket: shaping the problem, challenging assumptions and helping the team move faster together.',
  },

  socials: [
    { label: 'LinkedIn', url: 'https://linkedin.com/in/josefrnandezz' },
    { label: 'GitHub', url: 'https://github.com/josefrnandezz' },
    { label: 'X' },
  ] satisfies SocialLink[],

  experience: [
    {
      title: 'Senior Software Engineer',
      company: 'Mercadona Tech',
      start: 'May 2025',
      end: 'Present',
      bullets: [
        'Checkout team: improving conversion for Mercadona’s online store, integrating payment systems and owning the address and authentication flows.',
        'Part of a staff team driving the adoption of AI tools across the development workflow, with a focus on sustainable, effective practices.',
        'Mentoring and internal knowledge-sharing aligned with senior engineering goals.',
      ],
      stack: ['Python', 'Django', 'PostgreSQL'],
    },
    {
      title: 'Software Engineer',
      company: 'Qualifyze',
      start: 'Apr 2023',
      end: 'May 2025',
      bullets: [
        'Reduced system complexity by refactoring towards a modular monolith and applying engineering best practices, which led to a dramatic improvement in delivery speed.',
        'Key role in launching a new vertical, a supplier marketplace for the pharma industry, from inception to delivery: product definition, architecture decisions and day-to-day execution.',
        'Contributed to an audit management platform for the pharmaceutical sector.',
        'Mentored interns through onboarding and day-to-day technical growth.',
      ],
      stack: ['TypeScript', 'NestJS', 'React', 'Next.js', 'PostgreSQL'],
    },
    {
      title: 'Software Engineer',
      company: 'Genially',
      start: 'Jan 2022',
      end: 'Apr 2023',
      bullets: [
        'Subscriptions and payments team: built and maintained billing flows and integrations with payment providers.',
        'Core team: managed user-generated content and applied software engineering best practices.',
      ],
      stack: ['TypeScript', 'Express', 'React'],
    },
    {
      title: 'QA Engineer & Trainee',
      company: 'Genially',
      start: 'Nov 2020',
      end: 'Jan 2022',
      bullets: [
        'Started as QA Trainee and progressed to QA Tester, contributing to test strategy and quality processes across the product.',
      ],
    },
  ] satisfies Role[],

  skills: [
    { label: 'Languages', items: ['Python', 'TypeScript', 'JavaScript'] },
    { label: 'Frameworks', items: ['Django', 'NestJS', 'Express', 'Next.js'] },
    {
      label: 'Infrastructure',
      items: ['PostgreSQL', 'MongoDB', 'OpenSearch', 'Kubernetes', 'Docker', 'AWS', 'GCP'],
    },
    {
      label: 'Practices',
      items: ['TDD', 'DDD', 'Hexagonal Architecture', 'CI/CD', 'Pair/Mob Programming'],
    },
    { label: 'AI tooling', items: ['Claude', 'GitHub Copilot', 'Cursor'] },
    { label: 'Payments', items: ['Redsys', 'Bizum', 'Stripe', '3DS v2'] },
    { label: 'Spoken', items: ['Spanish (native)', 'English (professional working proficiency)'] },
  ] satisfies SkillRow[],

  talks: [
    {
      year: '2026',
      event: 'Awakatech',
      title: 'Sustainable AI-assisted development: TDD, CI/CD & continuous refactoring',
    },
    { year: '2024', event: 'Salmorejotech', title: 'Ship, validate, iterate and repeat' },
  ] satisfies Talk[],

  certifications: [
    { name: 'Architecting on AWS', issuer: 'Amazon Web Services' },
  ] satisfies Certification[],
};

export type Profile = typeof profile;
