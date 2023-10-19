import { defineStore } from "pinia";
import request from "@/utils/request";

export default defineStore({
    id: 'category',
    persist: {
        enabled: true,
        storage: window.sessionStorage
    },
    state: () => ({
        test: 'category test'
    }),
    getters: {},
    actions: {
        // 执行同步or异步 获取数据
        getData () {
            // let res = request.get('/xxxx')
            let res = 'later xxxxxxxxxxxxxxx'
            this.test = res
        }
    }
});
