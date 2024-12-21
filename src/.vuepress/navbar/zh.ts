import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",

  // 廖仁华 自定义新增导航条菜单
  {
    text: "数据库",
    icon: "lightbulb",
    /**
     *  这里prefix值指向的是sidebar目录下里面的*.ts里面的key; 如果是英文的话类似: /en/guide/ 配置;
     *  如果能指的到到时候显示左边会有菜单，否则没有菜单的
     */
    prefix: "/database/",
    children: [
      {
        // text: "概述",
        icon: "lightbulb",
        prefix: "01/",  // database 目录的下一层: 01
        children: [
          { text: "概述", icon: "ellipsis", link: "" }
        ],
      },
      {
        // text: "redis",
        icon: "lightbulb",
        prefix: "02/",
        children: [
          { text: "Redis", icon: "ellipsis", link: "" }
        ],
      },
      {
        // text: "mysql",
        icon: "lightbulb",
        prefix: "03/",
        children: [
          { text: "Mysql", icon: "ellipsis", link: "" }
        ],
      },
    ],
  },
  "/monitor-tuning/",
  "/http-protocol/",


  // 下载链接
  // "/download/",
    // 在线图鉴
  // "/almanac/",
  "/guide/",
  // 自定义关卡
  // "/custom-level/",
  // 协议和声明
  // "/instructions/",

  // "/contribution/",
  // "/devtool/",
  // { text: "在线游玩", link: "https://play.pvzge.com", icon: "circle-play" },

  // "/demo/",
  // {
  //   text: "指南",
  //   icon: "lightbulb",
  //   prefix: "/zh/guide/",
  //   children: [
  //     {
  //       text: "Bar",
  //       icon: "lightbulb",
  //       prefix: "bar/",
  //       children: ["baz", { text: "...", icon: "ellipsis", link: "" }],
  //     },
  //     {
  //       text: "Foo",
  //       icon: "lightbulb",
  //       prefix: "foo/",
  //       children: ["ray", { text: "...", icon: "ellipsis", link: "" }],
  //     },
  //   ],
  // },
  // {
  //   text: "V2 文档",
  //   icon: "book",
  //   link: "https://theme-hope.vuejs.press/zh/",
  // },
]);
