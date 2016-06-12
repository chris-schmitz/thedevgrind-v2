<script>
    import Markdownable from '../mixins/Markdownable'
    import Editable from '../mixins/Editable'
    module.exports = {
        data () {
            return {content: '#home'}
        },
        mixins:[Markdownable, Editable]
    }    
</script>

<template>
    <div class="about-component">
        <p v-if="editingState === false" class="text">
            {{{ contentToHtml }}}
        </p>
        <textarea v-if="editingState === true" v-model="content" class="text form-control"></textarea>
    </div>
</template>

<style>
</style>