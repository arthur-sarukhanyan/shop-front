<template>
    <div id="main" v-if="!login">
        <header>
            <div class="navbar">
                <app-navbar @show-login="login = true"></app-navbar>
            </div>
        </header>

        <main>
            <div class="wrapper">
                <app-sidebar></app-sidebar>
                <router-view></router-view>
            </div>
            <app-footer></app-footer>
        </main>
    </div>

    <div id="auth" v-if="login">
      <Login></Login>
    </div>
</template>

<script>
import ProductsList from "./Products/ProductsList.vue";
import AppNavbar from "./AppNavbar.vue";
import AppFooter from "./AppFooter.vue";
import AppSidebar from "./AppSidebar.vue";
import Login from "./Auth/Login.vue";

export default {
    name: "AppMain",
    components: {Login, AppSidebar, AppFooter, AppNavbar, ProductsList},
    data: () => {
        return {
            login: false
        }
    }
}
</script>

<style scoped>

</style>