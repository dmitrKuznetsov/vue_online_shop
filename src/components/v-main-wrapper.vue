<template>
    <div class="v-main-wrapper">
        <p>{{title}}</p>
        <v-catalog />
        <v-cart />
    </div>
</template>

<script>
import vCatalog from './v-catalog.vue'
import vCart from './v-cart.vue'

export default {
    name: "v-main-wrapper",
    components: {
        vCatalog,
        vCart
    },
    pages: {},
    data() {
        return {
            title: "Main wrapper"
        }
    },
    computed: {},
    methods: {},
    watch: {},
    mounted() {
        console.log("Hello i am alive!")
    },
}
</script>


<style>
    .v-main-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        max-width: 900px;
        margin: 0 auto;
    }
</style>
