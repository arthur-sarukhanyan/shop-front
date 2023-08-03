import httpClient from "@/services/axios";

export default {
    namespaced: true,
    state: {
        data: [],
    },
    getters: {
        data: state => state.data,
    },
    actions: {
        async getData({commit}, id) {
            const data = await httpClient.httpClient.get('products/' + id);
            commit('SET_DATA', await data);
        },
    },
    mutations: {
        SET_DATA(state, data) {
            state.data = data.data;
        },
    }
}