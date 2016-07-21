<script>
    module.exports = {
        data: () => {
            return {
                show: false,
                message: null,
                type: null
            }
        },
        computed: {
            alertType: function (){
                let alertName = {}
                alertName["alert-" + this.type] = true
                return alertName
            }
        },
        events:{
            showNotification: 'show'
        },
        methods:{
            show: function (type, message){
                this.type = type
                this.message = message
                this.show = true
            },
            close: function (){
                this.show = false
            }
        }
    }
</script>

<template>
    <div class="notification-container">
        <div v-show="show" transition="flip" class="animated alert" v-bind:class="alertType">
            <button type="button" class="close" @click="close">&times;</button>
            <span class="alert-message">{{ message }}</span>
        </div>
    </div>
</template>

<style lang="sass">
    .notification-container{

        .alert-message{
            font-weight: bold;
        }
    }
</style>