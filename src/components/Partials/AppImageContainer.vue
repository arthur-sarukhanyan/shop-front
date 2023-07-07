<template>
    <img :src="getImagePath()" :alt="getImageName()">
</template>

<script>
export default {
    name: "AppImageContainer",
    props: ['image'],
    methods: {
        getImagePath() {
            if (this.image) {
                return import.meta.env.VITE_API_BASE_URL + this.image.path;
            } else {
                return import.meta.env.VITE_API_BASE_URL + import.meta.env.VITE_NO_IMAGE;
            }
        },
        getImageName() {
            if (this.image) {
                return this.image.name;
            } else {
                let noImage = import.meta.env.VITE_NO_IMAGE;
                let parts = noImage.split('/');
                return parts[parts.length - 1];
            }
        }
    }
}
</script>

<style scoped>

</style>