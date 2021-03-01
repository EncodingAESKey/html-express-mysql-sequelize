前后不分离Nodejs项目 html+express+mysql+sequelize

clone 下来之后需要修改config/mysql.js文件, 将url修改为自己数据库地址


const url = 'mysql://a:b@c/d';
参数解释：
a:数据库用户名 root
b:数据库密码 xxxxxx
c:数据库地址与端口 xxx.xx.xx.xx:3306
d:链接的数据库库

例：const url = 'mysql://root:123456@156.156.11.11:3306/mysql';