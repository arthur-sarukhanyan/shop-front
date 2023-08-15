import httpClient from "@/services/axios";

export default {
    namespaced: true,
    state: {
        data: [],
        filters: {
            filters: [],
        },
    },
    getters: {
        data: state => state.data,
        filters: state => state.filters,
    },
    actions: {
        async getData({commit, state}) {
            const data = await httpClient.httpClient.post('products', state.filters);
            commit('SET_DATA', await data);
        },
    },
    mutations: {
        SET_DATA(state, data) {
            state.data = data;
        },
        SET_FILTERS(state, data) {
            state.filters = data;
        }
    }
}