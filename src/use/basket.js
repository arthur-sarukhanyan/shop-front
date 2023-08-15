import accountStore from "@/modules/account";
import authStore from "@/modules/auth";
import basketStore from "@/modules/basket";
import {useStorage} from "@/use/storage";
import {useStore} from "vuex";
import httpClient from "@/services/axios";
import {computed} from "vue";

export function useBasket(basket = []) {
    const storeData = (data) => {
        if (authStore.state.isLoggedIn) {
            httpClient.httpClient.put('basket', {items: data});
        } else {
            useStorage().set('basket', data);
        }
    }

    const addItem = (data) => {
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

        return basket;
    }

    const removeItem = (id) => {
        basket = basket.filter((item) => {
            return item.id !== id;
        });

        return basket;
    }

    return {addItem, storeData, removeItem};
}