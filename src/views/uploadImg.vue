<template>
  <div class="demo">
    <h3>文件单选</h3>
    <input type="file" ref="file" @change="fileUpload($event)">
    <button @click="submit">提交</button>
    <div class="img">
      <img :src="img" alt="">
    </div>

      <img src="/server/Images/file_1523016208020_1.jpg" alt="">

    <h3>文件多选</h3>
    <input type="file" @change="fileUpload1($event)" multiple>
    <button @click="submit1">提交</button>
    <div class="img" v-for="img in img1">
      <img :src="img" alt="">
    </div>

    <h2>图片列表</h2>
    <ul class="imgList">
      <li v-for="list in imgList">
        <img :src="list.filename" alt="">
        <p>{{list.imgs}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { upload,upload1,getImgList } from '@/api/upload';
export default {
  name: "demo",
  components: {},
  data() {
    return {
      file: "",
      img: "",

      file1: [],
      img1: [],
      imgList: []
    };
  },
  created(){
    this.getImgList();
  },
  methods: {
    getImgList(){
      getImgList().then(res => {
        this.imgList = res.data;
        //console.log(this.imgList);
      });
    },
    //文件单选
    fileUpload(event){
      //this.file = this.$refs.file.files[0]; //获取文件
      this.file = event.target.files[0];
      console.log(this.file);

      //URL对象是硬盘（SD卡等）指向文件的一个路径，文件上传的时候上传到服务器之前可以预览到上传的图片
      //window.URL标准定义，window.webkitURL是webkit内核的实现（一般手机上就是使用这个），还有火狐等浏览器的实现
      let windowURL = window.URL || window.webkitUrl;

      //创建图片文件的url，http格式的url路径
      this.img = windowURL.createObjectURL(this.file);
      //console.log(this.img);
    },
    submit(){
      upload({file: this.file}).then(res => {
        this.getImgList();
      });
    },

    //文件多选
    fileUpload1(event){
      this.file1 = event.target.files; //是一个对象，不是一个数组，有长度
      console.log(this.file1);

      let windowURL = window.URL || window.webkitUrl;

      for(let i=0;i<this.file1.length;i++){
        //创建图片文件的url，http格式的url路径
        this.img1.push(windowURL.createObjectURL(this.file1[i]));
      }

      console.log(this.img1);
    },
    submit1(){
      upload1({file1: this.file1}).then(res => {
        this.getImgList();
      });
    },
  }
};
</script>

<style lang="scss">
  ul,li{ list-style-type: none; margin:0; padding:0;}
  .img{ border:1px solid #ccc; width:200px; height:200px; display:flex; justify-content:center; align-items: center; margin:10px;
    img{ max-width:100%; max-height:100%;}
  }
  .imgList{
    li{ border:1px solid #ccc; width:100px; height:100px; display:flex; justify-content:center; align-items: center; margin:10px;
      >img{
          max-width:100%; max-height:100%;
      }
    }
  }
</style>
