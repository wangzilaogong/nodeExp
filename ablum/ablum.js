var http = require('http');
var fs =require('fs');

var wjj = [];
var server = http.createServer(function(req,res){

	fs.readdir("./album",function(err,files){
		var length = files.length;
		for(var i )
	});
});
server.listen(3000,'127.0.0.1');