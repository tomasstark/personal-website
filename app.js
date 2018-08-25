var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var mg = require('nodemailer-mailgun-transport');

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

    var auth = {
        auth: {
            api_key: '43858566bc5507f2e1b86608752df673-7efe8d73-f830fb1c',
            domain: 'mg.tomasstark.com'
        }
    };

    var nodemailerMailgun = nodemailer.createTransport(mg(auth));

    var mailOptions = {
        from: email,
        to: 'hi@tomasstark.rocks',
        'h:Reply-To': email,
        subject: 'New message from tomasstark.rocks',
        html: message.replace(/\n/g, '<br/>')
    };

    nodemailerMailgun.sendMail(mailOptions, function(error, info) {
        if (error) {
            res.send({status: error + info});
        } else {
            res.send({status: 'sent'});
        }
    });
});

app.get('/robots.txt', function (req, res) {
    res.type('text/plain');
    res.sendFile(__dirname + '/robots.txt');
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
