
// 设置允许所有域名跨域：
module.exports = function (app) {
    app.all("*",function(req,res,next){    
        //设置允许跨域的域名，*代表允许任意域名跨域
        res.header("Access-Control-Allow-Origin","*");    
        //允许的header类型
        res.header("Access-Control-Allow-Headers","content-type");    
        //跨域允许的请求方式 
        res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");    
        if (req.method.toLowerCase() == 'options') {
            res.send(200);  //让options尝试请求快速结束
        } else {
            next();
        }
    })
}
// 设置允许指定域名跨域：
// app.all("*",function(req,res,next){    
//     //设置允许跨域的域名，*代表允许任意域名跨域
//     res.header("Access-Control-Allow-Origin","http://www.zhangpeiyue.com");   
//     //允许的header类型
//     res.header("Access-Control-Allow-Headers","content-type");    
//     //跨域允许的请求方式 
//     res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");    
//     if (req.method.toLowerCase() == 'options') {
//         res.send(200);  //让options尝试请求快速结束
//     } else {
//         next();
//     }     
// })

// 设置允许多个域名跨域：
// app.all("*",function(req,res,next){   
//     if( req.headers.origin.toLowerCase() == "http://www.zhangpeiyue.com" || req.headers.origin.toLowerCase() =="http://127.0.0.1" ) {        
//         //设置允许跨域的域名，*代表允许任意域名跨域
//         res.header("Access-Control-Allow-Origin", req.headers.origin);
//     }
//     //允许的header类型
//     res.header("Access-Control-Allow-Headers", "content-type");    
//     //跨域允许的请求方式 
//     res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");    
//     if (req.method.toLowerCase() == 'options') {
//         res.send(200);  //让options尝试请求快速结束
//     } else {
//         next();
//     }    
// })


// 如果允许的域名较多，可以将允许跨域的域名放到数组当中：
// app.all("*",function(req,res,next){    
//     var orginList=[        
//         "http://www.zhangpeiyue.com",        
//         "http://www.alibaba.com",        
//         "http://www.qq.com",       
//         "http://www.baidu.com"
//     ]    
//     if(orginList.includes(req.headers.origin.toLowerCase())){        
//         //设置允许跨域的域名，*代表允许任意域名跨域
//         res.header("Access-Control-Allow-Origin",req.headers.origin);
//     }
//     //允许的header类型
//     res.header("Access-Control-Allow-Headers", "content-type");   
//     //跨域允许的请求方式
//     res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");   
//     if (req.method.toLowerCase() == 'options') {
//         res.send(200);  //让options尝试请求快速结束
//     } else {
//         next();
//     } 
// })