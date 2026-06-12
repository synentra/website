import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Synentra',
  tagline: 'The essential security layer for autonomous AI. Dynamically evaluate agent intent, enforce strict guardrails, and seamlessly route high-risk operations to human-in-the-loop approval workflows. Secure your AI runtime effortlessly.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://synentra.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'synentra', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.
  
  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          showLastUpdateTime: true,
          showLastUpdateAuthor: false,
          includeCurrentVersion: true
        },
        blog: {
          showReadingTime: true,
          showLastUpdateTime: true,
          routeBasePath: 'blog',
          blogSidebarCount: 10,
          postsPerPage: 6,
          blogTitle: 'Blog',
          blogDescription: 'Technical articles and tutorials'
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-XD4R0EG3EP',
        anonymizeIP: true,
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/OpenGraph.jpg',
    navbar: {
      title: 'Synentra',
      logo: {
      alt: 'Synentra Logo',
      src: 'img/logo.png',
      },
      items: [
      {
        type: 'docSidebar',
        sidebarId: 'docSidebar',
        position: 'left',
        label: 'Docs',
      },
      {
        to: '/blog', 
        label: 'Blog', 
        position: 'left'
      },
      {
        href: 'https://github.com/synentra/synentra',
        position: 'right',
        className: 'header-github-link',
        'aria-label': 'GitHub repository',
      },
      ],
    },
    footer: {
      style: 'light',
      links: [
      {
        title: 'Learn',
        items: [
        {
          label: 'Docs',
          to: '/docs/',
        },
        {
          label: 'Getting Started',
          to: '/docs/getting-started',
        }
        ],
      },
      {
        title: 'Community',
        items: [
        {
          label: 'GitHub',
          href: 'https://github.com/synentra/synentra',
        },
        {
          label: 'Linkedin',
          href: 'https://www.linkedin.com/company/synentra',
        }
        ],
      },
      {
        title: 'News & Media',
        items: [
        {
          label: 'Blog',
          to: '/blog',
        }
        ],
      },
      ],
      logo: {
        alt: 'Synentra Logo',
        src: 'img/logo.png',
        href: '/',
        width: 96,
      },
      copyright: `Copyright © ${new Date().getFullYear()} - Synentra - All rights reserved.<br />
      Built with <a href="https://docusaurus.io/" target="_blank">Docusaurus</a>. Hosted at <a href="https://pages.github.com/" target="_blank">Github Pages</a>.`
    },
    algolia: {
      // The application ID provided by Algolia
      appId: 'RPBB8MPKU9',

      // Public API key: it is safe to commit it
      apiKey: 'bfa75134aabeff74b771bad3406ddc6a',

      indexName: 'genofow',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',

      //... other Algolia params
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
