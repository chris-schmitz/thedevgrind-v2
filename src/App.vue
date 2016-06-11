<template>
    <div class="container">
        <app-header></app-header>
        <app-notification></app-notification>
        <app-content></app-content>
        <app-controls v-if="admin === true"></app-controls>
    </div>
</template>

<script>
import Header from "./components/Header.vue"
import Content from "./components/Content.vue"
import Controls from "./components/Controls.vue"
import Notification from "./components/Notification.vue"

export default {
    data: () => {
        return {
            // note that hiding the controls this way does not guarantee that someone will not 
            // have access to the controls, it just hides them for convenience sake. The enforcement
            // of whether or not someone has access to update the markdown on this page needs to be handled
            // on the server side by validating a password or authentication token.
            admin: true
        }
    },
    components: {
        "app-header": Header,
        "app-notification": Notification,
        "app-content": Content,
        "app-controls": Controls
    },
    events:{
        cancelEdit: function (...payload){
            this.$broadcast('cancelEdit', ...payload)
        },
        startEditing: function (...payload){
            this.$broadcast('startEditing', ...payload)
        },
        storeEdit: function (...payload){
            this.$broadcast('storeEdit', ...payload)
        },
        // toggleEditingMode: function (editingState){
        //     this.$broadcast('toggleEditingMode', editingState)
        // },
        showNotification: function (...payload){
            this.$broadcast('showNotification', ...payload)
        }
    }
}
</script>

<style lang="sass">
    @import "./globalStyles/_variables.scss";

    body {
      font-family: Helvetica, sans-serif;
    }
</style>
