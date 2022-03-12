<template>
    <div class="v-catalog">
        <h1>Catalog</h1>
        <v-catalog-item></v-catalog-item>
    </div>
</template>
<script>
import vCatalogItem from './v-catalog-item.vue'

export default {
    name: "v-catalog",
    components: {
        vCatalogItem
    },
    props: {},
    data() {
        return {}
    },
    computed: {}
}
</script>
<style>
    
</style>