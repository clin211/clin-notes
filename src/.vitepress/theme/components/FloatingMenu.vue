<template>
    <div class="container">
        <n-float-button position="relative" type="primary" menu-trigger="click">
            <n-icon>
                <cash-icon />
            </n-icon>
            <template #menu>
                <n-float-button shape="square" type="primary">
                    <n-icon>
                        <cash-icon />
                    </n-icon>
                </n-float-button>
                <n-float-button>
                    <n-icon>
                        <cash-icon />
                    </n-icon>
                </n-float-button>
                <n-float-button>
                    <n-icon>
                        <cash-icon />
                    </n-icon>
                </n-float-button>
            </template>
        </n-float-button>
    </div>
</template>

<script setup lang="ts">
import { CashOutline as CashIcon } from "@vicons/ionicons5";
</script>

<style scoped>
.container {
    position: fixed;
    bottom: 2.5rem;
    right: 2.5rem;
    box-shadow: 0 2px 12px #0000001a;
    cursor: pointer;
    z-index: 9;
}
</style>
