<script>
    export default {
        data: () => {
            return {}
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

    .v-link-active{
        background-color: red;
        color: white;
    }
</style>

<template>
    <!--
        Note I considered rendering this as a vue list, but changed it back
        to hard coded links. There's not really anything gained from rendering
        as a list at the moment.
    -->
    <div class="app-header flex-container">
        <!-- <img src="http://placekitten.com/150/150" class="col-xs-3"> -->
        <div class="btn-group btn-group-justified nav-button-group">
            <!-- <a v-link="{path: '/', exact: true, activeClass: 'active'}" class="btn btn-primary nav-buttons">LOGO</a> -->
            <a v-link="{path: '/about', activeClass: 'active'}" class="btn btn-primary nav-buttons">About</a>
<!--             <a v-link="{path: '/examples', activeClass: 'active'}" class="btn btn-primary nav-buttons">Examples</a>
            <a v-link="{path: '/blog', activeClass: 'active'}" class="btn btn-primary nav-buttons">Faux Blog</a> -->
            <a v-link="{path: '/contact', activeClass: 'active'}" class="btn btn-primary nav-buttons">Contact</a>
        </div>
    </div>
</template>
