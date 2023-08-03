<template>
    <div class="login-form"><!--login form-->
        <h2>Login to your account</h2>
        <form @submit.prevent="handleSubmit">
            <div class="form-group" :class="{'has-error': !form.email.valid && form.email.touched}">
                <input
                        type="email"
                        id="email"
                        name="email"
                        v-model="form.email.value"
                        required
                        placeholder="Email Address"
                        @blur="form.email.blur"/>

                <small v-if="form.email.errors.required && form.email.touched" class="error-msg">Field is
                    required</small>
                <small v-else-if="form.email.errors.email && form.email.touched" class="error-msg">Email format is
                    incorrect</small>
            </div>
            <div class="form-group" :class="{'has-error': !form.password.valid && form.password.touched}">
                <input
                        type="password"
                        id="password"
                        name="password"
                        v-model="form.password.value"
                        required
                        placeholder="Password"
                        @blur="form.password.blur"/>

                <small v-if="form.password.errors.required && form.password.touched" class="error-msg">Field is
                    required</small>
                <small v-else-if="form.password.errors.minLength && form.password.touched" class="error-msg">Field
                    minimal length is 3</small>
            </div>

            <span>
							<input type="checkbox" class="checkbox">
							Keep me signed in
						</span>
            <button type="submit" :disabled="!form.email.valid || !form.password.valid" class="btn">Login
            </button>
        </form>
    </div><!--/login form-->
</template>

<script>
import httpClient from "@/services/axios";
import {useForm} from "@/use/form";
import {mapState} from "vuex";

export default {
    name: "AuthLogin",
    methods: {
        async handleSubmit() {
            const data = {
                email: this.form.email.value,
                password: this.form.password.value
            }
            await this.$store.dispatch('auth/login', data);
            this.$router.push('products');
        }
    },
    setup() {
        const form = useForm({
            email: {
                value: '',
                validators: [
                    'required',
                    'email',
                ]
            },
            password: {
                value: '',
                validators: [
                    'required',
                    'minLength:3'
                ]
            }
        });

        return {form};
    },
    computed: {
        ...mapState(['auth'])
    },
}
</script>

<style scoped>

</style>