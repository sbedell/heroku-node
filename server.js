const express = require('express');
const cool = require('cool-ascii-faces');

var app = express();

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));     

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
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log('Node app is running on port', port);
});
