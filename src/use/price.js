import {ref} from 'vue';

export function usePrice() {
    let totals = ref({
        inclVat: 0,
        exclVat: 0,
        vat: 0,
    });

    const calculateTotal = (products) => {
        totals.value.inclVat = 0;
        totals.value.vat = 0;
        totals.value.exclVat = 0;
        let percentage = import.meta.env.VITE_VAT;

        if (!products) {
            return;
        }

        for (let item of products) {
            let total = item.price * item.quantity;
            totals.value.inclVat += total;
            let exclVatTmp = total/(1 + percentage/100);
            totals.value.exclVat += exclVatTmp;
            totals.value.vat += total - exclVatTmp;
        }
    }

    return {totals, calculateTotal};
}