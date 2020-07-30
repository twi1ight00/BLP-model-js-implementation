var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'access control verification' });
});
router.get('/blp',function(req,res){
  res.render('blp',{
    title:'Bell-Lapadula Model'
  });
});

module.exports = router;
