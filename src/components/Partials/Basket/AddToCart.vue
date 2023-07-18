<template>
<!--    <a href="#" @click="addToCart()" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>-->

    <button type="button" class="btn btn-fefault cart" @click="addToCart()">
        <i class="fa fa-shopping-cart"></i>
        Add to cart
    </button>
</template>

<script>

import {mapState} from "vuex";

export default {
    name: "AddToCart",
    props: ['product'],
    methods: {
        addToCart() {
            this.$store.dispatch('localBasket/setData', this.product);
        }
    },
    computed: {
        ...mapState(['localBasket']),
    }
}
</script>

<style scoped>

</style>