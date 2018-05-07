<template>
    <div id="app">
        <div class="nav">
            <router-link to="/tinymce">富文本编辑</router-link>
            <router-link to="/avatarUpload">头像裁剪上传</router-link>
            <router-link to="/uploadImg">文件图片处理</router-link>
            <router-link to="/slide">轮播</router-link>
            <router-link to="/redis">redis</router-link>
        </div>

        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'app'
    }
</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /* text-align: center; */
        color: #2c3e50;
        /*margin-top: 60px;*/
        .nav{  margin:20px 0;
            a{ margin:0 10px; display:inline-block;}
        }

    }
</style>
