
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
  exact: true,
},
{
  path: '/markdown-page',
  component: ComponentCreator('/markdown-page','be1'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','402'),
  
  routes: [
{
  path: '/docs/',
  component: ComponentCreator('/docs/','2b5'),
  exact: true,
},
{
  path: '/docs/docs/doc2',
  component: ComponentCreator('/docs/docs/doc2','771'),
  exact: true,
},
{
  path: '/docs/docs/doc3',
  component: ComponentCreator('/docs/docs/doc3','f6e'),
  exact: true,
},
{
  path: '/docs/docs/mdx',
  component: ComponentCreator('/docs/docs/mdx','8c9'),
  exact: true,
},
{
  path: '/docs/hello-world',
  component: ComponentCreator('/docs/hello-world','b62'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
