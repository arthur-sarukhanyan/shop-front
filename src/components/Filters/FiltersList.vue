<template>
    <div class="brands_products" v-for="filterGroup of filterGroups"><!--brands_products-->
        <div v-if="filterGroup.filters.length">
            <h2>{{filterGroup.name}}</h2>
            <div class="brands-name">
                <ul class="nav nav-pills nav-stacked">
                    <filter-item :filter="filter" v-for="filter of filterGroup.filters"></filter-item>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import FilterItem from "@/components/Filters/Filter/FilterItem.vue";

export default {
    name: "FiltersList",
    components: {FilterItem},
    props: ['filterGroups'],
}
</script>

<style scoped>

</style>