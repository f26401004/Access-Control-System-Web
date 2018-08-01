import Vue from 'vue'
import Vuex from 'vuex'
import Store from '../js/store.js'
import App from '../app.vue'


Vue.use(Vuex)

const vm = new Vue({
    el: '#app',
    store: Store,
    computed: {
        status: () => this.store.getters.getStatusDescription()
    },
    render: (createElement) => createElement(App)
});
