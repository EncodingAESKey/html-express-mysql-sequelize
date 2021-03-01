var User = require('../models/user').User;
const { v1: uuidv1 } = require('uuid');

// 添加新用户
const insertUser = async (whereStr) => {
    let {userName,pwd} = whereStr;
    // 向 user 表中插入数据
    return await User.create({
        id: 0,
        userId: uuidv1(),
        name: userName,
        password: pwd,
        createdAt: getNowFormatDate(),
        updatedAt: getNowFormatDate()
    });
};

// 账号是否已经被注册
const searchAccount = async (where) => {
    return await User.findOne({ where: where });
}

const searchAllConunt = async () => {
    return await User.findAll({
        order: [
            ['id', 'ASC']
        ],
    }); 
};

// 账号密码验证
const searchUser = async (whereStr) => {
    let {userName, pwd} = whereStr;
    let name = await User.findOne({where: {name: userName}});
    let password = await User.findOne({where: {"password" :pwd}});
    return {name, password};
}

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

module.exports = {
    insertUser,
    searchUser,
    searchAccount,
    searchAllConunt
}
