export const siteData = {
  siteName: '迷宮行者的數位基地',
  seo: {
    title: '迷宮行者的數位基地 | 個人資料, 專案, 以及連結',
    description:
      '在這裡你可以大概知道我是誰，也會在這個入口網站放一些Vibe Coding生成的玩具跟其他雜物。',
  },
  navigation: [
    { label: '社群網路', href: '#social-links' },
    { label: '專案', href: '#featured-projects' },
    { label: '關於我', href: '#about' },
    { label: '頁尾', href: '#footer' },
  ],
  sections: {
    socialLinks: {
      title: 'Social links',
      description: 'Quick paths to the places where I publish updates, ship code, and stay reachable.',
    },
    featuredProjects: {
      title: 'Featured projects',
      description: 'A compact list of current work, experiments, and portfolio building blocks.',
    },
    about: {
      title: 'About',
      description: 'Short notes about how this site is organized and how the content layer can keep growing.',
    },
  },
  labels: {
    openLink: 'Open link',
    viewProject: 'View project',
    github: 'GitHub',
    updated: 'Updated',
  },
  hero: {
    eyebrow: 'Profile snapshot',
    title: 'A concise home for profile copy, featured work, and reusable content data.',
    subtitle: 'One shared data module now drives the homepage copy instead of scattering text across templates.',
    description:
      'This setup keeps HTML focused on structure, lets render modules stay presentational, and makes future expansions like multi-page content, dark mode, project filters, or a changelog easier to manage from one place.',
    cta: {
      primary: { label: 'View featured work', href: '#featured-projects' },
      secondary: { label: 'Browse social links', href: '#social-links' },
    },
  },
  socialLinks: [
    {
      platform: 'GitHub',
      url: 'https://github.com/',
      description: 'Code, experiments, and public repositories.',
    },
    {
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/',
      description: 'Professional background, collaborations, and career updates.',
    },
    {
      platform: 'Email',
      url: 'mailto:hello@example.com',
      description: 'Best for thoughtful notes, project inquiries, and introductions.',
    },
  ],
  featuredProjects: [
    {
      name: 'Personal Hub',
      summary: 'A modular static site shell with separated data, render, and interaction layers.',
      typeTag: 'Static site',
      statusTag: 'Active',
      link: '#top',
    },
    {
      name: 'Project Atlas',
      summary: 'A living catalog for documenting experiments, reusable decisions, and internal patterns.',
      typeTag: 'Knowledge base',
      statusTag: 'Concept',
      link: '#featured-projects',
    },
    {
      name: 'Tiny Launches',
      summary: 'A practice of packaging small ideas into shippable demos instead of waiting for a perfect launch.',
      typeTag: 'Iteration',
      statusTag: 'Ongoing',
      link: '#about',
    },
  ],
  about: [
    'This homepage now treats copy as structured data first, so the layout can stay lean and reusable.',
    'If new pages are added later, the same data layer can provide shared site metadata and section content.',
    'Dark mode, project categories, and changelog entries should extend this module before adding new hardcoded copy elsewhere.',
  ],
  footer: {
    siteName: 'personalhub',
    githubUrl: 'https://github.com/',
    copyright: '© 2026 personalhub. All rights reserved.',
    updatedDate: '2026-03-22',
  },
};
