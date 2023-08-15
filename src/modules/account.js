import httpClient from "@/services/axios";

export default {
    namespaced: true,
    state: {
        data: [],
        inited: false,
    },
    getters: {
        data: state => state.data,
        inited: state => state.inited,
    },
    actions: {
        async getData({commit }) {
            const data = await httpClient.httpClient.get('auth/profile');
            commit('SET_DATA', await data);
            commit('SET_INITED');
        },
        async updateData({commit}, profileData) {
            const data = await httpClient.httpClient.post('profile', profileData);
            commit('SET_DATA', await data);
            commit('SET_INITED');
        },
    },
    mutations: {
        SET_DATA(state, data) {
            state.data = data;
        },
        SET_INITED(state) {
            state.inited = true;
        },
    }
}