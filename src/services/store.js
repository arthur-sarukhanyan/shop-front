import { createStore } from 'vuex'

import products from "@/modules/products";
import product from "@/modules/product";
import categories from "@/modules/categories";

// Create a new store instance.
const store = createStore({
    modules: {
        products,
        product,
        categories,
    }
})

export default store;