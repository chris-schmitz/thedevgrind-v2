<template>
    <div id="app">
        <app-header></app-header>
        <app-content></app-content>
    </div>
</template>

<script>
import Header from "./components/Header.vue"
import Content from "./components/Content.vue"

export default {
    components: {
        "app-header": Header,
        "app-content": Content
    }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
