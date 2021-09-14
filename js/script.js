/*    Swiper     */

var swiper = new Swiper('.swiper-container', {
	slidesPerView: 2.2,
	spaceBetween: 30,
	loop: true,
	loopedSlides: 5,
	speed: 12000,
	loopFillGroupWithBlank: true,
	autoplay: {
		delay: 0,
		disableOnInteraction: false,
		reverseDirection: true,
		stopOnLastSlide: false,
	},
	breakpoints: {
		1024: {
			slidesPerView: 2,
			loop: true,
		},

		767: {
			slidesPerView: 1.5,
			speed: 12000,
		},
		600: {
			slidesPerView: 1.5,
			centeredSlides: true,
			spaceBetween: 30,
		},
		479: {
			slidesPerView: 1,
			centeredSlides: true,
			spaceBetween: 15,
			loop: false,
			scrollbar: {
				el: '.swiper-scrollbar',
				hide: false,
			},
		},
	}
});

$(function() {
	
	/* Smooth scroll */

	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		var blockId = $(this).data('scroll'),
		blockOffset = $(blockId).offset().top;

		$("html, body").animate({
			scrollTop: blockOffset
		}, 800);
	});

		/* Top Button */

	$(window).scroll(function(){
		if($(this).scrollTop() > 100){
			$('#topBtn').addClass("fade").removeClass("fade_out");
		} else {
			$('#topBtn').removeClass("fade").addClass("fade_out");
		}
	});

	$('#topBtn').click(function(){
		$('html, body').animate({scrollTop: 0},800);
	});

});

$(function() {

	/* Nav burger */
	$("#nav_toggle").on("click", function(event) {
		event.preventDefault();
		$(this).toggleClass("active");
		$("#nav").toggleClass("active");
		$("#static").toggleClass("static");
	});
});
