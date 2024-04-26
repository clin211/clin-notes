import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
    lastUpdated: true,
    base: '/',
    title: 'My Awesome Project',
    titleTemplate: '长林的全栈修炼之旅，包括学习路线、知识体系',
    description: '基于 VitePress 构建的个人博客网站',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        // 引入 fancybox js 和 css 文件（图片放大预览功能）
        [
            'link',
            {
                rel: 'stylesheet',
                href: 'https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css',
            },
        ],
        [
            'script',
            {
                src: 'https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js',
            },
        ],
    ],
    themeConfig: {
        siteTitle: 'Forest Docs',
        logo: '/my-logo.png',
        outline: 'deep',
        outlineTitle: '当前页导航',
        docFooter: {
            prev: '上一篇',
            next: '下一篇',
        },
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Examples', link: '/markdown-examples' },
        ],

        sidebar: [
            {
                text: 'Examples',
                items: [
                    { text: 'Markdown Examples', link: '/markdown-examples' },
                    { text: 'Runtime API Examples', link: '/api-examples' },
                ],
            },
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
        ],
        // 页脚配置
        footer: {
            message:
                '用心去做高质量的专业前端内容网站，欢迎 <a style="color: #0066ff" href="https://github.com/clin211/clin-notes">star ⭐</a> 让更多人发现',
            copyright:
                'MIT License | 版权所有 © 2023-2024 changlin and clin211 contributors',
        },
        // github 编辑链接
        editLink: {
            pattern:
                'https://github.com/clin211/clin-notes/blob/main/src/.vitepress/config.mts',
            text: '在 GitHub 上编辑此页',
        },
        // 最后更新时间的显示文本
        lastUpdatedText: '最后一次更新于',
    },
});
