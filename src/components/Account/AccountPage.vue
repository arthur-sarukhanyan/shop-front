<template>
    <div>
        <h3>{{account.data.email}}</h3>
    </div>
</template>

<script>
import {mapState} from "vuex";

export default {
    name: "AccountPage",
    mounted() {
        if (!this.account.inited) {
            this.$store.dispatch('account/getData');
        }
    },
    computed: {
        ...mapState(['account'])
    }
}
</script>

<style lang="scss" scoped>

</style>