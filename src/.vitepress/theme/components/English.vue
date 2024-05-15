<template>
    <main>
        {{frontmatter.title}}
        <Content />
    </main>

</template>

<script setup lang="ts">
import {useData} from "vitepress";
const { frontmatter } = useData();
</script>

<style scoped>
main{
    width: 100vw;
    height: 100vh;
    background-image: radial-gradient(circle, rgba(203 213 225) 2px, #fff 2px);
    background-size: 20px 20px;
    background-position: center center;
}
div {
    font-size: 24px;
    font-family: Virgil, Assistant, Zhushiti, Cangnanshoujiti, Cascadia,
        -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue,
        Arial, Noto Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
        Segoe UI Symbol, "Noto Color Emoji";
    font-weight: 600;
}
</style>
