<script>
    export default {
        data: () => {
            return {
                navigations: [
                    "About",
                    "Examples",
                    "Faux-Blog",
                    "Contact"
                ]
            }
        }
    }
</script>

<style lang="sass">
    $header-margin: 20px;

    .app-header{
        margin-top: $header-margin;
        margin-bottom: $header-margin;
    }

    .flex-container{
        display:flex;
        flex-direction: row;
        margin-top:20px;
    }

    .nav-button-group{
        flex:1;
        .btn{
            height: 50px;
            font-size:14pt;
        }
    }
</style>

<template>
    <div class="app-header container flex-container">
        <!-- <img src="http://placekitten.com/150/150" class="col-xs-3"> -->
        <div class="btn-group btn-group-justified nav-button-group">
            <a v-for="nav in navigations" class="btn btn-primary nav-buttons">{{ nav }}</a>
        </div>
    </div>
</template>
