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
  description:
    'Jose Fernández Alhama, Senior Product Engineer at Mercadona Tech, based in Valencia. Product engineering across the stack.',

  about: {
    lede:
      'Senior Product Engineer. XP practitioner.',
    body:
      'I’ve spent the last few years building products and owning them end to end, as part of the team. Small steps, simple code. Born in Córdoba, living in Valencia. Outside work it’s mostly cooking and electronic music.',
  },

  socials: [
    { label: 'LinkedIn', url: 'https://linkedin.com/in/josefrnandezz' },
    { label: 'GitHub', url: 'https://github.com/josefrnandezz' },
    { label: 'X', url: 'https://x.com/jfrnandez_' },
  ] satisfies SocialLink[],

  experience: [
    {
      title: 'Senior Product Engineer',
      company: 'Mercadona Tech',
      companyUrl: 'https://www.mercadonatech.com/',
      start: 'May 2025',
      end: 'Present',
      bullets: [
        'Checkout team: conversion, payment integrations, and the address and login flows of Mercadona’s online store.',
        'Refactoring a heavy legacy codebase a little every day, so delivery never pauses for a rewrite.',
      ],
      stack: ['Python', 'Django', 'PostgreSQL', 'React', 'Kubernetes'],
    },
    {
      title: 'Senior Software Engineer',
      company: 'Qualifyze',
      companyUrl: 'https://www.qualifyze.com/',
      start: 'Sep 2024',
      end: 'May 2025',
      bullets: [
        'Kept building the supplier marketplace, from discovery with product to architecture to daily delivery.',
        'Worked on a second vertical: analytics for pharma suppliers.',
        'Mentored junior engineers and interns by pairing with them on real work, and looked after the team’s working agreements.',
      ],
      stack: ['TypeScript', 'NestJS', 'React', 'Next.js', 'Kubernetes', 'PostgreSQL'],
    },
    {
      title: 'Software Engineer',
      company: 'Qualifyze',
      companyUrl: 'https://www.qualifyze.com/',
      start: 'Apr 2023',
      end: 'Sep 2024',
      bullets: [
        'Worked on the audit platform, the core of the product.',
        'Laid the groundwork for a modular monolith shaped by domain-driven design, which cut the complexity of the codebase noticeably.',
        'Outside-in testing to keep feedback loops short.',
        'From Dec 2023, moved to a new vertical built from scratch: a supplier marketplace for pharma.',
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
        'Subscriptions and payments: billing flows and payment-provider integrations.',
        'Part of the move from single accounts to multi-user workspaces, which opened the product to teams.',
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
        'Joined as a QA trainee, became a tester, and helped shape test strategy across the product.',
        'Built the end-to-end suite in Cypress.',
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
