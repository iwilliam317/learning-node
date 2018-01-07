var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.set('views' , './app/views')

//middleware
app.use(express.static('./app/public'));

module.exports = app;