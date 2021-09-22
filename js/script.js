/* Нажатие на кнопку "Current website" скрывает блок Coming */
$(document).ready(function() {
	$('.coming-desktop__btn, .coming-mobile__btn').click(function(event) {
		$('.wrapper').addClass('active');
		$('.coming-desktop, .coming-mobile').addClass('hidden');
	});
});


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