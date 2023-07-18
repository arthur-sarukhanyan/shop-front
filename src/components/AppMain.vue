<template>

    <app-navbar></app-navbar>
    <app-slider v-if="showSlider()"></app-slider>
    <router-view></router-view>
    <app-footer></app-footer>

</template>

<script>
import AppNavbar from "./AppNavbar.vue";
import AppFooter from "./AppFooter.vue";
import Login from "./Auth/Login.vue";
import AppSlider from "@/components/AppSlider.vue";
import AppSidebar from "@/components/AppSidebar.vue";
import {mapState} from "vuex";

export default {
    name: "AppMain",
    components: {AppSidebar, AppSlider, Login, AppFooter, AppNavbar},
    data: () => {
        return {
            login: false
        }
    },
    mounted() {
        this.$store.dispatch('localBasket/getData');
    },
    methods: {
        showSlider() {
            return this.$route.path === '/';
        }
    },
    computed: {
        ...mapState(['localBasket'])
    }
}
</script>

<style scoped>

</style>