$(function(){
	var hg1=$('.main_cc').position().top;
	var hg=$(window).height();
	var fa_height=hg-hg1;
	$('.posi_fa').css('height',fa_height);
	$('.l_area p').each(function(index){
		$(this).click(function(){
			$('.l_area p').removeClass('on1').eq(index).addClass('on1');
			$('.area_sch').hide().eq(index).show();
		})
	})
})