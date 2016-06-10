<script>
    module.exports = {
        data () {
            return {
            }
        },
        computed: {
            currentComponent: function() {
                return this.$route.name
            }
        }
    }
</script>
<template>
    <div class="app-content container">
        <div class="panel panel-primary">
            <div class="panel-heading">
                <h1>{{ currentComponent }}</h1>
            </div>
            <div class="panel-body">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<style lang="sass">
    @import "../globalStyles/_variables.scss";

    .app-content{
/*        .well{
            height: 500px;
        }
*/    }
    .panel-heading{
        text-align: center;
    }

</style>