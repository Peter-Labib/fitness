class NavBar {

	constructor(){
		this.navBtn = document.querySelector('.navbar__button');
		this.navlist = document.querySelector('.navbar__links');
		
		this.navBtn.addEventListener('click', this.navHandler.bind(this));
		this.navlist.addEventListener('click',this.navTarget.bind(this));
		window.addEventListener('scroll',this.navColor);
	}

	navHandler() {
		const navList = document.querySelector('.navbar__links');
		navList.classList.toggle('active');
		this.navBtn.classList.toggle('active');	
	}

	navTarget (event) {
		event.preventDefault();
		const clickedElement = event.target;

		if (clickedElement.tagName == 'A'){
			const navLinkDataset =clickedElement.dataset.scroll;
			const sectionId = document.querySelector(`#${navLinkDataset}`);
			const offsetTop = sectionId.offsetTop;
			const otherLinks = this.navlist.querySelectorAll('a');
			
			otherLinks.forEach(link=>{
				link.classList.remove('active');
			});
			
			clickedElement.classList.add('active');
			window.scrollTo(0,offsetTop-100);
		}
	}

	navColor () {
		const nav = document.querySelector('nav');
		if (window.pageYOffset >= 862) {

			nav.style.backgroundColor = '#181A1F';

		} else {
			nav.style.backgroundColor= '#181a1fcc';
		}
	}
}

new NavBar();