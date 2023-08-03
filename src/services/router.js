import {createRouter, createWebHashHistory} from 'vue-router';

import ProductsPage from "@/components/Products/ProductsPage.vue";
import ProductPage from "@/components/Products/Product/ProductPage/ProductPage.vue";
import CartPage from "@/components/Cart/CartPage.vue";
import CheckoutPage from "@/components/Checkout/CheckoutPage.vue";
import AuthPage from "@/components/Auth/AuthPage.vue";
import AccountPage from "@/components/Account/AccountPage.vue";

const routes = [
    { path: '/', component: ProductsPage },
    { path: '/product/:id', component: ProductPage },
    { path: '/products', component: ProductsPage },
    { path: '/login', component: AuthPage },
    { path: '/cart', component: CartPage },
    { path: '/checkout', component: CheckoutPage },
    { path: '/account', component: AccountPage },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;