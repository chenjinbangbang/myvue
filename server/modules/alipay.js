let Alipay = require('alipay-nodejs');

let pay = new Alipay({
    app_id: 'xxxxx',
    notify_url: 'https://xxxxx',
    app_private_key: fs.readFileSync('./app_private_key.pem'), //支付宝商户应用私钥;
    alipay_public_key: fs.readFileSync('./alipay_public_key.pem')
});

let result = pay.buildSignOrderParam({
    body: '对一笔交易的具体描述信息。如果是多种商品，请将商品描述字符串累加传给body',
    subject: '大乐透',
    out_trade_no: '20180101'+Math.random().toString().substr(2,10),
    total_amout: 9.00,
    timeout_express: '90m',
    product_code: 'quick_msecurity_pay'
});

console.log(result);
