<template>
    <div class="panel-heading">
        <h4 class="panel-title">
            <a data-toggle="collapse" :href="'#category-' + category.id" @click="expand = !expand">
                <span class="badge pull-right" v-if="nestedCategories.length"><i :class="expand ? 'fa fa-minus' : 'fa fa-plus'"></i></span>
                {{category.name}}
            </a>
        </h4>
    </div>
    <div :id="'category-' + category.id" class="panel-collapse collapse" v-if="nestedCategories.length">
        <div class="panel panel-default" :style="{paddingLeft: getLeftPosition()}" v-for="nestedCategory of getCategories()">
            <category-item :category="nestedCategory" :categories="categories" :id="nestedCategory.id"></category-item>
        </div>
    </div>
</template>

<script>

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
        getCategories() {
            return this.categories.filter((category) => {
                return category.parent_id === this.id;
            });
        },
        getLeftPosition() {
            let path = this.category.path;
            if (!path) {
                return 0;
            } else {
                let parts = path.split('|');
                return 5 * parts.length + 'px';
            }
        }
    },
}
</script>

<style scoped>

</style>