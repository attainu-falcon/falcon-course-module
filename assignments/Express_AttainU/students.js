var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    var db = req.app.locals.db;
    db.collection('students').find().toArray(function (err, result) {
        res.json(result);
    });
});

router.post('/', function (req, res) {
    var db = req.app.locals.db;
    db.collection('students').insertOne(function (err, result) {
        res.render();
    });
});

router.get('/*', function (req, res) {
    var db = req.app.locals.db;
    db.collection('students').find().toArray(function (err, result) {
        res.json(result);
    });
});

module.exports = router;