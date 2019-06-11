var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var hbs = require('express-handlebars');

var app = express();

var tweets = [
    {
        name: "digitizer",
        tweet: "This is a cool piece of information."
    },
    {
        name: "M0SH",
        tweet: "@digitizer I agree."
    }
];

app.use(bodyParser.urlencoded());

app.engine('handlebars', hbs({defaultLayout: "main"}));

app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.get('/', function(req, res) {
    res.render('home', {
        title: 'Twitter Feed',
        tweets: tweets
    });
});

app.post('/', function(req, res) {
    console.log(req.body);
    tweets.push(req.body);
    res.redirect('/')
});

app.set('port', 3000);
app.listen(app.get('port'));