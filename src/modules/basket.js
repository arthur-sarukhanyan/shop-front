import {useBasket} from "@/use/basket";
import httpClient from "@/services/axios";
import {useStorage} from "@/use/storage";

export default {
    namespaced: true,
    state: {
        data: [],
    },
    getters: {
        data: state => state.data,
    },
    actions: {
        getData({commit}) {
            let basket = useBasket().getData();
            if (basket) {
                commit('SET_DATA', basket);
            }
        },
        addProduct({commit, state}, data) {
            let basket = useBasket(state.data).addItem(data);
            useBasket().storeData(basket);
            commit('SET_DATA', basket);
        },
        removeProduct({commit, state}, id) {
            let basket = useBasket(state.data).removeItem(id);
            useBasket().storeData(basket);
            commit('SET_DATA', basket);
        },
        async getHttpBasket({commit}) {
            let basket = await httpClient.httpClient.get('basket');
            commit('SET_DATA', basket.items);
        },
        async submitBasket({commit, state}, profile = null) {
            let data = {items: state.data};
            if (profile) {
                data.id = profile.id;
            }

            await httpClient.httpClient.post('basket', data);
            useStorage().remove('basket');
            commit('SET_DATA', []);
        }
    },
    mutations: {
        SET_DATA(state, data) {
            state.data = data;
        },
    }
}