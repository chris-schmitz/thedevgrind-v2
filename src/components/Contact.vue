<script>
    import Markdownable from '../mixins/Markdownable'
    import Editable from '../mixins/Editable'

    module.exports = {
        data: () => {
            return {
                image: null
            }
        },
        mixins:[Markdownable, Editable],
        ready: function () {
            let me = this

            this.$http({
                url: '/contact'
            }).then(response => {
                me.content = response.data.text,
                me.image = response.data.image
            }).catch(response => {
                // come up with a standard way of display an error,
                // either dispatch up to parent or handle through shared state
            })
            // query the api with promise
            // then set the text and image
        }
    }    
</script>

<template>
    <div class="about-component">
        <div class="image">
            <img v-bind:src="image">
        </div>
        <p v-if="editingState === false" class="text">
            {{{ contentToHtml }}}
        </p>
        <textarea v-if="editingState === true" v-model="content" class="text form-control"></textarea>
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
        }

        .image{
            flex:1;
        }
    }
</style>