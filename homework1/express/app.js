// express is flexible routing system
// using express we can respond to http methods: get, post, delete, put

var express =require('express');

//express app
var app = express();

// our routes
app.get('/', function(req,res){
    res.send('this is the homepage')
});

app.get('/contact', function(req,res){
    res.send('this is the contact page')
});

app.get('/profile/:name', function(req,res){
    res.send('you requested to see profile with the name of ' + req.params.name)
});

//listen on port 3000
app.listen(3000);
