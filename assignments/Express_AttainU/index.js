var express = require('express');
var bodyParser = require('body-parser');
var handlebars = require('express-handlebars');
var mongoClient = require('mongodb').MongoClient;

var students = require('./students');

var app = express();

mongoClient.connect('mongodb://127.0.0.1:27017', { useNewUrlParser: true }, function (err, client) {
    if (err) throw err;
    app.locals.db = client.db('attainu');
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));

var hbs = handlebars.create({
    defaultLayout: "main",
    extname: "hbs",

    helpers: {
        add: function (a, b) {
            return a + b;
        }
    }
});

app.engine('hbs', hbs.engine);

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use('/students', students);

app.listen(3000);