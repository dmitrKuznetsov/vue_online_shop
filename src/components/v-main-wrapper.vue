<template>
    <div class="v-main-wrapper">
        <keep-alive>  
            <router-view></router-view>
        </keep-alive>
        
    </div>
</template>

<script>
// !! <keep-alive> - позволяет сохранять на странице данные не из стора

import { mapGetters } from 'vuex'

export default {
    name: "v-main-wrapper",
    components: {},
    pages: {},
    data() {
        return {}
    },
    computed: {
        ...mapGetters([
            // "CART"
        ])
    },
    methods: {},
    watch: {},
    mounted() {},
}
</script>


<style>
    .v-main-wrapper {
        max-width: 900px;
        margin: 0 auto;
    }
</style>
