const bodyParser = require('body-parser');
const dbs = require('../schema/user');
//创建application/x-www-form-urlencoded编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function (app) {
    // 注册
    app.post('/interface_register', urlencodedParser, async function (req, res) {
        var userName = req.body.userName;
        var pwd = req.body.pwd; 
        // var userName = req.query.userName;
        // var pwd = req.query.pwd;
        if (!userName) {
            res.json({ code: -1, message: '用户名不能为空' });
        } else if (!pwd) {
            res.json({ code: -1, message: '密码不能为空' });
        } else {
            const us = await dbs.insertUser({userName, pwd});
            console.log("注册成功",us);
            if (us) {
                res.json({code: 0, message: '注册成功'});
            } else {
                res.json({code: -1, message: '注册失败，服务异常！'});
            }
        }
    })
    // 登录
    app.post('/interface_login', urlencodedParser, async function (req, res) {
        var userName = req.body.userName;
        var pwd = req.body.pwd; 
        // var userName = req.query.userName;
        // var pwd = req.query.pwd;
        if (!userName) {
            res.json({ code: -1, message: '用户名不能为空' });
        } else if (!pwd) {
            res.json({ code: -1, message: '密码不能为空' });
        } else {
            const userInfo = await dbs.searchUser({userName, pwd});
            console.log("登录成功",userInfo);
            let {userRes, passRes} = userInfo;
            if (userRes) {
                if (passRes) {
                    res.json({code: 0, message: '登录成功'});
                } else {
                    res.json({code: -1, message: "密码错误"});
                }
            } else {
                res.json({code: -1, message: "账号错误"});
            }
        }
    })
}
