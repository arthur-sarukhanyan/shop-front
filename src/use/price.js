import {computed, ref, watch} from 'vue';
import {useStore} from "vuex";

export function usePrice(getterKey) {
    const store = useStore();
    let totals = ref({
        inclVat: 0,
        exclVat: 0,
        vat: 0,
    });

    const calculateTotal = (items) => {
        totals.value.inclVat = 0;
        totals.value.vat = 0;
        totals.value.exclVat = 0;
        let percentage = import.meta.env.VITE_VAT;

        for (let item of items) {
            let total = item.price * item.quantity;
            totals.value.inclVat += total;
            let exclVatTmp = total/(1 + percentage/100);
            totals.value.exclVat += exclVatTmp;
            totals.value.vat += total - exclVatTmp;
        }
    }

    watch(computed(() => store.getters[getterKey]), calculateTotal, {deep: true});
    calculateTotal(store.getters[getterKey]);

    return {totals};
}