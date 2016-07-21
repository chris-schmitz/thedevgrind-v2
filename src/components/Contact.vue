<script>
    import Markdownable from '../mixins/Markdownable'
    import Editable from '../mixins/Editable'

    module.exports = {
        props:['contact'],
        data: () => {
            return {}
        },
        mixins:[Markdownable, Editable],
        ready: function (){
            this.content = this.contact.content
        },
        watch:{
            'content': function (current,previous){
                this.contact.content = current
            }
        }
    }
</script>

<template>
    <div class="about-component">
        <div class="image">
            <img v-bind:src="contact.image">
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
        flex-wrap: wrap;

        .text{
            flex:2;
            padding:10px;
        }

        .image{
            flex:1;
        }
    }
</style>