var formidable = require("formidable");
var db =require("../models/db.js");
var md5 = require("../models/md5.js");


exports.showIndex = function(req,res){
    res.render("index",{
        "login":req.session.login == "1" ? true : false,
        "username":req.session.login == "1" ? req.session.username:''
    });
}
exports.showReg = function(req,res){
    res.render("reg");
}
exports.showLogin = function(req,res){
    res.render("login");
}
exports.doReg = function(req,res,next) {
    //查询用户
    var form = new formidable.IncomingForm();
    form.parse(req,function(err,fields,files){
       var username = fields.username;
        var password = fields.password;
        db.find("users",{"username":username},function(err,result){
            if(err){
            res.send("-3");
            return;
            }
            if(result.length!=0){
                res.send("-1");//已有
                console.log("-1");
                return;
            }
            password = md5(md5(password)+"wk");
            db.insertOne("users",{
                "username":username,
                "password":password,

            },function(err,result){
                if(err){
                    res.send("-3");
                    return;
                }
                req.session.login="1";
                req.session.username = username;
                res.send("1");

            })


        })


    });
}

exports.doLogin = function (req,res,next) {
    var form = new formidable.IncomingForm();
    form.parse(req,function(err,fields,files){
        var username = fields.username;
        var password = fields.password;
        var jiamihou = md5(md5(password)+"wk");

       db.find("users",{"username":username},function(err,result){
          if(err){
              res.send("-5");//服务器错误
              return;
          }
           if(result.length == 0){
               res.send("-1");
               return;
           }

           if(jiamihou == result[0].password){
               req.session.login = "1";
               req.session.username=username;
               res.send("1");
               return;

           }else {
               res.send("-2");//密码错误
               return;
           }

       });


    });
}