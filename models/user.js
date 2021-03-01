var Sequelize = require('sequelize');
const mysql = require('../config/mysql');
const { v1: uuidv1 } = require('uuid');

// 创建 model
var User = mysql.define('www_test', {
    id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	},
    userId: {
        type: Sequelize.UUID,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING, // 指定值的类型
        allowNull: false,
    },
    // 没有指定 field，表中键名称则与对象键名相同，为 email
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    createdAt: {
		type: Sequelize.DATE,
		field: 'created_at'
	},
	updatedAt: {
		type: Sequelize.DATE,
		field: 'updated_at'
	}
}, {
    // 如果为 true 则的名称和 model 相同，即 user
    // 为 false MySQL创建的表名称会是复数 users
    // 如果指定的表名称本就是复数形式则不变
    freezeTableName: false,
    timestamps: false,
});


// 创建表
// User.sync() 会创建表并且返回一个Promise对象
// 如果 force = true 则会把存在的表（如果users表已存在）先销毁再创建表
// 默认情况下 forse = false
var user = User.sync({ force: false });


// 添加新用户
exports.addUser = function(userName, password) {
    // 向 user 表中插入数据
    return User.create({
        id: 0,
        userId: uuidv1(),
        name: userName,
        password: password,
        createdAt: getNowFormatDate(),
        updatedAt: getNowFormatDate()
    });
};

/**
 * 获取当前年月日时分秒
 * return {string} "2019-04-30 11:45:57"
 */
function getNowFormatDate () {
    let date = new Date ();
    let seperator1 = "-";
    let seperator2 = ":";
    let month = date.getMonth () + 1 < 10 ? "0" + (date.getMonth () + 1) : date.getMonth () + 1;
    let strDate = date.getDate () < 10 ? "0" + date.getDate () : date.getDate ();
    let currentdate = date.getFullYear () + seperator1 + month + seperator1 + strDate
        + " " + date.getHours () + seperator2 + date.getMinutes ()
        + seperator2 + date.getSeconds ();
    return currentdate;
}


// 通过用户名查找用户
exports.findByName = function(userName) {
    return User.findOne({ where: { name: userName } });
};

exports.findOne = function(where) {
    return User.findOne({ where: where });
};

exports.allCount = function(){
    return User.findAll({
        order: [
            ['id', 'ASC']
        ],
    });
};