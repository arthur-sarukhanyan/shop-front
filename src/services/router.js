import {createRouter, createWebHashHistory} from 'vue-router';

import ProductsPage from "@/components/Products/ProductsPage.vue";
import ProductPage from "@/components/Products/Product/ProductPage/ProductPage.vue";
import Login from "@/components/Auth/Login.vue";
import CartPage from "@/components/Cart/CartPage.vue";
import CheckoutPage from "@/components/Checkout/CheckoutPage.vue";

const routes = [
    { path: '/', component: ProductsPage },
    { path: '/product/:id', component: ProductPage },
    { path: '/products', component: ProductsPage },
    { path: '/login', component: Login },
    { path: '/cart', component: CartPage },
    { path: '/checkout', component: CheckoutPage },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;