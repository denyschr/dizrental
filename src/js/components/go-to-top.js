const goToTopBtn = document.querySelector('.go-to-top');
goToTopBtn.addEventListener('click', goToTop);
window.addEventListener('scroll', scrollTracker);

function scrollTracker() {
	const scrollOffset = window.scrollY;
	const currentScreenSize = document.documentElement.clientHeight;
	if (scrollOffset > currentScreenSize) {
		goToTopBtn.classList.add('go-to-top--active');
	} else {
		goToTopBtn.classList.remove('go-to-top--active');
	}
}

function goToTop() {
	if (window.scrollY > 0) {
		window.scrollBy(0, -40);
		setTimeout(goToTop, 0);
	}
}