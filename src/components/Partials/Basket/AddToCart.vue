<template>
    <button type="button" class="btn btn-fefault cart" @click.stop="addToCart()">
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
            this.$store.dispatch('basket/addProduct', this.product);
        }
    },
    computed: {
        ...mapState(['basket']),
    }
}
</script>

<style scoped>

</style>