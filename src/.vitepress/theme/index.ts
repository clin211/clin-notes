// .vitepress/theme/index.js
import DefaultTheme from "vitepress/theme";
import vitepressNprogress from "vitepress-plugin-nprogress";
import vitepressBackToTop from "vitepress-plugin-back-to-top";
import "vitepress-plugin-back-to-top/dist/style.css";
import "vitepress-plugin-nprogress/lib/css/index.css";
import "./custom.css";
import "./main.css";

export default {
    ...DefaultTheme,
    enhanceApp(ctx) {
        vitepressNprogress(ctx);
        vitepressBackToTop({
            // default
            threshold: 300,
        });
    },
};
