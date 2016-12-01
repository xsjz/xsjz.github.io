var express = require('express');
var app = express();

app.set('views',__dirname+'/views');
app.set('view engine','xtpl')

//设置静态资源
app.use('/',express.static('public'))
app.use('/',express.static('uploads'))

//app.use('/index',express(__dirname+'/dashboard/'))
//app.use('/settings',express(__dirname+'/settings/'))

//挂载子路由
var index = require('./controllers/index');
var user = require('./controllers/user');
var teacher = require('./controllers/teacher');
app.use('/:index?',index);
app.use('/user',user);
app.use('/teacher',teacher);

app.listen(3000,function(){
  console.log('running.......');
});
