<template>
    <section>
        <div class="container">
            <div class="row">

                <div class="col-sm-3">
                  <app-sidebar></app-sidebar>
                </div>

                <div class="col-sm-9 padding-right">
                    <div class="features_items"><!--features_items-->
                        <h2 class="title text-center">Features Items</h2>

                        <div class="col-sm-4" v-for="product of products.data">
                            <product-item :product="product" @click="navigateTo(product.id)"></product-item>
                        </div>

                    </div><!--features_items-->
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import {mapState} from "vuex";
import ProductItem from "@/components/Products/Product/ProductItem.vue";
import AppSidebar from "@/components/AppSidebar.vue";

export default {
    name: "ProductsPage",
    components: {AppSidebar, ProductItem},
    mounted() {
        this.$store.dispatch('products/getData');
    },
    methods: {
        navigateTo(id) {
            this.$router.push('/product/' + id);
        }
    },
    computed: {
        ...mapState(['products']),
    },
}
</script>

<style scoped>

</style>