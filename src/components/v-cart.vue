<template>
    <div class="v-cart">
        <router-link :to="{ name: 'catalog'}">
            <div class="v-cart__link_to_catalog">Back to Catalog</div>
        </router-link>

        <h1>Cart</h1>
        <p v-if="!CART.length">There are no products in cart...</p>
        <v-cart-item
            v-for="(item, index) in CART"
            :key="item.article"
            :cart_item_data="item"
            @deleteFromCart="deleteFromCart(index)"
        />
    </div>
</template>


<script>
import vCartItem from './v-cart-item.vue'
import {mapActions, mapGetters} from "vuex"

export default {
    name: "v-cart",
    components: {
        vCartItem,
    },
    props: {},
    data() {
        return {}
    },
    computed: {
        ...mapGetters([
            "CART"
        ]),
    },
    methods: {
        ...mapActions([
            "DELETE_FROM_CART"
        ]),
        deleteFromCart(index) {
            this.DELETE_FROM_CART(index);
        }
    },
}
</script>


<style lang="scss">
    .v-cart {
        &__link_to_catalog {
            position: absolute;
            top: 10px;
            right: 10px;
            padding: $padding*2;
            border: solid 1px #aeaeae;
        }
    }
</style>