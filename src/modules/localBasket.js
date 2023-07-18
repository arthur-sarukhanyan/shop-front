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
        getData({commit }) {
            let basket = localStorage.getItem('basket');
            if (basket) {
                basket = JSON.parse(basket);
            } else {
                basket = [];
            }
            commit('SET_DATA', basket);
        },
        setData({commit}, data) {
            let basket = localStorage.getItem('basket');
            if (!basket) {
                basket = [];
            } else {
                basket = JSON.parse(basket);
            }

            let inBasket = false;

            basket.map(function (product) {

                if (product.id === data.id) {
                    inBasket = true;
                    product.quantity = data.quantity ? data.quantity : ++product.quantity;
                }
            });

            let image = null;

            if (data.image) {
                image = {path: data.image.path};
            }

            if (!inBasket) {
                basket.push({
                    id: data.id,
                    name: data.name,
                    price: data.price,
                    quantity: 1,
                    image: image,
                })
            }

            localStorage.setItem('basket', JSON.stringify(basket));
            commit('SET_DATA', basket);
        }
    },
    mutations: {
        SET_DATA(state, data) {
            state.data = data;
        },
    }
}