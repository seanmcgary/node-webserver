var PORT = process.env.NODE_PORT || 8080;

var express = require('express');

var app = express();

app.get('/', function(req, res, next){
	res.send('Hello World!');
});


app.listen(PORT, function(){
	console.log('server listening on port ', PORT);
});
