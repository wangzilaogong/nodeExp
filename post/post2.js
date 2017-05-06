/**
 * Created by wk on 2017-05-04.
 */
var http = require("http");
var server = http.createServer(function (req,res) {
    if (req.url=='/dopost' &&req.method.toLowerCase()=="post"){
        var alldata ="";
        req.addListener("data", function (chunk) {
            alldata+=chunk;
            console.log(chunk);
        });
        req.addListener("end", function () {
            alldata+=chunk;
            console.log(alldata.toString());
            res.end();
        });
    }
});
server.listen(80,"127.0.0.1");