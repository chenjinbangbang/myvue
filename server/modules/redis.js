let db = {},
    redis = require('redis'),
    client = redis.createClient();

//redis连接成功
client.on('connect',() => {
    console.log('Redis连接成功');
});

//redis连接失败
client.on('error',(err) => {
    console.log(`Redis连接失败：${err}`)
});

//添加键
db.set = (key,value,expire,callback) => {
    client.set(key,value,(err,result) => {
        if(err){
            console.log(`添加键失败：${err}`);
            callback(err.null);
            return;
        }
        if(!isNaN(expire) && expire > 0){
            client.expire(key,parseInt(expire));
        }
        callback(null,result);
    });
};

//获取键
db.get = (key,callback) => {
    client.get(key,(err,result) => {
        if(err){
            console.log(`获取键失败：${err}`);
            callback(err.null);
            return;
        }
        callback(null,result);
    });
};

module.exports = db;


