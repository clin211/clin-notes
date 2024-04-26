import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    lastUpdated: true,
    base: "/",
    title: "长林杂驿",
    titleTemplate: "长林的全栈修炼之旅，包括学习路线、知识体系",
    description: "基于 VitePress 构建的个人博客网站",
    cleanUrls: true,
    head: [
        ["link", { rel: "icon", href: "/favicon.ico" }],
        // 引入 fancybox js 和 css 文件（图片放大预览功能）
        [
            "link",
            {
                rel: "stylesheet",
                href: "/css/fancybox.css",
            },
        ],
        [
            "script",
            {
                src: "/js/fancybox.umd.js",
            },
        ],
    ],
    themeConfig: {
        siteTitle: "长林杂驿",
        logo: "/seal.png",
        search: {
            provider: "local",
            options: {
                locales: {
                    zh: {
                        translations: {
                            button: {
                                buttonText: "搜索文档",
                                buttonAriaLabel: "搜索文档",
                            },
                            modal: {
                                noResultsText: "无法找到相关结果",
                                resetButtonTitle: "清除查询条件",
                                footer: {
                                    selectText: "选择",
                                    navigateText: "切换",
                                },
                            },
                        },
                    },
                },
            },
        },
        outline: "deep",
        outlineTitle: "当前页导航",
        docFooter: {
            prev: "上一篇",
            next: "下一篇",
        },
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: "Home", link: "/" },
            {
                text: "前端",
                items: [
                    {
                        text: "基础",
                        items: [
                            {
                                text: "HTML",
                                link: "/frontend/html/",
                            },
                            { text: "CSS", link: "/frontend/css/" },
                            {
                                text: "JavaScript",
                                link: "/frontend/javascript/",
                            },
                        ],
                    },
                    {
                        text: "框架",
                        items: [
                            { text: "Vue", link: "/frontend/vue/" },
                            {
                                text: "React",
                                link: "/frontend/react/",
                            },
                            {
                                text: "Next.js",
                                link: "/frontend/next/",
                            },
                        ],
                    },
                    {
                        text: "跨端",
                        items: [
                            {
                                text: "React native",
                                link: "/frontend/react-native/",
                            },
                            {
                                text: "Flutter",
                                link: "/frontend/flutter/",
                            },
                        ],
                    },
                ],
            },
            { text: "服务端", link: "/backend/" },
            { text: "Examples", link: "/markdown-examples" },
        ],
        sidebar: {
            "/frontend/html/": [
                { text: "HTML", link: "/frontend/html/index.md" },
            ],
            "/frontend/css/": [
                { text: "CSS", link: "/frontend/html/index.md" },
            ],
            "/frontend/javascript/": [
                { text: "JavaScript", link: "/frontend/javascript/index.md" },
            ],
            "/frontend/vue/": [{ text: "Vue", link: "/frontend/vue/index.md" }],
            "/frontend/react/": [
                { text: "React", link: "/frontend/react/index.md" },
            ],
            "/frontend/next/": [
                { text: "Next.js", link: "/frontend/next/index.md" },
            ],
            "/frontend/react-native/": [
                {
                    text: "React Native",
                    link: "/frontend/react-native/index.md",
                },
            ],
            "/frontend/flutter/": [
                { text: "Flutter", link: "/frontend/html/flutter.md" },
            ],
        },

        socialLinks: [
            { icon: "github", link: "https://github.com/vuejs/vitepress" },
        ],
        // 页脚配置
        footer: {
            message:
                '用心去做高质量的专业前端内容网站，欢迎 <a style="color: #0066ff" href="https://github.com/clin211/clin-notes">star ⭐</a> 让更多人发现',
            copyright:
                "MIT License | 版权所有 © 2023-2024 changlin and clin211 contributors",
        },
        // github 编辑链接
        editLink: {
            pattern:
                "https://github.com/clin211/clin-notes/blob/main/src/.vitepress/config.mts",
            text: "在 GitHub 上编辑此页",
        },
        // 最后更新时间的显示文本
        lastUpdatedText: "最后一次更新于",
    },
});
