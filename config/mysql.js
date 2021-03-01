
const { Sequelize } = require('sequelize');
// 数据库连接
const url = 'mysql://root:Wwl123456!@82.156.53.71:3306/mysql';
const mysql = new Sequelize(url, {
    // 选项设置
    define: {
        timestamps: false
    },
    // 连接池设置
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    // 是否开启操作符别名
    operatorsAliases: false
})

// mysql.authenticate().complete(function(err){
//     if (!!err) {
//         console.log('unable to connect to the database');
//     } else {
//         console.log('Connection has been established successfully');
//     }
// });

mysql.authenticate().then(() => {
    console.log('Connection has been established successfully.')
})
.catch(err => {
    console.error('Unable to connect to the database:', err)
})

module.exports = mysql;
