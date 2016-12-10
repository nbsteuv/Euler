var express = require('express');
var bodyParser = require('body-parser');
var Sandbox = require('sandbox');
var s = new Sandbox();

s.run('1+1', function(output){
	console.log(output);
});

var app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(function(req, res, next){
	if(req.headers['x-forwarded-proto'] === 'https'){
		res.redirect('http://' + req.hostname + req.url);
	} else {
		next();
	}
});

app.post('/sandbox', function(req, res){
	s.run(req.body.code, function(output){
		res.send(output.result);
	});
});

app.use(express.static('public'));

app.listen(PORT, function(){
  console.log('Express server is up on port ' + PORT);
});
