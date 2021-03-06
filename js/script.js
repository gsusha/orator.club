// Фиксация меню
$(document).ready(function() {
	$(window).on("scroll", function() {
		let wn = $(window).scrollTop();

		if(wn > 75) {
			$(".header__menu").addClass("fixed");
		} else {
			$(".header__menu").removeClass("fixed");
		}

		if(wn > 40) {
			$(".header__mobile-wrapper").addClass("fixed");
		} else {
			$(".header__mobile-wrapper").removeClass("fixed");
		}
	});
});



// Изменение вьюпорта
resize();					// Вызов при открытии страницы

$(window).on("resize", function() {
	resize();				// Вызов при изменении размера
});

function resize() {			// Функция изменения вьюпорта
	let breakpoint = 426	// Брейкпоинт по ширине
	viewport = document.querySelector("meta[name=viewport]");

	if((window.innerWidth) <= breakpoint) {
		// viewport.setAttribute("content", "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0");
	}

	if((window.innerWidth) > breakpoint) {
		viewport.setAttribute("content", `width=device-width`);
	}
}
