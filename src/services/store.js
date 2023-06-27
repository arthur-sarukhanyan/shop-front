import { createStore } from 'vuex'
import products from "@/modules/products";

// Create a new store instance.
const store = createStore({
    modules: {
        products
    }
})

export default store;