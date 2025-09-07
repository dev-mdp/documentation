// @ts-check
import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Dokumentasi Mining & Energy Events Apps",
  tagline: "PT. Mining Digital Platform",

  future: { v4: true },

  url: "http://localhost:3000/", // URL setelah dihosting (Sekarang masih lokal)
  baseUrl: "/",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: undefined,
          // Untuk melihat Last Update
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: "Beranda",
      logo: {
        alt: "Logo Mining & Energy Events Apps",
        src: "img/mdpLogo.png", // Logo navbar kiri atas
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Dokumentasi",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          items: [{ label: "Pendahuluan", to: "/docs/pendahuluan" }],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()}, PT. Mining Digital Platform`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
  themes: ["@docusaurus/theme-mermaid"],
  markdown: { mermaid: true },

  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en"],
      },
    ],
  ],
};

export default config;
