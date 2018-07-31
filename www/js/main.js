const Vue = require('vue');
const Index = require('../pages/index.vue')

const vue = new Vue({
    el: '#app',
    render: function (createElement) {
        return createElement(Index)
    }
});