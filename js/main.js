$(function () {

	$('.slider__items').slick({
		/* 		slidesToShow: 1,
				slidesToScroll: 1, */
		fade: true,
		cssEase: 'linear',
		prevArrow: '<button class="slick-arrow arrow-prev"><img src="images/prev.svg" alt="prev arrow" /></button>',
		nextArrow: '<button class="slick-arrow arrow-next"><img src="images/next.svg" alt="next arrow" /></button>',
		asNavFor: '.slider__preview'
	});

	$('.slider__preview').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		asNavFor: '.slider__items',
		focusOnSelect: true,
		arrows: false,
		responsive: [
			{
				breakpoint: 960,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 750,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 460,
				settings: {
					slidesToShow: 2,
				}
			},
		]
	});

	$('.recent__slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 920,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 720,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				}
			},
		]
	});

	$('.header__menu-btn, .header__menu').on('click', function () {
		$('.header__menu').toggleClass('active');
		$('.header__menu-btn').toggleClass('active');
		$('body').toggleClass('lock');
	});

	/* 	$('.header__drop-down.drop-down').on('click', function () {
			$(this).children('.drop-down__list').toggleClass('active');
		}); */

});

// .drop-down__list .header__list > li'