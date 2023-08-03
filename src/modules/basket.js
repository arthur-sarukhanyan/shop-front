import {useBasket} from "@/use/basket";
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
            commit('SET_DATA', basket.data.items);
        },
        updateHttpBasket(data) {
            console.log(data);
            httpClient.httpClient.post('basket', data);
        }
    },
    mutations: {
        SET_DATA(state, data) {
            state.data = data;
        },
    }
}