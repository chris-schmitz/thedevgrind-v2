import Vue from 'vue'
import App from './App.vue'
require('./globalStyles/index.scss')

window.jQuery = require('jquery')
require('bootstrap-sass')

new Vue({
    el: 'body',
    components: { App }
})
