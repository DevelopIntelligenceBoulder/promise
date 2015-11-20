// Importing express module for our Node middleware
var express = require('express');
//Import file I/O module
var fs = require('fs');

//Express application
var app = express();

// Web server port
// BTW: If 8080 doesn't work try 9080
var BASE_PORT = process.env.port || 8080;

// Static file root directory & check
var ROOT_DIR = __dirname + '/';
ROOT_DIR = fs.realpathSync(ROOT_DIR);

//Add application route logging
app.use(function(req, res, next) {
	console.log('%s %s', req.method, req.url);
	next();
});

//Serve static folder
app.use(express.static(ROOT_DIR));

//Log the server variables
app.listen(BASE_PORT, function() {
	console.log('Node server started @ http://localhost:' + BASE_PORT);
	console.log('Serving static files from ' + ROOT_DIR);
	console.log('Press Ctrl + c for server termination');
});