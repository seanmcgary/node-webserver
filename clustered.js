var PORT = process.env.NODE_PORT || 8080;

var express = require('express');
var cluster = require('cluster');
var cpuCount = require('os').cpus().length;


if(cluster.isMaster){

	for(var i = 0; i < cpuCount; i++){
		cluster.fork();
	}

} else {
	var app = express();

	app.get('/', function(req, res, next){
		res.send('Hello World!');
	});


	app.listen(PORT, function(){
		console.log('worker ' + cluster.worker.id + '. server listening on port ', PORT);
	});
}
