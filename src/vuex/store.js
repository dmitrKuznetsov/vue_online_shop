import axios from 'axios';
import { createStore } from 'vuex'

export default createStore({
    state: {
            products: [],
    },
    mutations: {                //they're synch
        SET_PRODUCTS_TO_STATE(state, products) {
            state.products = products;
        }
    },              
    actions: {                  //they're asynch
        GET_PRODUCTS_FROM_API({commit}) {
            return axios("http://localhost:3000/products", {
                method: "GET"
            })
            .then(products => {
                commit("SET_PRODUCTS_TO_STATE", products.data);
                return products.data;
            })
            .catch(error => {
                console.log(error);
                return error;
            })
        }
    },                
    getters: {                  //short way to access state
        PRODUCTS(state) {
            return state.products;
        }
    },                
});