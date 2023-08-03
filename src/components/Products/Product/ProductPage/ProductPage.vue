<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-sm-3">
                  <app-sidebar></app-sidebar>
                </div>

                <div class="col-sm-9 padding-right">
                    <div class="product-details"><!--product-details-->
                        <div class="col-sm-5">
                            <div class="view-product">
                                <app-image-container :image="product.data.image" :classes="'img-big'"></app-image-container>
                                <h3>ZOOM</h3>
                            </div>
                            <div id="similar-product" class="carousel slide" data-ride="carousel">

                                <!-- Wrapper for slides -->
                                <div class="carousel-inner">
                                    <div class="item active">
                                        <a href=""><img src="src/assets/extra/images/product-details/similar1.jpg" alt=""></a>
                                        <a href=""><img src="src/assets/extra/images/product-details/similar2.jpg" alt=""></a>
                                        <a href=""><img src="src/assets/extra/images/product-details/similar3.jpg" alt=""></a>
                                    </div>
                                    <div class="item">
                                        <a href=""><img src="src/assets/extra/images/product-details/similar1.jpg" alt=""></a>
                                        <a href=""><img src="src/assets/extra/images/product-details/similar2.jpg" alt=""></a>
                                        <a href=""><img src="src/assets/extra/images/product-details/similar3.jpg" alt=""></a>
                                    </div>
                                    <div class="item">
                                        <a href=""><img src="src/assets/extra/images/product-details/similar1.jpg" alt=""></a>
                                        <a href=""><img src="src/assets/extra/images/product-details/similar2.jpg" alt=""></a>
                                        <a href=""><img src="src/assets/extra/images/product-details/similar3.jpg" alt=""></a>
                                    </div>

                                </div>

                                <!-- Controls -->
                                <a class="left item-control" href="#similar-product" data-slide="prev">
                                    <i class="fa fa-angle-left"></i>
                                </a>
                                <a class="right item-control" href="#similar-product" data-slide="next">
                                    <i class="fa fa-angle-right"></i>
                                </a>
                            </div>

                        </div>
                        <div class="col-sm-7">
                            <div class="product-information"><!--/product-information-->
                                <img src="src/assets/extra/images/product-details/new.jpg" class="newarrival" alt="" />
                                <h2>{{product.data.name}}</h2>
                                <p>Web ID: 1089772</p>
                                <img src="src/assets/extra/images/product-details/rating.png" alt="" />
                                <span>
									<span>US ${{product.data.price}}</span>
<!--									<label>Quantity:</label>-->
<!--									<input type="text" value="3" />-->
                                    <add-to-cart :product="product.data"></add-to-cart>
								</span>
                                <p><b>Availability:</b> In Stock</p>
                                <p><b>Condition:</b> New</p>
                                <p><b>Brand:</b> E-SHOPPER</p>
                                <a href=""><img src="src/assets/extra/images/product-details/share.png" class="share img-responsive"  alt="" /></a>
                            </div><!--/product-information-->
                        </div>
                    </div><!--/product-details-->


                </div>
            </div>
        </div>
    </section>
</template>

<script>
import {mapState} from "vuex";
import AppSidebar from "@/components/AppSidebar.vue";
import AppImageContainer from "@/components/Partials/AppImageContainer.vue";
import AddToCart from "@/components/Partials/Basket/AddToCart.vue";

export default {
    name: "ProductPage",
    components: {AddToCart, AppImageContainer, AppSidebar},
    mounted() {
        let id = this.$route.params.id;
        this.$store.dispatch('product/getData', id);
    },
    computed: {
        ...mapState(['product']),
    },
}
</script>

<style scoped>

</style>