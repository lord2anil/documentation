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
        'overview/developer-good-practices',
        'overview/settings-reference',
        {
          title: 'Guidelines',
          collapsable: true,
          children: [
            'guidelines/testing',
            'guidelines/routing',
            'guidelines/redux',
            'guidelines/language-features',
            'guidelines/acceptance-tests',
          ]
        }
      ]
    },
    {
      title: 'Get started',
      //path: '/get-started/',
      collapsable: true,
      children: [
        'install',
        'creating-project'
      ]
      },
      {
        title: 'Frontend',
        //path: '/frontend/',
        collapsable: true,
        children: [
          'frontend/blocks',
          'frontend/about-semantic',
          'frontend/folder-structure',
          'frontend/contextnavigation',
          'frontend/workingcopy',
          'frontend/multilingual',
          'frontend/configuration-registry',
          {
            title: 'Theme',
            //path: '/backend/',
            collapsable: true,
            children: [
              'theme/semanticui-theming',
              'theme/custom-styling',
              'theme/theming-engine',
              'theme/theming-strategy',
              'theme/using-third-party-themes',
              'theme/accessibility-guidelines',
              'theme/design'
            ]
          },
        ]        
      },
      {
        title: 'Backend',
        //path: '/backend/',
        collapsable: true,
        children: [
          'backend/integration',
          'backend/config-backend'
        ]
      },
      {
        title: 'Configuration',
        //path: '/backend/',
        collapsable: true,
        children: [
          'building/environmentvariables',
          'building/internalproxy',
          'building/zero-config-builds',
        ]
      },
      {
        title: 'Guides',
        path: '/deploy/',
        collapsable: true,
        children: [
          'deploy/pm2',
          'deploy/apache',
          'deploy/seamless-mode',
          'deploy/lazyload',
          'deploy/customizing-views.md',
          'deploy/customizing-components.md',
          'deploy/express',
          'deploy/i18n',
          'deploy/overridei18n',
          'deploy/appextras',
          'deploy/expanders',
          'deploy/richeditor-settings'
        ]
      },
      {
        title: 'Tutorials',
        //path: '/backend/',
        collapsable: true,
        children: [
          'tutorials/creating-views',
          'tutorials/pluggables'
        ]
      },
      {
        title: 'Content Management',
        //path: '/cms/',
        collapsable: true,
        children: [
          'cli'
        ]
      },
      
  ]
  }
}
