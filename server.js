const express = require('express');
const cool = require('cool-ascii-faces');

var app = express();

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));     

// Display ascii / unicode faces either 5 times
// or the number of times specified in config vars.
app.get('/faces', (request, response) => {
	var result = '';
	for (var i = 0; i < 5; i++) {
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

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Node app is running on port', port);
});
