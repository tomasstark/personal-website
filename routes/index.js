var express = require('express');
var router = express.Router();

router.get('/contactme', function(req, res, next) {
    res.send('hahaha'); 
});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Tomas Stark' });
});


module.exports = router;
