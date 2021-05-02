/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Plone Documentation',
  tagline: 'Plone 6 docs',
  url: 'https://plone.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  customFields: {
    tagline2:
      "Apache APISIX software provides rich traffic management features such as load balancing, dynamic upstream, canary release, circuit breaking, authentication, observability, and more.",
    repoUrl: "https://github.com/apache/apisix",
    docsUrl: "",
    downloads: [
      {
        name: "About",
        nameInParamCase: "overview",
        description: "General info about Volto, Plone and the differences between Volto and Plone Classic",
        shape: "triangle",
        color: "var(--ifm-color-primary)",
        githubRepo: "apache/apisix",
        version: "2.5",
        releaseDate: "2021-04-05",
        firstDocPath: "/intro",
      },
      {
        name: "Use Cases",
        nameInParamCase: "dashboard",
        description:
          "See who is using Plone and why",
        shape: "square",
        color: "#10B981",
        githubRepo: "apache/apisix-dashboard",
        version: "2.5",
        releaseDate: "2021-03-29",
        firstDocPath: "/USER_GUIDE",
      },
      {
        name: "Tutorials",
        nameInParamCase: "tutorials",
        description: "Learn how to get things done",
        shape: "verified",
        color: "#2563EB",
        githubRepo: "apache/apisix-ingress-controller",
        version: "0.4.0",
        releaseDate: "2021-03-12",
        firstDocPath: "/creating-views",
      },
      {
        name: "Content Management",
        nameInParamCase: "tutorials",
        description: "Create and manage content",
        shape: "content",
        color: "#2563EB",
        githubRepo: "apache/apisix-ingress-controller",
        version: "0.4.0",
        releaseDate: "2021-03-12",
        firstDocPath: "/creating-views",
      },
      {
        name: "Plone Classic",
        nameInParamCase: "tutorials",
        description: "Plone without Volto",
        shape: "plone",
        color: "#2563EB",
        githubRepo: "apache/apisix-ingress-controller",
        version: "0.4.0",
        releaseDate: "2021-03-12",
        firstDocPath: "/creating-views",
      },
      {
        name: "Training",
        nameInParamCase: "ingress-controller",
        description: "Follow a Plone training",
        shape: "hexagon",
        color: "#2563EB",
        githubRepo: "plone/training",
        version: "0.4.0",
        releaseDate: "2021-03-12",
        firstDocPath: "/getting-started",
      }
    ]},
  organizationName: 'plone', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'Plone Logo',
        src: 'img/Plone-logo.svg',
      },
      items: [
        // {
        //   to: 'docs/',
        //   activeBasePath: 'docs',
        //   label: 'Docs',
        //   position: 'left',
        // },
        {
          href: 'https://docs.plone.org/5',
          label: 'Plone Classic',
          position: 'right',
        },
        {
          href: 'https://volto.kitconcept.com/',
          label: 'Demo',
          position: 'right',
        },
        {
          href: 'https://community.plone.org/',
          label: 'Community',
          position: 'right',
        },
        {
          href: 'https://training.plone.org/',
          label: 'Training',
          position: 'right',
        },
        {
          to: "/help",
          label: "Help",
          position: "right",
        },
        {
          href: 'https://github.com/plone/documentation',
          label: 'GitHub',
          position: 'right',
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
              label: 'Getting Started',
              to: 'docs/',
            },
            {
              label: 'Plone Classic',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Forum',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Gitter',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Planet',
              href: 'https://github.com/facebook/docusaurus',
            },
            {
              label: 'PLONE.Org',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
            {
              label: 'Training',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Plone Community - Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
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
