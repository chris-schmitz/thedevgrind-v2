<script>
    export default {
        data: () => {
            return {msg: 'header works'}
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
    <!-- 
        Note I considered rendering this as a vue list, but changed it back
        to hard coded links. There's not really anything gained from rendering
        as a list at the moment.
    -->
    <div class="app-header container flex-container">
        <!-- <img src="http://placekitten.com/150/150" class="col-xs-3"> -->
        <div class="btn-group btn-group-justified nav-button-group">
            <a class="btn btn-primary nav-buttons">About</a>
            <a class="btn btn-primary nav-buttons">Examples</a>
            <a class="btn btn-primary nav-buttons">Faux Blog</a>
            <a class="btn btn-primary nav-buttons">Contact</a>
        </div>
    </div>
</template>
