var express = require('express');
var router = express.Router();

//连接数据库
let mysql = require('mysql');
let connection = mysql.createConnection({
  host: 'localhost', //主机地址（默认：localhost）
  user: 'root', //用户名
  password: 'root', //密码
  port: '3306', //端口号（默认：3306）
  database: 'server' //数据库名
});
connection.connect();


//上传文件图片的依赖
let multer = require('multer');
let bodyParser = require('body-parser');
let app = express(); 
app.use(bodyParser.json());

//创建说明应该在哪里以及如何保存文件/图像的storage
/*
每个文件包含的信息：
fieldname：在窗体中指定的字段名
originalname：用户计算机上文件的名称
encoding：文件的编码类型
mimetype：文件的MIME类型
size：文件的大小（以字节为单位）
destination：保存文件的文件夹
filename：目标文件的名称
path：上传文件的完整路径
buffer：整个文件的Buffer
*/
// let Storage = multer.diskStorage({
//   destination(req,file,callback){
//     console.log(file);
//     callback(null,'./Images');
//   },
//   filename(req,file,callback){
//     console.log(file);
//     callback(null,file.fieldname = '_' + Date.now() + '_' + file.originalname);
//   }
// });

//创建multer对象
// let upload = multer({
//   storage: Storage
// }).array('imgUploader',3);
let upload = multer({dest: './Images'}); //dest：在哪里存储文件


//single(fieldname)：接受一个以fieldname命名的文件，这个文件的信息保存在req.file
//array(fieldname[,maxCount])：接受一个以fieldname命名的文件数组，可以配置maxCount来限制上传的最大数量，这些文件的信息保存在req.files
//上传文件
router.post('/upload',upload.single('file'),(req, res) => {
  console.log(req.file);

  let sql = `insert into users (filename,size) values ('/server/Images/${req.file.filename}','${req.file.size}')`;

  connection.query(sql,(err,result) => {
    if(err){
      console.log(`[select error]${err.message}`);
      return;
    }

    console.log(result);

    res.json({
      error_code: 0,
      data: '图片上传成功！'
    });
  });
  
});

//上传多个文件
router.post('/upload1',upload.array('files',12),(req, res) => {
  console.log(req.files);

  // let sql = `insert into users (filename,size) values ('/server/Images/${req.file.filename}','${req.file.size}')`;

  // connection.query(sql,(err,result) => {
  //   if(err){
  //     console.log(`[select error]${err.message}`);
  //     return;
  //   }

  //   console.log(result);

  //   res.json({
  //     error_code: 0,
  //     data: '图片上传成功！'
  //   });
  // });

  res.json({
    error_code: 0,
    data: '图片上传成功！'
  });
  
});

router.get('/getImgList',(req, res) => {

  let sql = 'select * from users';

  connection.query(sql,(err,result) => {
    if(err){
      console.log(`[select error]${err.message}`);
      return;
    }

    //console.log(result);

    res.json({
      error_code: 0,
      data: result,
    });

  });

  
});

module.exports = router;
