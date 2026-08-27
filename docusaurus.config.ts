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
    '@r74tech/docusaurus-plugin-panzoom'
  ],
  themes: ['@docusaurus/theme-mermaid'],
  themeConfig: {
    image: 'img/banner.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    mermaid: {
      theme: { light: 'neutral', dark: 'dark' },
    },
    zoom: {
      selectors: [
        '.theme-mermaid svg',
        '.docusaurus-mermaid-container svg',
        'div.mermaid[data-processed="true"] svg',
      ],
      wrap: true,
      toolbar: {
        enabled: true,
        position: 'top-right',
        opacity: 0.7,
      },
      enableWheelZoom: true,
      enableDoubleClickResetZoom: true,
      restrictZoomOutBeyondOrigin: true,
      minScale: 1,
      maxScale: 5,
      step: 0.3,
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
        to: '/docs/reference/api', 
        label: 'API Reference', 
        position: 'left'
      },
      {
        to: '/docs/integrations', 
        label: 'Integrations', 
        position: 'left'
      },
      {
        type: 'dropdown',
        label: 'Community',
        position: 'left',
        items: [
          {
            label: 'GitHub Discussions',
            href: 'https://github.com/synentra/synentra/discussions',
          },
          {
            label: 'Discord',
            href: 'https://discord.synentra.io/',
          },
          {
            label: 'Linkedin',
            href: 'https://www.linkedin.com/company/synentra',
          },
        ],
      },
      {
        to: 'https://discord.synentra.io/',
        position: 'right',
        label: 'Join our Discord',
        className: 'button button--primary button--md button-discord'
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
          label: 'GitHub discussions',
          href: 'https://github.com/synentra/synentra/discussions',
        },
        {
          label: 'Discord',
          href: 'https://discord.synentra.io/'
        },
        {
          label: 'Linkedin',
          href: 'https://www.linkedin.com/company/synentra',
        },
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
      appId: '8C6G7HGXQ8',
      apiKey: '3eb0ed3fc15dbcc18810b002be227129',
      indexName: 'website',
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
