$(document).ready(function() {
	$('.plug-desktop__btn').click(function(event) {
		$('.wrapper').toggleClass('active');
		$('.plug-desktop').toggleClass('hidden');
	});
});