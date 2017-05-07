/**
 * Created by wk on 2017-05-04.
 */
var express = require("express");
var router = require("./control/router.js");

var app = express();
app.set("view engine","ejs");

//中间件
app.use(express.static("./public"));

app.get("/",router.showIndex);
app.get("/:albumName",router.showAlbum);

app.listen(3000);
