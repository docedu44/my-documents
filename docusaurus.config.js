/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// @ts-ignore
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Documents',
  tagline: 'Welcome',
  url: 'https://devsteam.ir',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'mohammad farhadi', // Usually your GitHub org/user name.
  projectName: 'my documents', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'My Documents',
        logo: {
          alt: 'My Documents',
          src: 'img/favicon.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'DOC',
          },
          // {to: 'blog', label: 'Blog', position: 'left'},
          // Please keep GitHub link to the right for consistency.
          {
            href: 'https://devsteam.ir',
            label: 'Devsteam',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        // links: [
        //   {
        //     title: 'Learn',
        //     items: [
        //       {
        //         label: 'Style Guide',
        //         to: 'docs/',
        //       },
        //       {
        //         label: 'Second Doc',
        //         to: 'docs/doc2',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'Community',
        //     items: [
        //       {
        //         label: 'Stack Overflow',
        //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //       },
        //       {
        //         label: 'Twitter',
        //         href: 'https://twitter.com/docusaurus',
        //       },
        //       {
        //         label: 'Discord',
        //         href: 'https://discordapp.com/invite/docusaurus',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'More',
        //     items: [
        //       {
        //         label: 'Blog',
        //         to: 'blog',
        //       },
        //       {
        //         label: 'GitHub',
        //         href: 'https://github.com/facebook/docusaurus',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'Legal',
        //     // Please do not remove the privacy and terms, it's a legal requirement.
        //     items: [
        //       {
        //         label: 'Privacy',
        //         href: 'https://opensource.facebook.com/legal/privacy/',
        //       },
        //       {
        //         label: 'Terms',
        //         href: 'https://opensource.facebook.com/legal/terms/',
        //       },
        //       {
        //         label: 'Data Policy',
        //         href: 'https://opensource.facebook.com/legal/data-policy/',
        //       },
        //       {
        //         label: 'Cookie Policy',
        //         href: 'https://opensource.facebook.com/legal/cookie-policy/',
        //       },
        //     ],
        //   },
        // ],
        logo: {
          alt: 'Devsteam',
          src: 'img/favicon.png',
          href: 'https://devsteam.ir',
        },
        // Please do not remove the credits, help to publicize Docusaurus :)
        copyright: `Copyright © ${new Date().getFullYear()} Facebook, Inc. Built with Docusaurus.`,
      },
    }),
};

module.exports = config;
