<template>

    <app-navbar></app-navbar>
    <app-slider v-if="showSlider()"></app-slider>
    <router-view></router-view>
    <app-footer></app-footer>

</template>

<script>
import AppNavbar from "./AppNavbar.vue";
import AppFooter from "./AppFooter.vue";
import AppSlider from "@/components/AppSlider.vue";
import AppSidebar from "@/components/AppSidebar.vue";
import {mapGetters, useStore} from "vuex";
import {useStorage} from "@/use/storage";

export default {
    name: "AppMain",
    components: {AppSidebar, AppSlider, AppFooter, AppNavbar},
    methods: {
        showSlider() {
            return this.$route.path === '/';
        },
    },
    setup() {
        const store = useStore();

        store.dispatch('auth/initToken').then(() => {
            if (store.getters['auth/getLoggedIn']) {
                store.dispatch('basket/getHttpBasket');
                store.dispatch('account/getData');
            } else {
                let data = useStorage().get('basket') ?? [];
                store.commit('basket/SET_DATA', data);
            }
        });
    },
    computed: {
        ...mapGetters({isLoggedIn: 'auth/getLoggedIn'})
    }
}
</script>

<style scoped>

</style>