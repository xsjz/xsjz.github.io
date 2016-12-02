var db=require('../config/db.js');

exports.add=function(body,callback){
   db.query('INSERT INTO `teacher` SET ?',body,callback);
}

exports.show=function(callback){
   db.query('SELECT * FROM `teacher`',callback);
}

exports.find=function(body,callback){
   db.query('SELECT * FROM `teacher` WHERE tc_id=?',body,callback);
}

exports.edit=function(body,callback){
  //因为数据库中tc_id是主键，不可更新，要先把body中该属性删除
    var tc_id = body.tc_id;
    delete body.tc_id;
    console.log(body);
   db.query('UPDATE `teacher` SET ? WHERE `tc_id`='+tc_id,body,callback);
}
