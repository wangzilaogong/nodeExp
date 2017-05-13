var express = require("express");
var app = express();
var router = require("./router/router.js");
var session = require("express-session");


app.use(session({
    secret:'keyboard cat',
    resave:'false',
    saveUninitialized:true,
}));


app.set("view engine","ejs");
app.use(express.static('./public'));

app.get('/',router.showIndex);
app.get('/reg',router.showReg);
app.post('/doreg',router.doReg);
app.get('/login',router.showLogin);
app.post('/dologin',router.doLogin);

app.listen(3000);
