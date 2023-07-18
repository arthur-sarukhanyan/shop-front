import { createStore } from 'vuex'

import products from "@/modules/products";
import product from "@/modules/product";
import categories from "@/modules/categories";
import filterGroups from "@/modules/filterGroups";
import localBasket from "@/modules/localBasket";

// Create a new store instance.
const store = createStore({
    modules: {
        products,
        product,
        categories,
        filterGroups,
        localBasket,
    }
})

export default store;