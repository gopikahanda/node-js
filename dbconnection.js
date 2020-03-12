var mongoose = require('mongoose');
var express = require('express');

mongoose.connect('mongodb://localhost/royo',{ useUnifiedTopology: true ,useNewUrlParser: true});
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function()
 {
 console.log("database is connected.....");
});