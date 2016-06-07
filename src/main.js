let jquery = require('jquery')
window.jQuery = jquery

import './globalStyles/index.scss'

import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

let router = new VueRouter

// import App from './App.vue'
let App = Vue.extend({})
import About from './components/About.vue'
import Examples from './components/Examples.vue'
import Blog from './components/Blog.vue'
import Contact from './components/Contact.vue'

let Home = Vue.extend({
    template: '<h1>Home</h1>'
})

router.map({
    '/':{
        component: Home
    },
    '/about': {
        component: About
    },
    '/examples': {
        component: Examples
    },
    '/blog': {
        component: Blog
    },
    '/contact': {
        component: Contact
    }
})

router.start(App, '#app')