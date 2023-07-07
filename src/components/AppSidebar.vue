<template>
    <div class="left-sidebar">
        <h2>Category</h2>
        <categories-list :categories="categories.data" :id="null"></categories-list>

        <div class="brands_products"><!--brands_products-->
            <h2>Brands</h2>
            <div class="brands-name">
                <ul class="nav nav-pills nav-stacked">
                    <li><a href="#"> <span class="pull-right">(50)</span>Acne</a></li>
                    <li><a href="#"> <span class="pull-right">(56)</span>Grüne Erde</a></li>
                    <li><a href="#"> <span class="pull-right">(27)</span>Albiro</a></li>
                    <li><a href="#"> <span class="pull-right">(32)</span>Ronhill</a></li>
                    <li><a href="#"> <span class="pull-right">(5)</span>Oddmolly</a></li>
                    <li><a href="#"> <span class="pull-right">(9)</span>Boudestijn</a></li>
                    <li><a href="#"> <span class="pull-right">(4)</span>Rösch creative culture</a></li>
                </ul>
            </div>
        </div><!--/brands_products-->

        <div class="price-range"><!--price-range-->
            <h2>Price Range</h2>
            <div class="well text-center">

            </div>
        </div><!--/price-range-->


    </div>
</template>

<script>
import {mapState} from "vuex";
import CategoriesList from "@/components/Categories/CategoriesList.vue";

export default {
    name: "AppSidebar",
    components: {CategoriesList},
    mounted() {
        if (!this.categories.data.length) {
            this.$store.dispatch('categories/getData');
        }
    },
    computed: {
        ...mapState(['categories']),
    },
}
</script>

<style scoped>

</style>