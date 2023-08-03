import { createStore } from 'vuex'

import products from "@/modules/products";
import product from "@/modules/product";
import categories from "@/modules/categories";
import filterGroups from "@/modules/filterGroups";
import basket from "@/modules/basket";
import auth from "@/modules/auth";
import account from "@/modules/account";
import countries from "@/modules/countries";

// Create a new store instance.
const store = createStore({
    modules: {
        products,
        product,
        categories,
        filterGroups,
        basket,
        auth,
        account,
        countries,
    }
})

export default store;