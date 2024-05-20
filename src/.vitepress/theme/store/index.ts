// stores/counter.js
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
    state: () => ({ isLogin: 0 }),
    actions: {
        setLoginStatus(status: boolean) {
            this.isLogin = status;
        },
    },
});
