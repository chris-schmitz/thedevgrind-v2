<script>
    module.exports = {
        data () {
            return {
                msg: 'content works'
            }
        }
    }
</script>
<template>
    <div class="app-content container">
        <div class="well">
            <router-view></router-view>
        </div>
    </div>
</template>

<style>
    .app-content{
/*        .well{
            height: 500px;
        }
*/    }
</style>