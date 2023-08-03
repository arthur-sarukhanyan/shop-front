import httpClient from "@/services/axios";
import {useStorage} from "@/use/storage";

export default {
    namespaced: true,
    state: {
        accessToken: null,
        isLoggedIn: false,
    },
    getters: {
        data: state => state.data,
        getLoggedIn: (state) => {
            return state.isLoggedIn
        },
    },
    actions: {
        async login({commit}, credentials) {
            useStorage().remove('token');
            const data = await httpClient.httpClient.post('auth/login', credentials);
            if (data.access_token) {
                commit('SET_TOKEN', data.access_token);
                commit('SET_LOGGED_IN', true);
            }
        },
        async register({commit}, credentials) {
            useStorage().remove('token');
            const data = await httpClient.httpClient.post('auth/register', credentials);
            if (data.access_token) {
                commit('SET_TOKEN', data.access_token);
                commit('SET_LOGGED_IN', true);
            }
        },
        async initToken({commit, dispatch}) {
            let token = useStorage().get('token');
            if (token) {
                try {
                    commit('SET_TOKEN', token);
                    await httpClient.httpClient.head('auth/profile');
                    commit('SET_LOGGED_IN', true);
                } catch (e) {
                    useStorage().remove('token');
                    commit('SET_TOKEN', null);
                }
            }
        },
    },
    mutations: {
        SET_TOKEN(state, access_token) {
            state.accessToken = access_token;
            useStorage().set('token', access_token);
        },
        SET_LOGGED_IN(state, isLoggedIn) {
            state.isLoggedIn = isLoggedIn;
        },
    }
}