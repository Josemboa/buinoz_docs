// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Buinoz',
  tagline: 'Guias passo a passo de cada módulo do Buinoz.',
  favicon: 'img/favicon.png',

  

  
  // Set the production url of your site here
  url: 'https://docs.buinoz.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          //routeBasePath: '/intro',
          sidebarPath: require.resolve('./sidebars.js'),
          //routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Buinoz · Guias',
        logo: { alt: 'Buinoz', src: 'img/buinoz.png', href: '/' },
        // title: 'My Site',
        // logo: {
        //   alt: 'My Site Logo',
        //   src: 'img/logo.svg',
        // },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            
            label: 'Guias por módulo',
          },
          { to: '/arquivos', label: 'Arquivos', position: 'left' },
          {
            type: 'dropdown', label: 'Comercial', position: 'left',
            items: [
              { to: '/apresentacao', label: 'Apresentação' },
              { to: '/precos', label: 'Preços' },
              { to: '/termos', label: 'Termos e SLA' },
              { to: '/comercial', label: 'Baixar tudo' },
            ],
          },
          { href: 'https://buinoz.com', label: 'buinoz.com', position: 'right' },
          { href: 'mailto:suporte@buinoz.com', label: 'Suporte', position: 'right' },
        ],
      },
      footer: {
        style: 'dark',
        
        copyright: `Buinoz® ${new Date().getFullYear()} `,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
