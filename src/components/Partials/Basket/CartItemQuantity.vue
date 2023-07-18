<template>
    <div class="cart_quantity_button">
        <a class="cart_quantity_up c-pointer" @click="++inputQty"> + </a>
        <input class="cart_quantity_input" type="text" name="quantity" :disabled="true" :value="inputQty" autocomplete="off" size="2">
        <a class="cart_quantity_down c-pointer" @click="inputQty > 1 && --inputQty"> - </a>
    </div>
</template>

<script>

import {ref, watch} from "vue";

export default {
    name: "CartItemQuantity",
    props: ["quantity"],
    setup(props, context) {
        let quantity = ref(props.quantity);

        watch(quantity, async (newQuantity, oldQuantity) => {
            context.emit("quantityChange", newQuantity)
        });

        return {inputQty: quantity};
    },
}
</script>