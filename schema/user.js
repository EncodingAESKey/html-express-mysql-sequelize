var user = require('../models/user');

const insertUser = async (whereStr) => {
    let {userName,pwd} = whereStr;
    let adduserRes = user.addUser(userName, pwd).then(async function(res) {
        return res;
    })
    return adduserRes;
}

const searchUser = async (whereStr) => {
    let {userName, pwd} = whereStr;
    let userRes = await user.findByName(userName);
    let passRes = await user.findByName(pwd);
    return {userRes, passRes};
}

module.exports = {
    insertUser,
    searchUser
}