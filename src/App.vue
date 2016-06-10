<template>
    <div>
        <app-header></app-header>
        <app-content></app-content>
    </div>
</template>

<script>
import Header from "./components/Header.vue"
import Content from "./components/Content.vue"

export default {
    data: () => {
        return {
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
</style>
