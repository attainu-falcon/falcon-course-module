var express = require("express");
var bodyParser = require("body-parser");
var app = express();

var students = [{name: "Mohan", age: 22}, {name: "Raj", age:25}];

app.use(bodyParser.urlencoded());

app.get('/', function(request, response) {
    response.sendfile('public/index.html');
});

app.post('/update', function (request, response) {
    //Db update
    var student = {
        name: request.body.name,
        age: parseInt(request.body.age)
    }
    students.push(student);
    response.json(students);
});

app.get('/students', function (request, response) {
    response.json(students);
});

app.listen(3000);