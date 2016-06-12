// Note that to use this mixin, you need a setup in your component's template
// similar to this:
// <p v-if="editingState === false" class="text">
//     {{{ contentToHtml }}}
// </p>
// <textarea v-if="editingState === true" v-model="content" class="text form-control"></textarea>


let Editable = {
    data: () => {
        return {
            storedContent: null,
            editingState: false
        }
    },
    events:{
        startEditing: ['storeExistingContent','activateTextArea'],
        cancelEdit: ['restorePreviousContent','deactivateTextArea'],
        storeEdit: ['persistUpdatedContent', 'deactivateTextArea']
    },
    methods: {
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

module.exports = Editable