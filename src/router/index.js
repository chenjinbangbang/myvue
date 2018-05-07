import Vue from 'vue';
import Router from 'vue-router';
import tinymce from '@/views/tinymce'; //富文本编辑
import avatarUpload from '@/views/avatarUpload'; //头像裁剪上传
import uploadImg from '@/views/uploadImg'; //文件图片处理(oss)
import slide from '@/views/slide'; //轮播

import redis from '@/views/redis'; //redis





Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {path: '/tinymce', component: tinymce},
        {path: '/avatarUpload', component: avatarUpload},
        {path: '/uploadImg', component: uploadImg},
        {path: '/slide', component: slide},
        {path: '/redis', component: redis},
    ]
});
