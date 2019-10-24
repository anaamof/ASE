$('.bs').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 400);
	});
 
	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.bs').slideDown(300);
		} else {
			$('.bs').slideUp(300);
		}
	});