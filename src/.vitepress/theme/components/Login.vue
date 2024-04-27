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
            title="微信扫码登录"
            style="width: 20rem"
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

const data = useData();
console.log("🚀 ~ data:", data);
const showModal = ref(false);
</script>

<style scoped></style>
