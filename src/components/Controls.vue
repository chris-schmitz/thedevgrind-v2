<script>
    module.exports = {
        data: () => {
            return {
                editing: false
            }
        },
        methods:{
            toggleEditingMode: function (){
                this.editing = !this.editing
                this.$dispatch('toggleEditingMode', this.editing)
            }
        }
    }    
</script>

<template>
    <div class="controls-container">
        <div class="well">
            <button type="button" class="btn btn-danger">Cancel</button>
            <button v-if="editing === false" @click="toggleEditingMode" type="button" class="btn btn-primary pull-right">Edit</button>
            <button v-if="editing === true" @click="toggleEditingMode" type="button" class="btn btn-success pull-right">Update</button>
        </div>
    </div>
</template>

<style lang="">
</style>