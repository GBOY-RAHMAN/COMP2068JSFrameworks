var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/javascript', function(req, res) {
  res.render('javascript');
});

router.get('/python', function(req, res) {
  res.render('python');
});

router.get('/java', function(req, res) {
  res.render('java');
});

module.exports = router;
