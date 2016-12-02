var express = require('express');
var router = express.Router();
var tcModel = require('../models/teacher');

module.exports=router;

router.get('/list',function(req,res){
  tcModel.show(function(err,result){
    if(err) return;
    res.render('teacher/list',{teachers:result});
  })
})

router.get('/add',function(req,res){
  res.render('teacher/add',{});
})

router.post('/add',function(req,res){
  var body=req.body;
  delete body.tc_id;
  tcModel.add(body,function(err,result){
    if(err) console.log(err);
    res.json({
      code: 10000,
      msg: '添加成功！',
      result: {}
    });
  })
})

router.get('/edit/:tc_id',function(req,res){
  //req.params请求路径中的信息
  var tc_id = req.params.tc_id;
  tcModel.find(tc_id,function(err,result){
    if(err) console.log(err);
    var teacher=result[0];
    res.render('teacher/add',{teacher:teacher});
  })
})

router.post('/edit',function(req,res){
  var body=req.body;
  tcModel.edit(body,function(err,result){
    if(err) return;
    // var teacher=result[0];
    res.json({
      code: 10000,
      msg: '修改成功！',
      result: {}
    })
  })
})

