var user = require('../models/user');
const insertUser = async (whereStr) => {
    let {userName,pwd} = whereStr;
    let adduserRes = user.addUser(userName, pwd).then(async function(res) {
        return res;
    })
    return adduserRes;
}

// 账号密码验证
const searchUser = async (whereStr) => {
    let {userName, pwd} = whereStr;
    let name = await user.findOne({name: userName});
    let password = await user.findOne({password: pwd})
    return {name, password};
}

// 账号是否已经被注册
const searchAccount = async (name) => {
    return await user.findOne({name});
}

// 获取所有注册用户信息
const searchAllConunt = async (name) => {
    return await user.allCount();
}

module.exports = {
    insertUser,
    searchUser,
    searchAccount,
    searchAllConunt
}