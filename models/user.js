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

module.exports = {
    User
}