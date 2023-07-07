<template>
    <section id="form"><!--form-->
        <div class="container">
            <div class="row">
                <div class="col-sm-4 col-sm-offset-1">
                    <div class="login-form"><!--login form-->
                        <h2>Login to your account</h2>
                        <form @submit.prevent="handleSubmit">
                            <input type="email" id="email" name="email" v-model="loginForm.email" required placeholder="Email Address" />
                            <input type="password" id="password" name="password" v-model="loginForm.password" required placeholder="Password" />
                            <span>
							              	<input type="checkbox" class="checkbox">
							              	Keep me signed in
							              </span>
                            <button type="submit" class="btn btn-default">Login</button>
                        </form>
                    </div><!--/login form-->
                </div>
                <div class="col-sm-1">
                    <h2 class="or">OR</h2>
                </div>
                <div class="col-sm-4">
                    <div class="signup-form"><!--sign up form-->
                        <h2>New User Signup!</h2>
                        <form action="#">
                            <input type="text" placeholder="Name"/>
                            <input type="email" placeholder="Email Address"/>
                            <input type="password" placeholder="Password"/>
                            <button type="submit" class="btn btn-default">Signup</button>
                        </form>
                    </div><!--/sign up form-->
                </div>
            </div>
        </div>
    </section><!--/form-->

</template>

<script>
import httpClient from "@/services/axios";

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
            const response = await httpClient.httpClient.post('auth/login', data);
            console.log(response.data.access_token);
        }
    },
}
</script>

<style scoped>

</style>