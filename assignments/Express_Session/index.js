var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var db = require('./data/students.json');

var app = express();
var port = 3000;

app.use(session({
    secret: "Express session secret!"
}));

app.use(bodyParser.urlencoded());

app.use(function(req, res, next) {
    console.log(req.method + " " + req.protocol + "://" + req.hostname + ":" + port + req.originalUrl);
    console.log("Session ID: " + req.session.id);
    console.log(db[0]);
    console.log(req.body);
    next();
});

app.get('/test', function(req, res) {
    if(req.session.counter == undefined) {
        req.session.counter = 1;
        res.send("Welcome to this page for the first time.");
    }
    else {
        req.session.counter++;
        res.send("You visited this page " + req.session.counter + " times.");
    }
});

app.get('/login', function(req, res) {
    res.sendfile('public/index.html');
})

app.post('/auth', function (req, res) {
    for(var i=0; i<db.length; i++) {
        if(req.body.email === db[i].email && req.body.password === db[i].password) {
            req.session.login = true;
            req.session.studentName = db[i].name;
        }
    }
    res.redirect('/user');
});

app.get('/user', function(req, res) {
    if(req.session.login == true) {
        res.send("Welcome " + req.session.studentName + ". Do you want to <a href='/logout'>logout</a>?");
    }
    else {
        res.send("You are blocked :(");
    }
});

app.get('/logout', function (req, res) {
    req.session.destroy();
    res.redirect('/login');
});

app.listen(port);