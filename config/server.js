var express = require('express');
var app = express();
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

app.set('view engine', 'ejs');
app.set('views' , './app/views')

//middleware
app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());

consign()
	.include('./app/routes')
	.include('./config/dbConnection.js')
	.include('./app/models')
	.include('./app/controllers')
	.into(app)

module.exports = app;