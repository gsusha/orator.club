$(document).ready(function(){
	$(window).on("scroll",function(){
		let wn = $(window).scrollTop();

		if(wn > 85){
			$(".header__menu").addClass("fixed");
		} else{
			$(".header__menu").removeClass("fixed");
		}
	});
});