<template>
    <div class="table-responsive cart_info">
        <table class="table table-condensed">
            <thead>
              <tr class="cart_menu">
                  <td class="image">Item</td>
                  <td class="description"></td>
                  <td class="price">Price</td>
                  <td class="quantity">Quantity</td>
                  <td class="total">Total</td>
                  <td></td>
              </tr>
            </thead>
            <tbody>
                <cart-item v-for="product of basket.data" :product="product"></cart-item>
                <cart-total v-if="isCheckoutTable()" :products="basket.data"></cart-total>
            </tbody>
        </table>
    </div>
</template>

<script>
import CartItem from "@/components/Cart/CartPreview/CartItem.vue";
import {mapState} from "vuex";
import CartTotal from "@/components/Cart/CartPreview/CartTotal.vue";

export default {
    name: "CartPreviewTable",
    components: {CartTotal, CartItem},
    methods: {
        isCheckoutTable() {
            return this.$route.path === '/checkout';
        }
    },
    computed: {
        ...mapState(['basket'])
    }
}
</script>

<style scoped>

</style>