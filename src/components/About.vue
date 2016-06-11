<script>
    let markdown = require('markdown').markdown

    module.exports = {
        data: () => {
            return {
                content: null,
                storedContent: null,
                image: null,
                editingState: false
            }
        },
        computed:{
            contentToHtml: function (){
                let markup = this.content || ""
                return markdown.toHTML(markup)
            }
        },
        events:{
            startEditing: ['storeExistingContent','activateTextArea'],
            cancelEdit: ['restorePreviousContent','deactivateTextArea'],
            storeEdit: ['persistUpdatedContent', 'deactivateTextArea']
            // toggleEditingMode: function (editingState){
            //     this.editingState = editingState
            // }
        },
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
            storeExistingContent: function (){
                console.log('content stored')
                this.storedContent = this.content
            },
            restorePreviousContent: function (){
                console.log('restored previous content')
                this.content = this.storedContent
                this.storedContent = null
            },
            persistUpdatedContent: function (){
                console.log('data is about to be persisted ')
                this.$http({
                    url: '/about',
                    method: 'POST',
                    data: { pageContent: this.content}
                }).then(function (response){
                    this.storedContent = null
                    this.$dispatch('showNotification', "success", "Data stored successfully.")
                }).catch(function (response){
                    this.$dispatch('showNotification', 'danger', "There was an error storing this data.")
                })
            },
            activateTextArea: function (){
                this.editingState = true
            },
            deactivateTextArea: function (){
                this.editingState = false
            }
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