var express = require('express');
var bodyParser = require('body-parser');

//Javascript sandbox functions--abstract to separate class file and instantiate with Javascript module information
var Sandbox = require('sandbox');
var s = new Sandbox();
s.options.timeout = 20000;

function getTime(){
	var date = new Date();
	var time = date.getTime();
	return time / 1000;
}

function wrapFunction(code){
	var wrappedCode = 'function wrappedFunction(){' + code + '} wrappedFunction()';
	return wrappedCode;
}

//------------------------------------------------------------

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
	var startTime = getTime();
	s.run(wrapFunction(req.body.code), function(output){
		var endTime = getTime();
		var seconds = endTime - startTime;
		res.send({
			answer: output.result,
			seconds: seconds
		});
	});
});

app.use(express.static('public'));

app.listen(PORT, function(){
  console.log('Express server is up on port ' + PORT);
});
