class NavBar {

	constructor(){
		this.navBtn = document.querySelector('.navbar__button');

		this.navBtn.addEventListener('click', this.navHandler.bind(this));
	}

	navHandler() {
		const navList = document.querySelector('.navbar__links');
		navList.classList.toggle('active');
		this.navBtn.classList.toggle('active');	
	}
}

new NavBar();