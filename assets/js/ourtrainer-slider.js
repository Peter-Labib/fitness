class OurTrainerSlider {
	constructor() {
		this.prevBtn = document.querySelector('.our-trainer__pic .owl-prev');
		this.nextBtn = document.querySelector('.our-trainer__pic .owl-next');
		this.prevBtn.addEventListener('click',this.ourTrainerInfoHandler);
		this.nextBtn.addEventListener('click',this.ourTrainerInfoHandler);
	}

	ourTrainerInfoHandler() {    
		const ourTrainerInfo = document.querySelectorAll('.our-trainer__info');
		const carouselActiveItem = document.querySelector('.our-trainer__pic .owl-item.center div');
        
		ourTrainerInfo.forEach(value=>{
			value.classList.remove('d-block');
			value.classList.add('d-none');
			if(carouselActiveItem.dataset.instructor === value.dataset.instructor){
				value.classList.add('d-block');
				value.classList.remove('d-none');
			}
		});
	}
}

const ourTraine = new OurTrainerSlider();
ourTraine.ourTrainerInfoHandler();

