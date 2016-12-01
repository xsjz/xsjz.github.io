var express = require('express');
var router = express.Router();

module.exports = router;

router.get('/list',function(req,res){
  res.render('user/list',{})
})
router.get('/profile',function(req,res){
  res.render('user/profile',{})
})

