$(document).ready(function() {
	$('.coming-desktop__btn, .coming-mobile__btn').click(function(event) {
		$('.wrapper').addClass('active');
		$('.coming-desktop, .coming-mobile').addClass('hidden');
	});
});