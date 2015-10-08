var fs = require('fs');
var express = require('express');
var db = require('./mongo');
var http = require('http');
var https = require('https');
var config = require('./config');
var multer = require('multer');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var cookieParser = require('cookie-parser');
var helmet = require('helmet');
var path = require('path');

module.exports = function(){

	// Initialize express app
	var app = express();

	// set application local variables
	app.locals.title = config.app.title;
	app.locals.description = config.app.description;

	// Show stack errors
	app.set('showStackError', true);

	// Request body parsing middleware should be above methodOverride
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(bodyParser.json());
	app.use(methodOverride());
	app.use(cookieParser());

	// Add multipart handling middleware
	app.use(multer({
		dest: config.upload.loc,
		inMemory: true
	}).single('picture'));

	app.use(function (req, res, next) {

	    // Website you wish to allow to connect
	    res.setHeader('Access-Control-Allow-Origin', '*');

	    // Request methods you wish to allow
	    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

	    // Request headers you wish to allow
	    res.setHeader('Access-Control-Allow-Headers', 'origin, x-requested-with, content-type, accept, x-xsrf-token, Authorization');

	    // Set to true if you need the website to include cookies in the requests sent
	    // to the API (e.g. in case you use sessions)
	    res.setHeader('Access-Control-Allow-Credentials', true);

	    // Pass to next layer of middleware
	    next();
	});
	
	// Use helmet to secure Express headers
	var SIX_MONTHS = 15778476000;
	app.use(helmet.xframe());
	app.use(helmet.xssFilter());
	//app.use(helmet.nosniff());
	app.use(helmet.ienoopen());
	app.use(helmet.hsts({
		maxAge: SIX_MONTHS,
		includeSubdomains: true,
		force: true
	}));
	app.disable('x-powered-by');

	// include models
	require('../server/models/post');

	// include routes
	require('../server/routes/core.routes')(app);
	require('../server/routes/blog.routes')(app);

	// setup ssl if enabled
	if (config.ssl.enabled) {

		console.log('Securely using https protocol');

		// Create HTTPS Server
		var httpsServer = https.createServer({
			key: fs.readFileSync(config.ssh.key),
			cert: fs.readFileSync(config.ssh.cert)
		}, app);
		return httpsServer;
	}

	var server = require('http').createServer(app);
	return server;
};