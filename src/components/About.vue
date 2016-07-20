<script>
    import Markdownable from '../mixins/Markdownable'
    import Editable from '../mixins/Editable'
    import state from '../state/state.js'

    module.exports = {
        props:['about'],
        data: () => {
            return {}
        },
        mixins:[Markdownable, Editable],
        methods:{
        },
        ready: function (){
            this.content = this.about.content
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
            <img v-bind:src="about.image">
        </div>
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
            margin: 5px;
        }

        .image{
            flex:1;
            margin: 5px;
        }
    }
</style>