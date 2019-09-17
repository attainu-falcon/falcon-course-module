var express = require('express');
var app = express();

var students = [ //data will come from MongoDB
    {
        name: "Mohan",
        age: 22,
        gender: "male"
    },
    {
        name: "Mohini",
        age: 25,
        gender: "female"
    },
    {
        name: "Sohan",
        age: 65,
        gender: "male"
    }
];

var bodyParser = require('body-parser')
// app.use(bodyParser.json());

app.use(function (req, res, next) {
    var data = "";
    req.on('data', function (chunk) { data += chunk })
    req.on('end', function () {
        console.log("ended");
        req.rawBody = data;
        req.jsonBody = JSON.parse(data);
        next();
    })
})

app.post('/', function (request, response) {
    response.send(request.jsonBody);
})

app.get('/', function (req, res) {
    res.sendfile('public/index.html');
})

app.get('/students', function (req, res) {
    res.json(students);
})

app.get('/student/:name', function (req, res) {
    var flag = false, matchedStudent = {};
    for (var i = 0; i < students.length; i++) {
        if (students[i].name == req.params.name) {
            flag = true;
            matchedStudent = students[i];
        }
    }
    if (flag == true) {
        res.json(matchedStudent);
    }
    else {
        res.status(404).json({ error: "The requested student was not found in db." });
    }
})

app.get('/member', function (req, res) {
    var flag = false, matchedStudent = {};
    for (var i = 0; i < students.length; i++) {
        if (students[i].name == req.query.name) {
            flag = true;
            matchedStudent = students[i];
        }
    }
    if (flag == true) {
        res.json(matchedStudent);
    }
    else {
        res.status(404).json({ error: "The requested student was not found in db." });
    }
})

// app.get('/add/:a/:b', function (req, res) {
//     var a = parseInt(req.params.a);
//     var b = parseInt(req.params.b);
//     res.json({ 'a': a, 'b': b, result: (a + b) });
// })

// app.get('/subtract', function (req, res) {
//     var a = parseInt(req.query.a);
//     var b = parseInt(req.query.b);
//     res.json({'a': a, 'b': b, result: (a-b)});
// })

// app.get('/:operation', function (req, res) {
//     var a = parseInt(req.query.a);
//     var b = parseInt(req.query.b);
//     var result;
//     switch (req.params.operation) {
//         case 'add': result = a + b;
//             break;
//         case 'subtract': result = a - b;
//             break;
//         default: result = 'Operation not defined!';
//     }
//     res.json({ 'a': a, 'b': b, result: result })
// })


// app.use(function(req, res, next) {
//     console.log(req.method + ' ' + req.protocol + '://' + req.get('host') + req.originalUrl);
//     next();
// });

// app.use('/css/style2.css', function (req, res, next) {
//     console.log('Time:', Date.now());
//     next();
// });

// app.use(express.static('public'));

app.listen(3000);
