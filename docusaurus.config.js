// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const organizationName = "ZTRdiamond";
const projectName = "znbotweb";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Zanixon Wabot",
  tagline: "Whatsapp bot gratis dengan banyak fitur seperti downloader, AI, image generator dan masih banyak lagi...",
  url: `https://docs.zanixon.xyz`,
  baseUrl: `/`,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  favicon: "img/zn-logo.png",
  // GitHub Pages adds a trailing slash by default that I don't want
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName, // Usually your GitHub org/user name.
  projectName, // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "id",
    locales: ["id"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js")
        },
        blog: {
          showReadingTime: true
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Zanixon Wabot",
        logo: {
          alt: "zn-logo",
          src: "img/zn-logo-nobg.png",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Dokumentasi",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: `https://github.com/${organizationName}/zanixon-wabot`,
            label: "GitHub",
            position: "left",
          },
          {
            href: `https://trakteer.id/zanixongroup`,
            label: "Support Kami",
            position: "left"
          }
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Dokumentasi",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Komunitas",
            items: [
              {
                label: "Grup Whatsapp",
                href: "https://chat.whatsapp.com/D5d0UUnYZu5BmaE70gKS7l",
              },
              {
                label: "Channel Whatsapp",
                href: "https://whatsapp.com/channel/0029VaFOXjs7tkj2OGoypH1V",
              },
            ],
          },
          {
            title: "Lainnya",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: `https://github.com/${organizationName}/zanixon-wabot`,
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Zanixon Wabot, All right reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
