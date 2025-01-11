import {arraySidebar} from "vuepress-theme-hope";

export const ddd = arraySidebar([
    "",
    {
        text: "导航",
        icon: "navigate",
        collapsible: false,
        prefix: "navigation/",
        children: [
            "intro",
            "navbar",
            "navbar-design",
            "sidebar-navigate",
            "tabbar",
            "tabbar-design",
        ],
    },
    {
        text: "什么是DDD",
        icon: "note",
        prefix: "articles/",
        children: [
            "",
            "01",
            "02",
            "gestalt-principle",
            "left-or-right",
            "infomation-flow"
        ],
    },
    "APP",
]);
