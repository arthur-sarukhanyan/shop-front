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
        async getData({commit }) {
            const data = await httpClient.httpClient.get('countries');
            commit('SET_DATA', await data);
        },
    },
    mutations: {
        SET_DATA(state, data) {
            state.data = data.data;
        },
    }
}