var express = require('express')
var app = express();
var port = process.env.PORT || 3000;
var routes = require('./api/routes');

app.use((request, response, next) => {
	next();
});
app.use(routes);
app.use('/*', (request, response, next) => {
	response.status(404).json('NOT_FOUND');
});
app.listen(port,function(){
console.log('Server started on port: ' + port);
});