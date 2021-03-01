const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const http = require('http');
const app = express();

require('./config/cross')(app); //配置跨域
// Log requests to the console.
app.use(logger('dev'));
app.use('/public', express.static('public'));
// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Setup a default catch-all route that sends back a welcome message in JSON format.
// app.get('*', (req, res) => res.status(200).send({
//     message: 'Welcome to the beginning of nothingness.',
// }));


// TODO前后不分离的话可以用下面的操作
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/' + 'login.html');
})
app.get('/login.html', function (req, res) {
    res.sendFile(__dirname + '/views/' + 'login.html');
})
//主页面
app.get('/main.html', function (req, res) {
    res.sendFile(__dirname + '/views/' + 'main.html');
})
//注册页面
app.get('/register.html', function (req, res) {
    res.sendFile(__dirname + '/views/' + 'register.html');
})

// 注册请求接口
require('./interface/login')(app);

const port = parseInt(process.env.PORT, 10) || 8888;
app.set('port', port);

const server = http.createServer(app);
server.listen(port, function () {
    console.log("listen is localhost:" + port);
});


/**
 * TODO sequelize 增删改查
 * @param {*} obj 
 */

/*
// 新增数据
const add = (obj) => {
    const res = await Test.create(obj)
    if (!res) {
        throw new Faild('添加失败')
    }
    return res
}

// 修改数据
const update = (obj) => {
    const res = await Test.update(obj, {
        where: {
            id: obj.id
        }
    })
    if (!res) {
        throw new Faild('修改失败')
    }
    return res
}


// 查询列表
const findAll = (obj) => {
    let res= await Test.findAll()

    if (!res) {
        throw new Faild('修改失败')
    }
    return res
}

// 查询单个
const find = (id) => {
    let data = await Test.findByPk(id)
    // 或者
    // Test.findOne({
    //     where:{
    //         id
    //     }
    // })
    if (!data) {
        throw new Faild('查找失败')
    }
    return data
}

// 删除数据
const dele = (id) => {
    const res = await Test.destroy({
        where: {
            id
        }
    })
    if (!res) {
        throw new Faild('删除失败')
    }
    return res
}

*/