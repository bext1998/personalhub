export const siteData = {
  siteName: 'BEXT/迷宮行者的個人網站',
  seo: {
    title: 'BEXT/迷宮行者的個人網站 | 個人簡介、作品與連結',
    description: '以單一資料層管理首頁介紹、社群連結、精選作品與頁尾資訊的個人展示頁。',
  },
  navigation: [
    { label: '連結', href: '#social-links' },
    { label: '作品', href: '#featured-projects' },
    { label: '關於', href: '#about' },
  ],
  sections: {
    socialLinks: {
      title: '社群連結',
      description: '整理常用的聯絡方式與外部平台，方便快速找到我的近況、作品與公開資訊。',
    },
    featuredProjects: {
      title: '精選作品',
      description: '集中展示目前的重點作品、正在打磨的方向，以及值得延伸的實驗題目。',
    },
    about: {
      title: '關於這個網站',
      description: '簡短說明這個首頁的整理方式，以及之後持續擴充內容時可以沿用的脈絡。',
    },
  },
  labels: {
    openLink: '前往連結',
    viewProject: '查看作品',
    github: 'GitHub',
    updated: '最後更新',
  },
  hero: {
    eyebrow: '個人首頁',
    title: '用簡潔的方式整理個人簡介、精選作品與常用連結。',
    subtitle: '首頁文案由同一份資料模組驅動，更新內容更直覺，也更容易延伸。',
    description:
      '目前的架構讓 HTML 專注在版面結構，渲染模組維持單純。未來若要擴充多頁內容、專案分類或更新紀錄，也能從同一個資料層平順延伸。',
    cta: {
      primary: { label: '查看精選作品', href: '#featured-projects' },
      secondary: { label: '瀏覽社群連結', href: '#social-links' },
    },
  },
  socialLinks: [
    {
      platform: 'GitHub',
      url: 'https://github.com/bext1998',
      description: '集中放置程式碼、實驗作品與公開倉庫',
    },
    {
      platform: 'Twitter/X',
      url: 'https://x.com/bext1998',
      description: '我的推特帳號',
    },
    {
      platform: 'Threads',
      url: 'https://www.threads.com/@bext1998',
      description: '我的Threads帳號',
    },
  ],
  featuredProjects: [
    {
      name: 'BEXT/迷宮行者的個人網站',
      summary: '以資料、渲染與互動分層整理的個人靜態網站骨架，便於持續維護與擴充。',
      typeTag: '靜態網站',
      statusTag: '進行中',
      link: '#top',
    },
    {
      name: 'Project Atlas',
      summary: '用來整理實驗紀錄、可重用決策與內部模式的活文件型作品集構想。',
      typeTag: '知識庫',
      statusTag: '概念中',
      link: '#featured-projects',
    },
    {
      name: 'Tiny Launches',
      summary: '把小想法快速整理成可展示版本，優先累積節奏與回饋，而不是等待一次完美上線。',
      typeTag: '迭代實驗',
      statusTag: '持續更新',
      link: '#about',
    },
  ],
  about: [
    '這個首頁把文案視為結構化資料來管理，因此版面可以維持精簡，也更容易重複利用。',
    '如果之後加入更多頁面，同一層資料仍然能提供共用的站點資訊與各區塊內容。',
    '未來若新增深色模式、專案分類或更新紀錄，也應優先從這個資料模組延伸，而不是把文字再分散回各個模板。',
  ],
  footer: {
    siteName: 'personalhub',
    githubUrl: 'https://github.com/bext1998/personalhub',
    copyright: '(c) 2026 personalhub. 保留所有權利。',
    updatedDate: '2026-03-22',
  },
};
