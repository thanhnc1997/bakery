let template = document.querySelector('main');
template.querySelector('header nav button').addEventListener('click', (e) => {
	e.preventDefault();
	e.currentTarget.classList.toggle('active');
	template.querySelector('header nav .menu').classList.toggle('show');
});

template.querySelectorAll('aside nav .menu a').forEach((item) => {
	item.addEventListener('click', (e) => {
		template.querySelector('header nav .menu').classList.remove('show');
	});
});

window.addEventListener('scroll', (event) => {
	if (window.scrollY == 0) {
		template.querySelector('video').play();
	}
});