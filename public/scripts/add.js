define(function(require,exports,module){
  var $ = require('jquery');
  $('#addTeacher').on('submit',function(){
    var formData=$(this).serialize();
    var url=$('#addTeacher').attr("action");
    $.ajax({
      url: url,
      type:'post',
      data:formData,
      success:function(info){
        alert(info.msg);
        if(info.code===10000){
          //location.reload();
        }
      }
    });
    return false;
  })
})
