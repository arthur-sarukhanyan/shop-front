<template>
  <div class="products-main">
      <div class="products-row" v-for="row in Math.ceil(products.length/3)">
          <div class="product-wrapper" v-for="(product, index) in products" :class="[index < row * 3 && index >= row * 3 - 3 ? '' : 'hidden']">
              <product-item :product="product" v-if="index < row * 3 && index >= row * 3 - 3" @click="navigateTo(product.id)"></product-item>
          </div>
      </div>
  </div>
</template>

<script>
import ProductItem from "./Product/ProductItem.vue";

export default {
    name: "ProductsList",
    components: {ProductItem},
    data: () => {
        return {
            products: [
                {id:1, name: "Prod 1", description: "Prod 1 description"},
                {id:2, name: "Prod 2", description: "Prod 2 description"},
                {id:3, name: "Prod 3", description: "Prod 3 description"},
                {id:4, name: "Prod 4", description: "Prod 4 description"},
                {id:5, name: "Prod 5", description: "Prod 5 description"},
                {id:6, name: "Prod 6", description: "Prod 6 description"},
                {id:7, name: "Prod 7", description: "Prod 7 description"},
                {id:8, name: "Prod 8", description: "Prod 8 description"},
                {id:9, name: "Prod 9", description: "Prod 9 description"},
                {id:9, name: "Prod 10", description: "Prod 10 description"},
            ]
        }
    },
    methods: {
        navigateTo(id) {
            this.$router.push('/product/' + id);
        }
    }
}
</script>

<style scoped>

</style>