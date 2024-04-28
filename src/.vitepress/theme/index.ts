// .vitepress/theme/index.js
import DefaultTheme from "vitepress/theme";
import vitepressNprogress from "vitepress-plugin-nprogress";
import vitepressBackToTop from "vitepress-plugin-back-to-top";
import naive from "naive-ui";
import "vitepress-plugin-back-to-top/dist/style.css";
import "vitepress-plugin-nprogress/lib/css/index.css";
import "./custom.css";
import "./main.css";

import Layout from "./components/Layout.vue";
import Login from "./components/Login.vue";

// 通用字体
import "vfonts/Lato.css";
// 等宽字体
import "vfonts/FiraCode.css";

export default {
    extends: DefaultTheme,
    Layout,
    enhanceApp(ctx) {
        vitepressNprogress(ctx);
        vitepressBackToTop({
            // default
            threshold: 300,
        });
        ctx.app.use(naive);
        ctx.app.component("Login", Login);
    },
};
