var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});


router.get('/contact', function(req, res, next)
{
  res.render('contact', { title: 'Contact Information' });
});

router.get('/about', function(req, res, next)
{
  res.render('about', { title: 'About Me' });
});

router.get('/project', function(req, res, next)
{
  res.render('project', { title: 'My Projects' });
});

router.get('/service', function(req, res, next)
{
  res.render('service', { title: 'Service Page' });
});




module.exports = router;
