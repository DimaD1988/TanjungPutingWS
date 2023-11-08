const headerEL = document.querySelector('header .container');
const navList = document.querySelector('.nav-list');
const menuBtn = document.getElementById('menu');
/* //// Navigation //// */
let navListIsOpen = false;
menuBtn.addEventListener('click', () => {
	headerEL.classList.add('nav-open');
	navListIsOpen = true;
});
navList.addEventListener('click', () => {
	if (navListIsOpen === true) {
		headerEL.classList.remove('nav-open');
		navListIsOpen = false;
	}
});
