安装包的安装目录：/usr/local
添加环境变量：vim ~/.bash_profile
当前环境变量生效：source ~/.bash_profile  重启电脑永久生效


开启mysql服务：mysql -u root -p
//TODO 如果提示mysql不是一个命令的话，需要去看一下vi ~/.bash_profile 然后source ~/.bash_profile 运行一下就可以
用户名：root
密码：123456
Host：localhost或者127.0.0.1
端口：3306

注意：
1.重启电脑执行mysql之后提示mysql不是一个命令，这个时候执行source ~/.bash_profile就可以了
2.执行mysql -u root -p 输入密码之后提示下面这个
ERROR 2002 (HY000): Can't connect to local MySQL server through socket '/var/lib/mysql/mysql.sock'
这时候打开系统偏好设置，最下方找到mysql，需要initalize Database，初始化一下数据库，然后打开Navicat Premium软件，选择数据库右键，Edit Connection，点击Test Connection测试看是否能链接成功


注册页面：eg：
app.get('/login.html', function (req, res) {
    res.sendFile(__dirname + '/views/' + 'login.html');
})

接口响应：eg：
app.post('/interface_login', urlencodedParser, function (req, res) {
	res.json({ code: -1, message: '用户名不能为空' }); //接口响应给请求端
})

