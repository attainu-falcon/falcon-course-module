var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

app.post('/add', function (req, res) {
    console.log(req.body.num1);
    res.json({
        "num1": req.body.num1,
        "num2": req.body.num2,
        "result": parseFloat(req.body.num1) + parseFloat(req.body.num2)
    });
})

app.post('/subtract', function (req, res) {
    console.log(req.body.num1);
    res.json({
        "num1": req.body.num1,
        "num2": req.body.num2,
        "result": parseFloat(req.body.num1) - parseFloat(req.body.num2)
    });
})

app.post('/mul', function (req, res) {
    console.log(req.body.num1);
    res.json({
        "num1": req.body.num1,
        "num2": req.body.num2,
        "result": parseFloat(req.body.num1) * parseFloat(req.body.num2)
    });
})

app.post('/div', function (req, res) {
    console.log(req.body.num1);
    res.json({
        "num1": req.body.num1,
        "num2": req.body.num2,
        "result": parseFloat(req.body.num1) / parseFloat(req.body.num2)
    });
})

app.post('/power', function (req, res) {
    res.json({
        "base": req.body.base,
        "exp": req.body.exp,
        "result": Math.pow(parseFloat(req.body.base), parseFloat(req.body.exp))
    });
})

app.post('/sine', function (req, res) {
    res.json({
        "num": req.body.num,
        "result": Math.sin(parseFloat(req.body.num))
    });
})

app.listen(3000);
