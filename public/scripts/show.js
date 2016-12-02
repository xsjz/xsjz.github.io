define(function(require,exports,module){
  var $ = require('jquery');
  var template=require('template');

  var tcModel=require('../../models/teacher');

  var $teacherModal = $("#teacherModal");

  $teacherModal.on('click','a.preview',function(){
    console.log("----------------");
    var tc_id = $(this).attr("data-id");
    $.ajax({
      url:'/teacher/edit',
      type:'post',
      data:{
        tc_id:tc_id
      },
      success:function(info){
        var html= template('teacherTpl',info);

        teacherModal.find('table').append(html);

        teacherModal.modal();
      }
    })
  })
})
