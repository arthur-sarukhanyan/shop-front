<template>
  <div class="nav-main">
    <div class="nav-main-left"></div>
    <div class="nav-main-right">
        <div class="profile">
            <p v-if="loggedIn">Logged In</p>
            <p v-if="!loggedIn" @click="showLogin">Login</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "AppNavbar",
    data: () => {
        return {
            loggedIn: false
        }
    },
    methods: {
        showLogin() {
          this.$emit('show-login');
        }
    }
}
</script>

<style scoped>

</style>