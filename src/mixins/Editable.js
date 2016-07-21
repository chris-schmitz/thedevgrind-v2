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
            this.storedContent = this.content
        },
        restorePreviousContent: function (){
            this.content = this.storedContent
            this.storedContent = null
        },
        persistUpdatedContent: function (apiEndpoint){
            this.$http({
                url: `/${apiEndpoint}`,
                method: 'PUT',
                data: { content: this.content}
            }).then(function (response){
                this.storedContent = null
                this.$dispatch('showNotification', "success", response.data.message)
            }).catch(function (response){
                this.$dispatch('showNotification', 'danger', response.data.message)
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