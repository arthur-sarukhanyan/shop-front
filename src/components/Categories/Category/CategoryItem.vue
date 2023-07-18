<template>
    <div class="panel-heading">
        <h4 class="panel-title">
            <a data-toggle="collapse" :href="'#category-' + category.id" @click="expand = !expand">
                <span class="badge pull-right" v-if="nestedCategories.length"><i :class="expand ? 'fa fa-minus' : 'fa fa-plus'"></i></span>
                <span @click="setCategory(category.id);">{{category.name}}</span>
            </a>
        </h4>
    </div>
    <div :id="'category-' + category.id" class="panel-collapse collapse" v-if="nestedCategories.length">
        <div class="panel panel-default" :style="{paddingLeft: getLeftPosition()}" v-for="nestedCategory of nestedCategories">
            <category-item :category="nestedCategory" :categories="categories" :id="nestedCategory.id"></category-item>
        </div>
    </div>
</template>

<script>
import {mapState} from "vuex";

export default {
    name: "CategoryItem",
    props: ['category', 'categories', 'id'],
    mounted() {
        this.getChildren();
    },
    data: () => {
        return {
            nestedCategories: [],
            expand: false,
        }
    },
    methods: {
        getChildren() {
            this.categories.map((category) => {
                if (category.parent_id === this.category.id) {
                    this.nestedCategories.push(category);
                }
            });
        },
        getLeftPosition() {
            if (!this.nestedCategories.length || !this.nestedCategories[0].path) {
                return 0;
            }

            let path = this.nestedCategories[0].path;
            let parts = path.split('|');
            return 5 * parts.length + 'px';
        },
        setCategory(id) {
            let filters = this.products.filters;
            if (!filters.filters) {
                filters.filters = [];
            }

            filters.filters = filters.filters.filter((item) => {
                return item.field !== 'allCategories>id';
            });

            filters.filters.push({field : 'allCategories>id', 'value' : id});
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