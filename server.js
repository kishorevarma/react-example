/**
 *  simple express server used as a REST service 
 *  for getting articles.
 */

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var routes = require('./routes');
	
var app = express();

app.set('port', process.env.PORT || 8081);
app.set('view engine', 'jade');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist')));

app.use(routes);

	

// development error handler
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});