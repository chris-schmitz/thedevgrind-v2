<template>
    <div>
        <app-header></app-header>
        <h2 class="heading">{{ currentComponent }}</h2>
        <app-content></app-content>
    </div>
</template>

<script>
import Header from "./components/Header.vue"
import Content from "./components/Content.vue"

export default {
    data: () => {
        return {
            currentComponent: 'Pull the name of the current component'
        }
    },
    components: {
        "app-header": Header,
        "app-content": Content
    }
}
</script>

<style lang="sass">
    @import "./globalStyles/_variables.scss";

    body {
      font-family: Helvetica, sans-serif;
    }
    .heading{
        text-align: center;
        color:$color2;
    }
</style>
