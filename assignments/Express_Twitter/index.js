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

app.use(express.static('public'));

app.use(bodyParser.urlencoded());

var handlebarsEng = hbs.create({
    defaultLayout: "main",
    extname: "hbs",

    helpers: {
        add: function(a, b) {
            return a+b;
        },
        subtract: function (a, b) {
            return a - b;
        }
    }
});

app.engine('hbs', handlebarsEng.engine);

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.get('/', function(req, res) {
    res.render('home', {
        title: 'Twitter Feed',
        style: "home",
        tweets: tweets
    });
});

app.get('/about', function(req, res) {
    res.render('about', {
        title: "About Me Page",
        style: "about",
        flag: false
    })
});

app.post('/', function(req, res) {
    console.log(req.body);
    tweets.push(req.body);
    res.redirect('/')
});

app.set('port', 3000);
app.listen(app.get('port'));