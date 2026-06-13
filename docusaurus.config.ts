import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Synentra',
  tagline: 'The essential security layer for autonomous AI. Dynamically evaluate agent intent, enforce strict guardrails, and seamlessly route high-risk operations to human-in-the-loop approval workflows. Secure your AI runtime effortlessly.',
  favicon: 'img/favicon.ico',
  url: 'https://synentra.io',
  baseUrl: '/',
  organizationName: 'synentra',
  projectName: 'website',
  onBrokenLinks: 'throw',
  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
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
  themes: ['@docusaurus/theme-mermaid'],
  themeConfig: {
    image: 'img/banner.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    mermaid: {
      theme: { light: 'neutral', dark: 'dark' },
    },
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
      container: '#docsearch',
      appId: 'CVJYAI977T',
      apiKey: 'd87728152845458be0d04dfecc2929d4',
      indexName: 'Docs',
      contextualSearch: true,
      searchParameters: {},
      searchPagePath: 'search',
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
