<script>
    module.exports = {
        props: ['pages'],
        data () {
            return {
            }
        },
        computed: {
            currentComponent: function() {
                if(this.$route.name === 'about'){
                    return "Checkout My Readme"
                } else if (this.$route.name === 'contact'){
                    return "Get In Contact"
                }

            }
        }
    }
</script>
<template>
    <div class="app-content">
        <div class="panel panel-primary">
            <div class="panel-heading">
                <h1>{{ currentComponent }}</h1>
            </div>
            <div class="panel-body">
                <router-view
                    :about="pages.about"
                    :contact="pages.contact"
                ></router-view>
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