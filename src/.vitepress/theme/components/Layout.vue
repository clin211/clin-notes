<template>
    <n-dialog-provider>
        <Layout>
            <template #nav-bar-content-after>
                <div class="login"><Login /></div>
            </template>
        </Layout>
    </n-dialog-provider>
</template>
<script setup lang="ts">
import DefaultTheme from "vitepress/theme";
import { NDialogProvider } from "naive-ui";
import Login from "./Login.vue";

const { Layout } = DefaultTheme;
</script>
<style scoped>
.login {
    margin-inline-start: 16px;
}
</style>
