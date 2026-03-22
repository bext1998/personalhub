export const siteData = {
  siteName: 'personalhub',
  tagline: 'Builder, generalist, and internet home base',
  intro:
    'A compact static site for highlighting current work, useful links, experiments, and the context behind what I am building.',
  heroMeta: [
    { label: 'Focus', value: 'Designing practical products and clear developer experiences' },
    { label: 'Current mode', value: 'Shipping small improvements consistently' },
  ],
  primaryLinks: [
    {
      title: 'GitHub',
      url: 'https://github.com/',
      description: 'Code, experiments, and public repos.',
      badge: 'Code',
    },
    {
      title: 'LinkedIn',
      url: 'https://www.linkedin.com/',
      description: 'Professional background, roles, and collaborations.',
      badge: 'Network',
    },
    {
      title: 'Email',
      url: 'mailto:hello@example.com',
      description: 'Best for thoughtful notes, opportunities, and intros.',
      badge: 'Contact',
    },
    {
      title: 'Now',
      url: '#about',
      description: 'A quick snapshot of priorities, interests, and momentum.',
      badge: 'Status',
    },
  ],
  featuredProjects: [
    {
      title: 'Personal Hub',
      description: 'A modular static-site shell with separated content, rendering, and styling layers.',
      href: '#top',
      tags: ['Static site', 'ES modules', 'Design system'],
      status: 'Active',
    },
    {
      title: 'Project Atlas',
      description: 'An internal catalog for documenting experiments, decisions, and reusable patterns across projects.',
      href: '#projects',
      tags: ['Knowledge base', 'UX systems', 'Operations'],
      status: 'Concept',
    },
    {
      title: 'Tiny Launches',
      description: 'A habit of packaging smaller ideas into shippable demos instead of waiting for a perfect launch.',
      href: '#misc',
      tags: ['Prototyping', 'Habits', 'Iteration'],
      status: 'Ongoing',
    },
  ],
  miscItems: [
    {
      title: 'Operating principle',
      description: 'Prefer clarity over cleverness, then refine the details after the structure feels solid.',
    },
    {
      title: 'What I enjoy',
      description: 'Product strategy, front-end systems, content structure, and making technical things feel approachable.',
    },
    {
      title: 'What this site is for',
      description: 'A low-maintenance landing page that can grow into a richer personal site over time.',
    },
  ],
  about: [
    'I like building things that balance utility, personality, and long-term maintainability. This version of personalhub treats content as data, keeps HTML intentionally lean, and leaves room for future pages and themes.',
    'The underlying structure is meant to stay flexible: add another section, change the visual language, or swap in new project cards without rewriting the page shell. That makes it a good foundation for a portfolio, notes site, or evolving digital home.',
  ],
  footer: {
    note: 'Built as a static site with modular CSS and JavaScript for easy growth.',
    metadata: [
      { label: 'Location', value: 'Repository root' },
      { label: 'Stack', value: 'HTML, CSS, ES modules' },
      { label: 'Updated', value: '2026' },
    ],
  },
};
