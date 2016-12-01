var express = require('express');
var router = express.Router();

module.exports = router;

router.get('/',function(req,res){
  //res.send('hello noejs');
  //res.render('index',{name:"jing"})
  res.render('dashboard/index',{})
  //res.render('/settings',{})
})
router.get('/setting',function(req,res){
  res.render('setting/settings',{})
})

