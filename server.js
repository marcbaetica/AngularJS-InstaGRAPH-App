var express = require('express');
var app = express();

app.use('/', express.static(__dirname + '/app'));

app.get('/', function (req, res) {
	res.sendFile('app/index.html');
});

app.listen(8000);