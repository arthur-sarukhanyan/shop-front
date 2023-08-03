<template>
    <section id="cart_items">
        <div class="container">
            <div class="breadcrumbs">
                <ol class="breadcrumb">
                    <li><a href="#">Home</a></li>
                    <li class="active">Check out</li>
                </ol>
            </div><!--/breadcrums-->

            <div class="step-one" v-if="!isLoggedIn()">
                <h2 class="heading">Update personal information</h2>
                <checkout-options :authType="authType" @auth-type="setAuthType"></checkout-options>
            </div>

            <customer-from :isLoggedIn="isLoggedIn()" :authType="authType" @profile-update="updateProfile" v-if="!isShipDataFilled() || !isLoggedIn()"></customer-from>

            <div class="review-payment">
                <h2>Review & Payment</h2>
            </div>

            <cart-preview-table></cart-preview-table>
            <payment-options></payment-options>

            <button type="submit" v-if="isShipDataFilled()" @click="processCheckout" class="btn">Submit</button>
        </div>
    </section> <!--/#cart_items-->
</template>

<script>
import CartPreviewTable from "@/components/Cart/CartPreview/CartPreviewTable.vue";
import CheckoutOptions from "@/components/Checkout/CheckoutOptions.vue";
import CustomerFrom from "@/components/Checkout/Customer/CustomerForm.vue";
import PaymentOptions from "@/components/Checkout/Payment/PaymentOptions.vue";
import {mapState} from "vuex";

export default {
    name: "CheckoutPage",
    components: {PaymentOptions, CustomerFrom, CheckoutOptions, CartPreviewTable},
    data() {
        return {
            authType: null,
            profile: {},
        }
    },
    mounted() {
        if (this.isLoggedIn() && !this.isShipDataFilled()) {
            this.authType = 'auth';
        } else {
            this.authType = 'guest';
        }
    },
    methods: {
        isLoggedIn() {
            return this.auth.isLoggedIn;
        },
        isShipDataFilled() {
            return (this.account.inited && this.account.data.details) || Object.keys(this.profile).length > 0;
        },
        setAuthType(type) {
            this.authType = type;
        },
        processCheckout() {
            console.log(this.profile);
        },
        updateProfile(data) {
            this.profile = data;
        }
    },
    computed: {
        ...mapState(['auth', 'account'])
    }
}
</script>

<style scoped>

</style>