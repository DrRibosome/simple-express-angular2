var express = require('express');
var app = express();

//app.use(express.static('node_modules'));
//app.set('views', path.join(__dirname, 'views'));

app.use('/modules', express.static(__dirname + '/node_modules/'));
app.use('/app', express.static(__dirname + '/app/'));
app.use('/', express.static(__dirname + '/views/'));

var routes = require('./routes/index');
app.use('/', routes);

var port = 8000
app.listen(port, () => console.log('Example app listening on port '+port));
