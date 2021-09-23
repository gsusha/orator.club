$(document).ready(function(){
	$(window).on("scroll",function(){
		let wn = $(window).scrollTop();

		if(wn > 70){
			$(".header__menu").addClass("fixed");
		} else{
			$(".header__menu").removeClass("fixed");
		}
	});
});