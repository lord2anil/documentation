const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Plone Documentation',
  tagline: 'This is a community-maintained manual for the Plone content management system.',
  url: 'https://sven.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  customFields: {
    description:
      'An optimized site generator in React. Docusaurus helps you to move fast and write content. Build documentation websites, blogs, marketing pages, and more.',
  },
  organizationName: 'plone', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.
  plugins: [
    require.resolve('@cmfcmf/docusaurus-search-local')
  ],
  themeConfig: {
    announcementBar: {
      id: 'support_us', // Any value that will identify this message.
      content:
        'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
      backgroundColor: '#fafbfc', // Defaults to `#fff`.
      textColor: '#091E42', // Defaults to `#000`.
      isCloseable: false, // Defaults to `true`.
    },
    colorMode: {
      // "light" | "dark"
      defaultMode: 'light',
      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: true,
    },
    //hideableSidebar: true,
    prism: {
      theme: require('prism-react-renderer/themes/dracula'),
    },
    navbar: {
      title: 'Documentation',
      logo: {
        alt: 'Plone Logo',
        src: 'img/plone.svg',
      },
      items: [
        {
          type: 'doc',
          position: 'left',
          docId: 'volto',
          label: 'Volto',
        },
        {
          type: 'doc',
          position: 'left',
          docId: 'classic',
          label: 'Classic-UI',
        },
        // {
        //   //type: 'doc',
        //   docId: 'upload',
        //   to: '/tutorials/upload',
        //   position: 'left',
        //   label: 'Tutorials',
        // },
        // {
        //   type: 'dropdown',
        //   label: 'Tutorials',
        //   position: 'left',
        //   items: [
        //     {
        //       label: 'Plone 6',
        //       href: 'https://demo.plone.org',
        //     },
        //     {
        //       label: 'Plone 6 Classic UI',
        //       href: 'https://demo-classic.plone.org',
        //     },
        //   ],
        // },
        // {
        //   //type: 'doc',
        //   docId: 'upload',
        //   to: '/tutorials/upload',
        //   position: 'left',
        //   label: 'Guides',
        // },
        // {
        //   type: 'dropdown',
        //   label: 'Guides',
        //   position: 'left',
        //   items: [
        //     {
        //       label: 'Plone 6',
        //       href: 'https://demo.plone.org',
        //     },
        //     {
        //       label: 'Plone 6 Classic UI',
        //       href: 'https://demo-classic.plone.org',
        //     },
        //   ],
        // },
        {to: '/help', label: 'Help', position: 'left'},
        {to: 'https://training.plone.org', label: 'Training', position: 'right'},
        {
          type: 'dropdown',
          label: 'Demo',
          position: 'right',
          items: [
            {
              label: 'Plone 6',
              href: 'https://demo.plone.org',
            },
            {
              label: 'Plone 6 Classic UI',
              href: 'https://demo-classic.plone.org',
            },
          ],
        },

      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorials',
              to: '/changelog',
            },
            {
              label: 'Guides',
              to: '/changelog',
            },
            {
              label: 'FAQ',
              to: '/overview/faq',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/zFY3EBbjaj',
            },
            {
              label: 'Discourse',
              href: 'https://community.plone.org',
            },
            {
              label: 'Collective',
              href: 'https://github.com/collective',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/plone',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'PLONE.ORG',
              href: 'https://plone.org',
            },
            {
              label: 'Training',
              href: 'https://training.plone.org',
            },
            {
              label: 'Jenkins',
              href: 'https://jenkins.plone.org',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Plone Community.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/',
          showLastUpdateTime: true,
          routeBasePath: '/'
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          path: 'changelog',
          routeBasePath: 'changelog',
          blogSidebarTitle: 'Documentation updates',
          blogTitle: 'Docs updates',
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
