<template>
    <section id="form"><!--form-->
        <div class="container">
            <div class="row">
                <div class="col-sm-4 col-sm-offset-1">
                  <auth-login></auth-login>
                </div>
                <div class="col-sm-1">
                    <h2 class="or">OR</h2>
                </div>
                <div class="col-sm-4">
                    <auth-register></auth-register>
                </div>
            </div>
        </div>
    </section><!--/form-->
</template>

<script>
import AuthLogin from "@/components/Auth/AuthLogin.vue";
import AuthRegister from "@/components/Auth/AuthRegister.vue";

export default {
    name: "AuthPage",
    components: {AuthLogin, AuthRegister}
}
</script>

<style scoped>

</style>