var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.set('view engine', 'jade');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/contactme', function(req, res) {
    var name = req.body.name;
    var email = req.body.email;
    var message = req.body.message;

    var transporter = nodemailer.createTransport('smtps://budgingjet%40gmail.com:nevieM.0123@smtp.gmail.com');

    var mailOptions = {
        from: '"'+name+'" <'+email+'>',
        to: 'hi@tomasstark.rocks',
        replyTo: email,
        subject: 'New message from tomasstark.rocks',
        html: message
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            res.send({status: error + info});
        } else {
            res.send({status: 'sent'});
        }
    });
});

app.use('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
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
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app.listen(3000, function() {
    console.log('Listening on port 3000');
});


module.exports = app;
