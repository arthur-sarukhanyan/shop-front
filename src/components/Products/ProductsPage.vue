<template>
  <products-list @click="test"></products-list>
</template>

<script>
import ProductsList from "@/components/Products/ProductsList.vue";

export default {
    name: "ProductsPage",
    components: {ProductsList},
    mounted() {
        this.$store.dispatch('products/getData');
    }, methods: {
        test () {
            this.$store.dispatch('products/getData');
        }
    }
}
</script>

<style scoped>

</style>