var express = require('express');
var app = express();

app.get('/', function(req, res) {
   res.send("Hello world!" + req.query.test);
});

app.listen(3000);
