class LoadingSpinner {
	constructor () {
		this.body = document.querySelector('body');
		document.addEventListener('readystatechange',this.loadingSpinnerCase);
	}
    
	loadingSpinnerCase() {
		const loadingSpinnereEl = document.querySelector('.loading-spinner');
		if (document.readyState == 'complete') {
			this.body.style.overflow = 'auto';
			loadingSpinnereEl.classList.add('animated', 'fadeOut');
			loadingSpinnereEl.remove();
		}
	}
}

new LoadingSpinner ();