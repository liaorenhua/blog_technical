import {sidebar} from "vuepress-theme-hope";
import {linux} from "./linux.js";
import {ddd} from "./ddd.js";
import {lm} from "./lm.js";


export const zhSidebar = sidebar({
    // 廖仁华，若这里不配置，则又导航条触发显示页面，左边没有菜单的; 用structure导航下面所有子菜单左边目录都一样
    "/database/": "structure",
    "/monitor-tuning/": "structure",
    "/http-protocol/": "structure",

    // 代码笔记导航条 framework 下面的子菜单
    "/linux/": linux,
    "/ddd/": ddd,

    // 2026年2月7日
    "/lm/": lm,

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
