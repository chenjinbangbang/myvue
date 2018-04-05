import Vue from 'vue';
import Router from 'vue-router';
import uploadImg from '@/views/uploadImg';
import tinymce from '@/views/tinymce';
import avatarUpload from '@/views/avatarUpload';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: uploadImg
        },
        { 
            path: '/avatarUpload',
            component: avatarUpload
        }
    ]
});
