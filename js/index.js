$(function(){
	$('.l_area p').each(function(index){
		$(this).click(function(){
			$('.l_area p').removeClass('on1').eq(index).addClass('on1');
			$('.area_sch').hide().eq(index).show();
		})
	})
})