/* eslint-disable no-undef */
$('.owl-carousel.our-trainer__pic').owlCarousel({
	center: true,
	items: 2,
	loop: true,
	nav: true,
	mouseDrag:false,
	touchDrag:false,
	navText: ['<i class="fas fa-chevron-circle-left fa-2x"></i>', '<i class="fas fa-chevron-circle-right fa-2x"></i>'],
	margin: 10,
	responsive: {
		600: {
			items: 3
		}
	}
});

$('.owl-carousel.our-trainer__second-carousel').owlCarousel({
	center: true,
	// items: 2,
	loop: true,
	autoplayTimeout: 10000,
	autoplay:true,
	nav: true,
	navText: ['<i class="fas fa-chevron-circle-left fa-2x"></i>', '<i class="fas fa-chevron-circle-right fa-2x"></i>'],
	responsive: {
		600: {
			items: 5
		}
	}
});

$('.Testmonials__carousel.owl-carousel').owlCarousel({
	center: true,
	items: 1,
	loop: true,
	animateOut: 'fadeOut',
	autoplayTimeout: 10000,
	autoplay:true,
	autoplayHoverPause: true,
	nav: true,
	navText: ['<i class="fas fa-chevron-circle-left"></i>', '<i class="fas fa-chevron-circle-right"></i>'],
	margin: 10,
	responsive: {
		600: {
			items: 1
		}
	}
});

new WOW().init();
