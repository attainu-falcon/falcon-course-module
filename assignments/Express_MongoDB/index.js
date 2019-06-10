var express = require('express');

var mongoClient = require('mongodb').MongoClient;

var db;

mongoClient.connect('mongodb://localhost:27017', function(err, client) {
    if(err) {
        throw err;
    }

    db = client.db('school');
});

var app = express();

app.get('/create', function(req, res) {
    db.collection('students').insert({name: "Mohan", age: 22, gender: "male"}, function (err, result) {
        if (err) {
            throw err;
        }
        res.json("1 Document inserted for Mohan.");
    });
});

app.get('/getStudents', function (req, res) {
    db.collection('students').find().toArray(function (err, result) {
        if (err) {
            throw err;
        }
        res.json(result);
    });
});

app.get('/subjects', function (req, res) {
    db.collection('subjects').find().toArray(function (err, result) {
        if (err) {
            throw err;
        }
        res.json(result);
    });
});

app.get('/update', function (req, res) {
    db.collection('students').update(
        {age: 22},
        {$set: {hometown: "Delhi"}},
        function (err, result) {
            if (err) {
                throw err;
            }
            res.json("1 Document updated for Rahul.");
        }
    );
});

app.get('/delete', function (req, res) {
    db.collection('students').deleteOne(req.query, function (err, result) {
        if (err) {
            throw err;
        }
        res.json("1 Document deleted for Tina.");
    });
});

app.listen(3000);