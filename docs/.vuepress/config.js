module.exports = {
  plugins: [
    ['vuepress-plugin-reading-time', true],
  ],
  title: 'Plone Documentation',
  description: 'Make every word matter',
  base: "/",
  markdown: {
    lineNumbers: true,
    toc: {
      includeLevel: [3]
    }
  },
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
    docsBranch: '6',
    editLinks: true,
    editLinkText: 'Is this doc out of date? Suggest a change!',
    nav: [
      { text: 'Plone Classic Docs', link: 'https://volto.kitconcept.com' },
      { text: 'Demo', link: 'https://volto.kitconcept.com' },
      { text: 'Community', link: 'https://community.plone.org/' },
      { text: 'Training', link: 'https://training.plone.org/' },
    ],
    sidebar: [{
      title: 'Overview',
      collapsable: true,
      children: [
        'overview/resources',
        'overview/use-cases',
        'overview/design-principles',
        'overview/developer-good-practices'

      ]
    },
    {
      title: 'Get started',
      //path: '/get-started/',
      collapsable: true,
      children: [
        'install',
        'headings',
        'numbers'
      ]
      },
      {
        title: 'Frontend',
        //path: '/frontend/',
        collapsable: true,
        children: [
          'frontend/blocks',
          'frontend/about-semantic',
          'frontend/semanticui-theming',
          'frontend/theming-engine',
          'frontend/custom-styling',
          'frontend/using-third-party-themes',
          'frontend/creating-views',
          'frontend/customizing-views',
          'frontend/i18n',
          'frontend/overridei18n',
          'frontend/lazyload',
          'frontend/creating-project',
          'frontend/folder-structure',
          'frontend/customizing-components',
          'frontend/express',
          'frontend/appextras',
          'frontend/contextnavigation',
          'frontend/pluggables',
          'frontend/design',
        ]
      },
      {
        title: 'Backend',
        //path: '/backend/',
        collapsable: true,
        children: [
          'backend/integration',
          'headings',
          'numbers'
        ]
      },
      {
        title: 'Deploying',
        path: '/deploy/',
        collapsable: true,
        children: [
          'deploy/pm2',
          'deploy/apache',
          'deploy/seamless-mode',
        ]
      },
      {
        title: 'Content Management',
        //path: '/cms/',
        collapsable: true,
        children: [
          'cli',
          'headings',
          'numbers'
        ]
      },
      {
        title: 'Guidelines',
        //path: '/cms/',
        collapsable: true,
        children: [
          'guidelines/testing',
          'guidelines/routing',
          'guidelines/redux',
          'guidelines/react',
          'guidelines/linting',
          'guidelines/language-features',
          'guidelines/accessibility-guidelines',
          'guidelines/acceptance-tests',
        ]
      },
  ]
  }
}
