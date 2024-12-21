import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  // 廖仁华，若这里不配置，则又导航条触发显示页面，左边没有菜单的
  "/database/": "structure",
  "/monitor-tuning/": "structure",
  "/http-protocol/": "structure",

  // 下载链接
  // "/download/": "structure",
  "/instructions/": "structure",
  "/guide/": "structure",
  // 协议和声明
  // "/custom-level/": "structure",
  // 用户社区
  // "/contribution/": "structure",
  // "/devtool/": "structure",
  // "/almanac/": "structure",

  "/": [
    // "portfolio",
    // {
    //   text: "案例",
    //   icon: "laptop-code",
    //   prefix: "demo/",
    //   link: "demo/",
    //   children: "structure",
    // },
    // {
    //   text: "文档",
    //   icon: "book",
    //   prefix: "guide/",
    //   children: "structure",
    // },
    // {
    //   text: "幻灯片",
    //   icon: "person-chalkboard",
    //   link: "https://plugin-md-enhance.vuejs.press/zh/guide/content/revealjs/demo.html",
    // },
  ],
});
