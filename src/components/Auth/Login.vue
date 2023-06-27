<template>
    <form @submit.prevent="handleSubmit" class="checkout-form">
        <h1>Login Form</h1>

        <div class="address__field">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" v-model="loginForm.email" required />
        </div>
        <div class="password__field">
            <label for="password">Password</label>
            <input type="password" id="password" name="password" v-model="loginForm.password" required />
        </div>
        <div class="address__field">
            <button type="submit">Submit</button>
        </div>
    </form>
</template>

<script>

export default {
    name: "Login",
    data() {
        return {
            loginForm: {
                email: '',
                password: '',
            }
        }
    },
    methods: {
        async handleSubmit() {
            const data = {
                email: this.loginForm.email,
                password: this.loginForm.password
            }
            const response = await this.$axios.post('auth/login', data);
            console.log(response.data.access_token);
        }
    },
}
</script>

<style scoped>

</style>