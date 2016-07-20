let jquery = require('jquery')
window.jQuery = jquery

import './globalStyles/index.scss'

import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
Vue.use(VueRouter)
Vue.use(VueResource)

// Custom directives
// consider moving to its own module
Vue.directive('visible', {
    update: function (newValue, oldValue){
        let state = newValue === true ? 'visible' : 'hidden'
        this.el.setAttribute('style', 'visibility:' + state)
    }
})

// custom transitions
// consider moving to its own module

// Import our root vue component
import App from './App.vue'

// Import the vue components that we'll be mapping
// import Home from './components/Home.vue'
import About from './components/About.vue'
// import Examples from './components/Examples.vue'
// import Blog from './components/Blog.vue'
import Contact from './components/Contact.vue'

// Map these vue-router paths to the various components
let router = new VueRouter

router.redirect({
    '/': '/about'
})
router.map({
    // '/':{
    //     name: "Home",
    //     component: Home
    // },
    '/about': {
        name: "About Me",
        component: About
    },
    // '/examples': {
    //     name: "Code Examples",
    //     component: Examples
    // },
    // '/blog': {
    //     name: "Faux Blog",
    //     component: Blog
    // },
    '/contact': {
        name: "Contact Me",
        component: Contact
    }
})

// Attach the router to our root component.
router.start(App, '#app')