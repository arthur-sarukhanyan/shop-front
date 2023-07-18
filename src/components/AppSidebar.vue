<template>
    <div class="left-sidebar">
        <h2>Category</h2>
        <categories-list :categories="categories.data" :id="null"></categories-list>

        <filters-list :filterGroups="filterGroups.data"></filters-list>
    </div>
</template>

<script>
import {mapState} from "vuex";
import CategoriesList from "@/components/Categories/CategoriesList.vue";
import FiltersList from "@/components/Filters/FiltersList.vue";
import filterGroups from "@/modules/filterGroups";

export default {
    name: "AppSidebar",
    components: {FiltersList, CategoriesList},
    mounted() {
        if (!this.categories.data.length) {
            this.$store.dispatch('categories/getData');
        }

        if (!this.filterGroups.data.length) {
            this.$store.dispatch('filterGroups/getData');
        }
    },
    computed: {
        filterGroups() {
            return filterGroups
        },
        ...mapState(['categories','filterGroups']),
    },
}
</script>

<style scoped>

</style>