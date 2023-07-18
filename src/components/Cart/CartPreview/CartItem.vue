<template>
    <tr>
        <td class="cart_product">
            <app-image-container :image="product.image" :classes="'img-sm'"></app-image-container>
        </td>
        <td class="cart_description">
            <h4><a href="">{{product.name}}</a></h4>
            <p>Web ID: 1089772</p>
        </td>
        <td class="cart_price">
            <p>${{product.price}}</p>
        </td>
        <td class="cart_quantity">
            <cart-item-quantity :quantity="product.quantity" @quantityChange="updateQuantity"></cart-item-quantity>
        </td>
        <td class="cart_total">
            <cart-item-total :product="product"></cart-item-total>
        </td>
        <td class="cart_delete">
            <a class="cart_quantity_delete c-pointer"><i class="fa fa-times"></i></a>
        </td>
    </tr>
</template>

<script>
import {mapState} from "vuex";
import AppImageContainer from "@/components/Partials/AppImageContainer.vue";
import CartItemQuantity from "@/components/Partials/Basket/CartItemQuantity.vue";
import CartItemTotal from "@/components/Partials/Basket/CartItemTotal.vue";

export default {
    name: "CartItem",
    components: {CartItemTotal, CartItemQuantity, AppImageContainer},
    props: ['product'],
    methods: {
        updateQuantity(quantity) {
            this.product.quantity = quantity;
            this.$store.dispatch('localBasket/setData', this.product);
        }
    },
    computed: {
        ...mapState(['localBasket'])
    }
}
</script>

<style scoped>

</style>