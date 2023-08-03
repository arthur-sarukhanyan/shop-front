<template>
    <div class="checkout-options">
        <h3>New User</h3>
        <p>Checkout options</p>
        <ul class="nav">
            <li>
                <label><input type="radio" :checked="authType === 'auth'" name="auth-type" @change="$emit('auth-type', 'auth')"> Register Account</label>
            </li>
            <li>
                <label><input type="radio" :checked="authType === 'guest'" name="auth-type" @change="$emit('auth-type', 'guest')"> Guest Checkout</label>
            </li>
            <li>
                <a href=""><i class="fa fa-times"></i>Cancel</a>
            </li>
        </ul>
    </div><!--/checkout-options-->

    <div class="register-req">
        <p>Please use Register And Checkout to easily get access to your order history, or use Checkout as Guest</p>
    </div><!--/register-req-->
</template>

<script>

export default {
    name: 'CheckoutOptions',
    emits: ['auth-type'],
    props: ['authType'],
}
</script>

<style lang="scss" scoped>

</style>