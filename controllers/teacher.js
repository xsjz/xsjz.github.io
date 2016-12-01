var express = require('express');
var router = express.Router();

module.exports=router;

router.get('/list',function(req,res){
  res.render('teacher/list',{});
})
router.get('/add',function(req,res){
  res.render('teacher/add',{});
})
