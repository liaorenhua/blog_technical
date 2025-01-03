import { hopeTheme } from "vuepress-theme-hope";
import { watermarkPlugin } from '@vuepress/plugin-watermark'
import { enNavbar, ruNavbar, zhNavbar, ptNavbar } from "./navbar/index.js";
import { enSidebar, ruSidebar, zhSidebar, ptSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://www.pvzge.com",

  author: {
    // 廖仁华
    name: "Leo",
    // url: "https://gaozih.com",
    url: "https://blog.csdn.net/liao_rh",
  },

  license: "Apache 2.0",

  iconAssets: ["/assets/libs/font-awesome/css/all.min.css"],

  iconPrefix: "fas fa-",
  // 廖仁华 修改网页icon
  // favicon: "/favicon.ico",
  favicon: "/favicon.png",

  // 廖仁华 左上角logo
  // logo: "pvzg_nav.webp",
  logo: "leo_nav.png",

  // 仓库github显示
  // 廖仁华 这里好像是拼接的；因为官网github仓库地址: https://github.com/Gzh0821/pvzg_site  这里注释了就不会显示了
  // repo: "Gzh0821/pvzg_site",

  docsDir: "src",

  lastUpdated: false,
  // 是否展示贡献者
  contributors: false,
  // 是否展示编辑链接
  editLink: false,

  locales: {
    "/en/": {
      // navbar
      navbar: enNavbar,
      navbarTitle: "PvZ2 Gardendless",
      // sidebar
      sidebar: enSidebar,

      footer: "Official website of PvZ2 Gardendless: pvzge.com",
      copyright: "Copyright 2021-2024 <a href=\"https://gaozih.com\">Gaozih</a> © All Rights Reserved.",
      displayFooter: true,

      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
    },
    "/ru-RU/": {
      // navbar
      navbar: ruNavbar,
      navbarTitle: "PvZ2 Gardendless",
      // sidebar
      sidebar: ruSidebar,

      footer: "Official website of PvZ2 Gardendless: pvzge.com",
      copyright: "Copyright 2021-2024 <a href=\"https://gaozih.com\">Gaozih</a> © All Rights Reserved.",
      displayFooter: true,

      metaLocales: {
        editLink: "Редактировать эту страницу на GitHub",
      },
    },
    "/pt-BR/": {
      // navbar
      navbar: ptNavbar,
      navbarTitle: "PvZ2 Gardendless",
      // sidebar
      sidebar: ptSidebar,

      footer: "Official website of PvZ2 Gardendless: pvzge.com",
      copyright: "Copyright 2021-2024 <a href=\"https://gaozih.com\">Gaozih</a> © All Rights Reserved.",
      displayFooter: true,

      metaLocales: {
        editLink: "Editar esta página no GitHub",
      },
    },
    /**
     * Chinese locale config
     */
    "/": {
      // navbar
      navbar: zhNavbar,
      // 廖仁华 下面不要了 2024年12月21日  少个tile
      // navbarTitle: "PvZ2 Gardendless",
      // sidebar
      sidebar: zhSidebar,
      // 廖仁华
      footer: "CSDN: https://blog.csdn.net/liao_rh",
      copyright: "Copyright 2024-2030 © All Rights Reserved.",
      displayFooter: true,

      // page meta
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },
  },

  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
      "/zh/demo/encrypt.html": ["1234"],
    },
  },

  markdown: {
    alert: true,
    align: true,
    attrs: true,
    codeTabs: true,
    component: true,
    demo: true,
    figure: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    mark: true,
    plantuml: true,
    spoiler: true,
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],
    sub: true,
    sup: true,
    tabs: true,
    tasklist: true,
    vPre: true,

    // Install chart.js before enabling it
    // chart: true,

    // insert component easily

    // Install echarts before enabling it
    // echarts: true,

    // Install flowchart.ts before enabling it
    // flowchart: true,

    // gfm requires mathjax-full to provide tex support
    // gfm: true,

    // Install katex before enabling it
    // katex: true,

    // Install mathjax-full before enabling it
    // mathjax: true,

    // Install mermaid before enabling it
    // mermaid: true,

    // playground: {
    //   presets: ["ts", "vue"],
    // },

    // Install reveal.js before enabling it
    // revealJs: {
    //   plugins: ["highlight", "math", "search", "notes", "zoom"],
    // },

    // Install @vue/repl before enabling it
    // vuePlayground: true,

    // Install sandpack-vue3 before enabling it
    // sandpack: true,
  },

  plugins: {

    comment: {
      provider: "Giscus",
      repo: "Gzh0821/pvzg_site",
      repoId: "R_kgDOMVGuyA",
      category: "Announcements",
      categoryId: "DIC_kwDOMVGuyM4ChC2W",
    },

    docsearch: {
      apiKey: "f1d18929d11103995bfbdf406605349a",
      indexName: "pvzge",
      appId: "F8XF44AIE6",
    },
    components: {
      components: ["Badge", "BiliBili", "VPCard", "VidStack"],
    },

    photoSwipe: false,

    watermark: {
      enabled: false,
      watermarkOptions: {
        content: "PvZ2 Gardendless",
      },
    },
    seo: true,
    sitemap: true,
    // Install @vuepress/plugin-pwa and uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cacheImage: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
