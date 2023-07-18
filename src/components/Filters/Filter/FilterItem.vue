<template>
    <li><a href="#" @click="setFilter(filter.id)"> <span class="pull-right"></span>{{filter.name}}</a></li>
</template>

<script>
import {mapState} from "vuex";

export default {
    name: "FilterItem",
    props: ['filter'],
    methods: {
        setFilter(id) {
            let filters = this.products.filters;
            if (!filters.filters) {
                filters.filters = [];
            }

            filters.filters = filters.filters.filter((item) => {
                return item.field !== 'filters>id';
            });

            filters.filters.push({field : 'filters>id', 'value' : id});
            this.$store.commit('products/SET_FILTERS', filters);
            this.$store.dispatch('products/getData');
        }
    },
    computed: {
        ...mapState(['products']),
    },
}
</script>

<style scoped>

</style>