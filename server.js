//Dependencies
var express = require('express');
var app = express();


//enviroment
app.set('port', 8000);
app.use('/', express.static(__dirname + '/app'));	//for hosting our app


//routes
app.get('/', function (req, res) {
	res.sendFile('app/index.html');
	console.log('The homepage has been requested.');
});


//binding to port
app.listen(app.get('port'), function () {
	console.log('Magic is happening at port ' + app.get('port') + '!');
});