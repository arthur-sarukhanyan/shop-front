<template>
    <p class="cart_total_price">${{totalPrice()}}</p>
</template>

<script>

export default {
    name: "CartItemTotal",
    props: ["product"],
    methods: {
        totalPrice() {
            return this.product.quantity * this.product.price;
        }
    }
}
</script>