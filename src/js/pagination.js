'use strict';
/* //// Pagination btn Data //// */
const tourData = [
	{ prev: '5D / 4N', cur: '3 Days / 2 Nights Tour', next: '4D / 3N' },
	{ prev: '3D / 2N', cur: '4 Days / 3 Nights Tour', next: '5D / 4N' },
	{ prev: '4D / 3N', cur: '5 Days / 4 Nights Tour', next: '3D / 2N' },
];
/* //// Pagination //// */
const pagination = function () {
	// Variables
	const firstTour = document.querySelector('.t3D2N');
	const secondTour = document.querySelector('.t4D3N');
	const thirdTour = document.querySelector('.t5D4N');
	const btnPrev = document.querySelector('#btn-prev span');
	const btnCur = document.querySelector('#btn-cur span');
	const btnNext = document.querySelector('#btn-next span');
	const btnLeft = document.querySelector('.btn-left');
	const btnRight = document.querySelector('.btn-right');
	let tourPage = 0;
	// Functions
	function prevPage() {
		tourPage === 0 ? (tourPage = tourData.length - 1) : tourPage--;
		currentPage(tourPage);
	}
	function nextPage() {
		tourPage >= tourData.length - 1 ? (tourPage = 0) : tourPage++;
		currentPage(tourPage);
	}
	function currentPage(page) {
		const { prev, cur, next } = tourData[page];
		btnPrev.textContent = prev;
		btnCur.textContent = cur;
		btnNext.textContent = next;
		renderContent(page);
	}
	function renderContent(tour) {
		firstTour.classList.add('none');
		secondTour.classList.add('none');
		thirdTour.classList.add('none');
		if (tour === 0) firstTour.classList.remove('none');
		if (tour === 1) secondTour.classList.remove('none');
		if (tour === 2) thirdTour.classList.remove('none');
	}
	// Event Handlers
	btnLeft.addEventListener(`click`, prevPage);
	btnRight.addEventListener(`click`, nextPage);
	document.addEventListener(`keydown`, function (e) {
		e.key === `ArrowLeft` && prevPage();
		e.key === `ArrowRight` && nextPage();
	});
};
pagination();
