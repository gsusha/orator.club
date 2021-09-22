/* Нажатие на кнопку "Current website" скрывает блок Coming */
$(document).ready(function() {
	$('.coming-desktop__btn, .coming-mobile__btn').click(function(event) {
		$('.wrapper').addClass('active');
		$('.coming-desktop, .coming-mobile').addClass('hidden');
	});
});



/* Слайдер */
let slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
    showSlides(slideIndex += 1);
}

function minusSlide() {
    showSlides(slideIndex -= 1);  
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("space__item");
    let dots = document.getElementsByClassName("space__nav-item");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

