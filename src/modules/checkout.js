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
        async updateData({commit}, profileData) {
            const data = await httpClient.httpClient.post('profile', profileData);
            commit('SET_DATA', await data);
            return data;
        },
    },
    mutations: {
        SET_DATA(state, data) {
            state.data = data.data;
        },
    }
}