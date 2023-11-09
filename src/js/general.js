const headerEL = document.querySelector('header');
const navList = document.querySelector('.nav-list');
const menuBtn = document.getElementById('menu');
const roll = document.querySelectorAll('header figure div');
const secHeroEl = document.getElementById('sec-hero');
/* //// Mobile Navigation //// */
let navListIsOpen = false;
menuBtn.addEventListener('click', () => {
	headerEL.classList.add('nav-open');
	navListIsOpen = true;
	roll.forEach((i) => {
		i.style.display = 'block';
		i.classList.add('rotate-active');
		i.classList.remove('closed');
	});
});
navList.addEventListener('click', () => {
	if (navListIsOpen) {
		headerEL.classList.remove('nav-open');
		navListIsOpen = false;
		roll.forEach((i) => {
			i.classList.remove('rotate-active');
			i.classList.add('closed');
		});
	}
});
/* //// Sticky Navigation //// */
const navObs = new IntersectionObserver(
	(entries) => {
		entries[0].isIntersecting
			? headerEL.classList.remove('sticky')
			: headerEL.classList.add('sticky');
	},
	{
		root: null,
		threshold: 0,
		rootMargin: '-120px',
	}
);
navObs.observe(secHeroEl);
