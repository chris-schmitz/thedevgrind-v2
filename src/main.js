let jquery = require('jquery')
window.jQuery = jquery

import './globalStyles/index.scss'

import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

let router = new VueRouter

// Import our root vue component
import App from './App.vue'

// Import the vue components that we'll be mapping
import Home from './components/Home.vue'
import About from './components/About.vue'
import Examples from './components/Examples.vue'
import Blog from './components/Blog.vue'
import Contact from './components/Contact.vue'

// Map these vue-router paths to the various components
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

// Attach the router to our root component.
router.start(App, '#app')