<template>
    <div class="product-image-wrapper">
        <div class="single-products" @click="navigateTo(product.id)">
            <div class="productinfo text-center">
                <app-image-container :image="product.image" :classes="'img-mid'"></app-image-container>
                <h2>{{ product.price }}</h2>
                <p>{{ product.name }}</p>
                <add-to-cart :product="product"></add-to-cart>
            </div>
            <img src="src/assets/extra/images/home/new.png" class="new" alt=""/>
        </div>
        <div class="choose">
            <ul class="nav nav-pills nav-justified">
                <li><a href="#"><i class="fa fa-plus-square"></i>Add to wishlist</a></li>
                <li><a href="#"><i class="fa fa-plus-square"></i>Add to compare</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
import AppImageContainer from "@/components/Partials/AppImageContainer.vue";
import AddToCart from "@/components/Partials/Basket/AddToCart.vue";

export default {
    name: "ProductItem",
    components: {AddToCart, AppImageContainer},
    props: ['product'],
    methods: {
        navigateTo(id) {
            this.$router.push('/product/' + id);
        }
    },
}
</script>

<style scoped>

</style>