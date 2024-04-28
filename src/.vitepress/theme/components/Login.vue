<template>
    <n-button
        strong
        round
        secondary
        class="login"
        style="color: var(--vp-c-brand-3)"
        @click="showModal = true"
    >
        登录
    </n-button>
    <n-modal v-model:show="showModal">
        <n-card
            size="huge"
            role="dialog"
            aria-modal="true"
            :bordered="false"
            style="width: 20rem; background-color: var(--vp-c-bg)"
        >
            <span
                style="
                    line-height: 24px;
                    font-size: 16px;
                    color: var(--vp-text-1);
                    filter: invert(100%);
                "
            >
                微信扫码登录</span
            >
            <n-image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhQaNlENJOSWljT7uhjyZzzeAokDE0PVNPg&s"
            ></n-image>
        </n-card>
    </n-modal>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useData } from "vitepress";
import { NGradientText } from "naive-ui";

const data = useData();
console.log("🚀 ~ data:", data);
const showModal = ref(false);
</script>

<style scoped>
.n-card-header__main {
    color: var(--vp-c-accent) !important;
}
</style>
