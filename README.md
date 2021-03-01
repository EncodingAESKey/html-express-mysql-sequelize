前后不分离Nodejs项目 html+express+mysql+sequelize

前提：安装mysql

git clone https://github.com/EncodingAESKey/html-express-mysql-sequelize.git
cd html-express-mysql-sequelize
npm i
node app.js
localhost:3000


clone 下来之后需要修改config/mysql.js文件, 将url修改为自己数据库地址


const url = 'mysql://数据库用户名:数据库密码@数据库地址:端口/需要连接的数据库名';

例：const url = 'mysql://root:123456@156.156.11.11:3306/mysql';