import {arraySidebar} from "vuepress-theme-hope";

export const lm = arraySidebar([
    "",
    {
        text: "简介",
        icon: "info",
        link: "intro/",
        prefix: "intro/",
        children: ["intro", "concept"],
    },
    {
        text: "文件结构",
        icon: "file",
        link: "file/",
        prefix: "file/",
        children: ["mount"],
    },
]);
