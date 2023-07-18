<template>
    <div class="panel-group category-products" id="accordian">
        <div class="panel panel-default" v-for="category of getCategories()">
            <category-item :category="category" :categories="categories" :id="category.id"></category-item>
        </div>
    </div>
</template>

<script>
import CategoryItem from "@/components/Categories/Category/CategoryItem.vue";

export default {
    name: "CategoriesList",
    components: {CategoryItem},
    props: ['categories', 'id'],
    methods: {
        getCategories() {
            return this.categories.filter((category) => {
                return category.parent_id === this.id
            });
        },
    },
}
</script>

<style scoped>

</style>