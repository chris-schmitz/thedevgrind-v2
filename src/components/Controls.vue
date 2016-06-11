<script>
    module.exports = {
        data: () => {
            return {
                editing: false
            }
        },
        methods:{
            cancelEdit: function (){
                this.editing = false
                this.$dispatch('cancelEdit')
            },
            startEditing: function (){
                this.editing = true
                this.$dispatch('startEditing')
            },
            storeEdit: function (){
                this.editing = false
                this.$dispatch('storeEdit')
            }
        }
    }    
</script>

<template>
    <div class="controls-container">
        <div class="well clearfix">
            <button v-if="editing === true" @click="cancelEdit" type="button" class="btn btn-danger">Cancel</button>
            <button v-if="editing === false" @click="startEditing" type="button" class="btn btn-primary pull-right">Edit</button>
            <button v-if="editing === true" @click="storeEdit" type="button" class="btn btn-success pull-right">Update</button>
        </div>
    </div>
</template>

<style lang="">
</style>