// stores/counter.js
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
    state: () => ({ isLogin: false }),
    actions: {
        setLoginStatus(status: boolean) {
            this.isLogin = status;
        },
    },
});
