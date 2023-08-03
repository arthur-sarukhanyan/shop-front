<template>
    <div class="signup-form"><!--sign up form-->
        <h2>New User Signup!</h2>
        <form @submit.prevent="handleSubmit">
            <div class="form-group" :class="{'has-error': !form.name.valid && form.name.touched}">
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    v-model="form.name.value"
                    @blur="form.name.blur"/>

                <small v-if="form.name.errors.required && form.name.touched" class="error-msg">Field is
                    required</small>
                <small v-else-if="form.name.errors.minLength && form.name.touched" class="error-msg">Field
                    minimal length is 3</small>
            </div>

            <div class="form-group" :class="{'has-error': !form.email.valid && form.email.touched}">
                <input type="email"
                       placeholder="Email Address"
                       name="email"
                       v-model="form.email.value"
                       @blur="form.email.blur"/>

                <small v-if="form.email.errors.required && form.email.touched" class="error-msg">Field is
                    required</small>
                <small v-else-if="form.email.errors.email && form.email.touched" class="error-msg">Email format is
                    incorrect</small>
            </div>

            <div class="form-group" :class="{'has-error': !form.password.valid && form.password.touched}">
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    v-model="form.password.value"
                    @blur="form.password.blur"/>

                <small v-if="form.password.errors.required && form.password.touched" class="error-msg">Field is
                    required</small>
                <small v-else-if="form.password.errors.minLength && form.password.touched" class="error-msg">Field
                    minimal length is 5</small>
            </div>

            <button type="submit" class="btn btn-default">Signup</button>
        </form>
    </div><!--/sign up form-->
</template>

<script>
import {useForm} from "@/use/form";
import {mapState} from "vuex";

export default {
    name: "AuthRegister",
    methods: {
        async handleSubmit() {
            const data = {
                name: this.form.name.value,
                email: this.form.email.value,
                password: this.form.password.value
            }
            await this.$store.dispatch('auth/register', data);
            this.$router.push('products');
        }
    },
    setup() {
        const form = useForm({
            name: {
                value: '',
                validators: [
                    'required',
                    'minLength:3'
                ]
            },
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
                    'minLength:5'
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