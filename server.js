var express = require('express');
var passport = require('passport');
var LocalStrategy = require('passport-local');

var app = express();
const PORT = 6969;
app.use(passport.initialize());

console.log("Spinning up server on port " + PORT)
app.listen(PORT);

