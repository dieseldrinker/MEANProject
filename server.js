// REQUIREMENTS AND SETUP:
var express = require('express');										// require express
var app = express();													// set express to app
var path = require('path');												// require path
var bodyParser = require('body-parser');								// require body parser
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded());										// activate body parser
// app.set('view engine', 'ejs');											// set ejs as view engine for express
// app.set('views', path.join(__dirname, './views'));						// set up views folder for rendered content

// Sockets
// io = require('socket.io').listen(server)


app.use(express.static(__dirname + '/client'));							// establish folder for static content
require('./server/config/mongoose.js');									// require our mongoose connection file (this file also links all our models!)
require('./server/config/routes.js')(app);								// require our routes file in ./server/config/routes and passes app (express())


app.listen(31337, function() {
	console.log('listening on 31337!');
});


// Wait, that's it? 


// Session - implementing later!
// var session = require('express-session')
// app.use(session({
//   secret: 'keyboard cat',
//   resave: false,
//   saveUninitialized: true
// }))

// Socket Routes
// require('./server/config/socket.routes.js')(app);

