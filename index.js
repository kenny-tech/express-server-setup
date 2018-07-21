// Import the Express module
var express = require('express');

// Create a new Express Instance
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res){
    res.send('hello world');
});

app.listen(3001, () => console.log('App listening on port 3001!'));
