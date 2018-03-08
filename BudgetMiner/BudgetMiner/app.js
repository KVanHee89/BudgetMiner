'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var routes = require('./routes/index');
var users = require('./routes/users');
var transactions = require('./routes/transactions');

var app = express();

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'pug');


//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//Add routes to middleware chain
app.use('/', routes);
app.use('/users', users);
app.use('/transactions', transactions);






var server = app.listen(1333, function () {
    console.log("Server is listening on port " + server.address().port);
});
