module.exports = {
  plugins: [
    ['vuepress-plugin-reading-time', true],
  ],
  title: 'Plone Documentation',
  description: 'Make every word matter',
  base: "/",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', {
      rel: 'stylesheet',
      type: 'text/css',
      href: 'https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,800,800i,900,900i'
  },],
  ['link', {
      rel: 'stylesheet',
      type: 'text/css',
      href: 'https://fonts.googleapis.com/css?family=Miriam+Libre:400,700'
  },],
  ],
  themeConfig: {
    searchPlaceholder: 'Search...',
    lastUpdated: 'Last Updated',
    repo: 'plone/documentation',
    docsDir: 'docs',
    editLinks: false,
    editLinkText: 'Help us improve this page!',
    nav: [
      { text: 'Demo', link: 'https://volto.kitconcept.com' },
      { text: 'Community', link: 'https://community.plone.org/' },
      { text: 'Training', link: 'https://training.plone.org/' },
    ],
    sidebar: [{
      title: 'Overview',
      collapsable: false,
      children: [
        'alt-text',
        'accessibility-terms',
        'admonitions',
      ]
    },
    {
      title: 'Get started',
      path: '/get-started/',
      collapsable: false,
      children: [
        'cli',
        'headings',
        'numbers'
      ]
      },
      {
        title: 'Frontend',
        path: '/frontend/',
        collapsable: false,
        children: [
          'cli',
          'headings',
          'numbers'
        ]
      },
      {
        title: 'Backend',
        path: '/backend/',
        collapsable: false,
        children: [
          'cli',
          'headings',
          'numbers'
        ]
      },
      {
        title: 'Deploying',
        path: '/deploy/',
        collapsable: false,
        children: [
          'deploy/pm2',
          'headings',
          'numbers'
        ]
      },
      {
        title: 'Content Management',
        path: '/cms/',
        collapsable: true,
        children: [
          'cli',
          'headings',
          'numbers'
        ]
      },
  ]
  }
}
