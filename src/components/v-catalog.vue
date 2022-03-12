<template>
    <div class="v-catalog">
        <h1>Catalog</h1>
        <div class="v-catalog__list">
            <v-catalog-item
                v-for="product in products"
                :key="product.article"
                :product_data="product"
                @sendArticle="showChildArticletoConsole"
            />
        </div>
        
    </div>
</template>

<script>
import vCatalogItem from './v-catalog-item.vue'
import products from './test'

export default {
    name: "v-catalog",
    components: {
        vCatalogItem
    },
    props: {},
    data() {
        return {
            products
        }
    },
    computed: {},
    methods: {
        showChildArticletoConsole(data) {
            console.log(data);
        }
    }
}
</script>

<style lang="scss">
    .v-catalog {
        &__list {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
        }
    }
</style>