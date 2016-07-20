const express = require('express');
const cool = require('cool-ascii-faces');

var app = express();

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));     

app.set('port', 8080);

// Display ascii / unicode faces either 5 times
// or the number of times specified in config vars.
app.get('/faces', function(request, response) {
	var result = '';
	var times = process.env.TIMES || 5;
	for (var i = 0; i < times; i++) {
		result += cool();
		result += '</br>';
	}
	response.send(result);
});

// Error handling:
app.use(function(err, req, res, next) {
	// prints stack trace to the console
	console.error(err.stack);

	// Sends generic error page to the user
  	res.status(500).send('Error!');

	//console.log("request:");
	//console.log(req);
	//console.log("response:");
	//console.log(res.headersSent);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
