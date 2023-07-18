<template>
    <tr>
        <td colspan="4">&nbsp;</td>
        <td colspan="2">
            <table class="table table-condensed total-result">
                <tr>
                    <td>Cart Sub Total (Excl. VAT)</td>
                    <td>$ {{getExclVat().toFixed(2)}}</td>
                </tr>
                <tr>
                    <td>Tax</td>
                    <td>$ {{getVat().toFixed(2)}}</td>
                </tr>
                <tr class="shipping-cost">
                    <td>Shipping Cost</td>
                    <td>Free</td>
                </tr>
                <tr>
                    <td>Total (Incl. VAT)</td>
                    <td><span>$ {{getInclVat().toFixed(2)}}</span></td>
                </tr>
            </table>
        </td>
    </tr>
</template>

<script>
  import {mapState} from "vuex";

  export default {
      name: "CartTotal",
      methods: {
          calculateTotal() {
              let totals = {
                  inclVat: 0,
                  exclVat: 0,
                  vat: 0,
              }

              let percentage = import.meta.env.VITE_VAT;

              for (let product of this.localBasket.data) {
                  let total = product.price * product.quantity;
                  totals.inclVat += total;
                  let exclVatTmp = total/(1 + percentage/100);
                  totals.exclVat += exclVatTmp;
                  totals.vat += total - exclVatTmp;
              }

              return totals;
          },
          getVat() {
              return this.calculateTotal().vat;
          },
          getInclVat() {
              return this.calculateTotal().inclVat;
          },
          getExclVat() {
              return this.calculateTotal().exclVat;
          },
      },
      computed: {
          ...mapState(['localBasket'])
      }
  }
</script>