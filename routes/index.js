var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/home', function(req, res, next)
{

});

router.get('/ContactMe', function(req, res, next)
{

});

router.get('/aboutMe', function(req, res, next)
{

});

router.get('/projectPage', function(req, res, next)
{

});

router.get('/servicePage', function(req, res, next)
{

});




module.exports = router;
