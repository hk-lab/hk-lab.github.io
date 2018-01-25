$(function(){
  var pageTop = $("#page-top");
  pageTop.hide();
  pageTop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500);
    return false;
  });
  $(window).scroll(function () { 
    if($(this).scrollTop() >= 200) {
      pageTop.fadeIn();
    } else {
      pageTop.fadeOut();
    }
  });
});

$(function(){
	$('.js-tab > li').click(function(){
		$('.js-tab > li,.js-tab_content').removeClass('active');
		var tabClass = $(this).attr('class');
		$(this).addClass('active');
		$('.js-tab_content').each(function(){
			if($(this).attr('class').indexOf(tabClass) != -1){
				$(this).addClass('active').fadeIn();
			}else{
				$(this).hide();
			}
		});
	});
});