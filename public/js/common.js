define(function (require, exports, module) {

	var $ = require('jquery');

	var NProgress = require('nprogress');

	NProgress.start();

	NProgress.done();
 
 var pathname=location.pathname;
 console.log(pathname);
	$('.navs ul').prev('a').on('click', function () {
		$(this).next().slideToggle(); 
    return false
	});
   
  $('.navs a').each(function(){
    if(pathname===$(this).attr("href")){
      $(this).addClass("active");
    }
  });

});
