<script>
    import Markdownable from '../mixins/Markdownable'
    import Editable from '../mixins/Editable'

    module.exports = {
        data: () => {
            return {
                image: null,
            }
        },
        mixins:[Markdownable, Editable],
        ready: function () {
            let me = this

            this.$http({
                url: '/about'
            }).then(response => {
                me.content = response.data.text,
                me.image = response.data.image
            }).catch(response => {
                // come up with a standard way of display an error,
                // either dispatch up to parent or handle through shared state
            })
        },
        methods:{
        }
    }    
</script>

<template>
    <div class="about-component">
        <p v-if="editingState === false" class="text">
            {{{ contentToHtml }}}
        </p>
        <textarea v-if="editingState === true" v-model="content" class="text form-control"></textarea>
        <div class="image">
            <img v-bind:src="image">
        </div>
    </div>
</template>

<style lang="sass">
    @import '../globalStyles/_variables.scss';

    .about-component{
        display:flex;
        flex-direction: row;

        .text{
            flex:2;
            padding:10px;
            margin: 5px;
        }

        .image{
            flex:1;
            margin: 5px;
        }
    }
</style>