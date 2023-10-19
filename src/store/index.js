import { createPinia } from "pinia";
import useCategoryStore from "./modules/category";
import piniaPluginPersist from "pinia-plugin-persistedstate";

const store = createPinia();
store.use(piniaPluginPersist);

export const refreshCaches = () => {
    useCategoryStore().$reset();
}

export {
    store,
    useCategoryStore
}
// export function useStore () {
//     return {
//         category: useCategoryStore()
//     }
// }