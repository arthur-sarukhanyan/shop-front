<template>
    <div class="product-card">
        <h1>{{product.name}}</h1>
        <p>{{product.description}}</p>
    </div>
</template>

<script>
export default {
    name: "ProductItem",
    props: ['product']
}
</script>

<style scoped>

</style>