import {navbar} from "vuepress-theme-hope";

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
            // {
            //   // text: "概述",
            //   icon: "lightbulb",
            //   prefix: "01/",  // database 目录的下一层: 01
            //   children: [
            //       // link: "" 这个链接为空导致左边菜单 不会因为这个子菜单有任何改变，他只会引用: database对应的无序菜单
            //     { text: "概述", icon: "ellipsis", link: "" }
            //   ],
            // },
            {
                text: "关系数据库 ",
                icon: "lightbulb",
                // prefix: "02/",
                children: [
                    {text: "Mysql", icon: "ellipsis", link: "01/"},
                    {text: "Redis", icon: "ellipsis", link: "02/"},
                    {text: "extend", icon: "ellipsis", link: "03/"},
                    {text: "DataX", icon: "ellipsis", link: "04/"},
                ],
            },
            // {
            //   // text: "mysql",
            //   icon: "lightbulb",
            //   prefix: "03/",
            //   children: [
            //     { text: "Mysql", icon: "ellipsis", link: "" }
            //   ],
            // },
        ],
    },
    "/monitor-tuning/",
    "/http-protocol/",
    // 架构  如此样式，会左边菜单不会更改的，所以子菜单共用一个左边一个菜单
    // {
    //   text: "架构",
    //   icon: "circle-down",
    //   prefix: "/framework/",
    //   children: [
    //     {
    //       text: "概述",
    //       icon: "lightbulb",
    //       prefix: "01/",  // database 目录的下一层: 01
    //       children: [
    //         { text: "概述", icon: "ellipsis", link: "/code/", activeMatch: "^/code/$"}
    //       ],
    //     },
    //     {
    //       text: "redis",
    //       icon: "lightbulb",
    //       prefix: "02/",
    //       children: [
    //         { text: "DDD", icon: "ellipsis", link: "" }
    //       ],
    //     },
    //   ],
    // },
    // 这个样式是 左边菜单随着导航条变动
    {
        text: "系统架构",
        icon: "code",
        children: [
            {
                text: "笔记",
                icon: "code",
                children: ["/ddd/", "/linux/"],
            },
            // {
            //   // text: "产品设计",
            //   children: ["/design/", "/linux/"],
            // },
            // {
            //   // text: "后端运维",
            //   children: ["/linux/"],
            // },
        ],
    },
    // 2026年2月7日   这个是导航条 关联的菜单
    {
        text: "AI",
        icon: "code",
        children: [
            {
                text: "笔记",
                icon: "code",
                children: ["/lm/"],
            },
            // {
            //   // text: "产品设计",
            //   children: ["/design/", "/linux/"],
            // },
            // {
            //   // text: "后端运维",
            //   children: ["/linux/"],
            // },
        ],
    },


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
