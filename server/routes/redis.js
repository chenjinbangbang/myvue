let express = require('express');
let router = express.Router();

//连接redis
//let db = require('../modules/redis');
/*let redis = require('redis');
let client = redis.createClient(6379,'127.0.0.1',{});

//redis连接成功
client.on('connect',() => {
    console.log('Redis连接成功');
});

//redis连接失败
client.on('error',(err) => {
    console.log(`Redis连接失败：${err}`)
});

//获取string字符串
client.get('string',(err,result) => {
    if(err){
        console.log(`获取string字符串失败：${err}`);
        return;
    }
    console.log(result);
});


//获取hash哈希
client.hgetall('user:1',(err,result) => {
    if(err){
        console.log(`获取hash哈希失败：${err}`);
        return;
    }
    console.log(result);
});

//获取list列表
client.lrange('list',0,10,(err,result) => {
    if(err){
        console.log(`获取list列表失败：${err}`);
        return;
    }
    console.log(result);
});

//获取Set无序集合
client.smembers('setlist',(err,result) => {
    if(err){
        console.log(`获取Set无序集合失败：${err}`);
        return;
    }
    console.log(result);
});

//获取Zset有序集合
client.zrangebyscore('zsetlist',0,100,(err,result) => {
    if(err){
        console.log(`获取Zset有序集合失败：${err}`);
        return;
    }
    console.log(result);
});*/


router.get('/list',(req,result) => {

});

module.exports = router;
