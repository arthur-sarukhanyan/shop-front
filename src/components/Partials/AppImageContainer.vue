<template>
    <img :src="getImagePath()" :alt="getImageName()" :class="classes">
</template>

<script>
export default {
    name: "AppImageContainer",
    props: ['image', 'classes'],
    methods: {
        getImagePath() {
            let baseUrl = import.meta.env.VITE_API_BASE_URL;
            baseUrl.slice(0, -1);

            if (this.image) {
                return baseUrl + this.image.path;
            } else {
                return baseUrl + import.meta.env.VITE_NO_IMAGE;
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