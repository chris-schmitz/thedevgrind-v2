import Vue from 'vue'
import App from './App.vue'

let jquery = require('jquery')
window.jQuery = jquery
require('bootstrap-sass')

import './globalStyles/index.scss'

new Vue({
    el: 'body',
    components: { App }
})
