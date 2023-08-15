<template>
    <tr>
        <td colspan="4">&nbsp;</td>
        <td colspan="2">
            <table class="table table-condensed total-result">
                <tr>
                    <td>Cart Sub Total (Excl. VAT)</td>
                    <td>$ {{totals.exclVat.toFixed(2)}}</td>
                </tr>
                <tr>
                    <td>Tax</td>
                    <td>$ {{totals.vat.toFixed(2)}}</td>
                </tr>
                <tr class="shipping-cost">
                    <td>Shipping Cost</td>
                    <td>Free</td>
                </tr>
                <tr>
                    <td>Total (Incl. VAT)</td>
                    <td><span>$ {{totals.inclVat.toFixed(2)}}</span></td>
                </tr>
            </table>
        </td>
    </tr>
</template>

<script>
  import {mapState} from "vuex";
  import {usePrice} from "@/use/price";
  import {computed, watch} from "vue";

  export default {
      name: "CartTotal",
      props: ['products'],
      setup(props) {
          let price = usePrice();

          watch(props, (updatedProps) => {
              price.calculateTotal(updatedProps.products);
          });

          price.calculateTotal(props.products);

          return {totals: price.totals};
      },
      computed: {
          ...mapState(['basket'])
      }
  }
</script>