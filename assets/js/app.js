// eslint-disable-next-line no-undef
$('.owl-carousel').owlCarousel({
	center: true,
	items:2,
	loop:true,
	nav:true,
	navText: ['<i class="fas fa-chevron-circle-left fa-2x"></i>','<i class="fas fa-chevron-circle-right fa-2x"></i>'],
	margin:10,
	responsive:{
		600:{
			items:3
		}
	}
});
