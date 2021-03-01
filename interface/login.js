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
            const newAccount = await dbs.searchAccount(userName);
            if (newAccount) {
                res.json({code: -1, message: '注册账号名已被占用'});
                return;
            }
            const us = await dbs.insertUser({userName, pwd});
            us ? res.json({code: 0, message: '注册成功'}) : res.json({code: -1, message: '注册失败，服务异常！'});
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
            const {name, password} = await dbs.searchUser({userName, pwd});
            if (name) {
                if (password) {
                    res.json({code: 0, message: '登录成功'});
                } else {
                    res.json({code: -1, message: "密码错误"});
                }
            } else {
                res.json({code: -1, message: "此账号不存在"});
            }
        }
    })

    // 获取所有注册用户信息列表
    app.post('/getAllUserInfos', urlencodedParser, async function (req, res) {
        const users = await dbs.searchAllConunt();
        users.forEach(key => {
            delete key.dataValues['password'];
        });
        res.json({code: 0, message: "", data: users});
    })
}
