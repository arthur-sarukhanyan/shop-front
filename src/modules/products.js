export default {
    namespaced: true,
    state: {
        data: {},
    },
    getters: {
        data: state => state.data,
    },
    actions: {
        async getData({commit }) {
            console.log(this.$axios);
            const data = await this.$axios.get('products');
            commit('SET_DATA', await data.json());
        },
    },
    mutations: {
        SET_DATA(state, data) {
            state.data = data;
        },
    }
}