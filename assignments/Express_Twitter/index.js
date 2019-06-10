var express = require('express');
var bodyParser = require('body-parser');

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

app.use(express.static('public'));

app.get('/getTweets', function(req, res) {
    res.json(tweets);
});

app.post('/', function(req, res) {
    console.log(req.body);
    tweets.push(req.body);
    res.redirect('/')
})

app.listen(3000);
