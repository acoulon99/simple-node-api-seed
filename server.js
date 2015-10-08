var init = require('./config/init')();
var config = require('./config/config');

var app = require('./config/express')();

app.listen(config.port);
console.log('Node server started on port ' + config.port + '.');