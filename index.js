var express = require('express');
var app = express();
var cool = require('cool-ascii-faces');

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.set('port', (process.env.PORT || 8080));

// Get the basic landing index page
app.get('/', function(request, response) {
	var tagline = "Any code of your own that you haven't looked at for six or more months might as well have been written by someone else.";

	response.render('pages/index', {
		tagline: tagline
	});
});

// Display ascii / unicode faces either 5 times
// or the number of times specified in config vars.
app.get('/faces', function(request, response) {
	var result = '';
	var times = process.env.TIMES || 5;
	for (i = 0; i < times; i++) {
		result += cool();
		result += '</br>';
	}
	response.send(result);
});

app.get('/cool', function(request, response) {
	response.send(cool());
});
 
app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
