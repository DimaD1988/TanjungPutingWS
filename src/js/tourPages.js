'use strict';
/* //// Tour Pages //// */
function tourPages() {
	// Variables
	const tourDaysSelector = ['.d3n2', '.d4n3', '.d5n4'];
	const leftBtn = document.querySelector('.btn-left');
	const rightBtn = document.querySelector('.btn-right');
	let tourPage = 0;

	// Functions
	function addNone(curTour) {
		tourDaysSelector.forEach((tour, i) => {
			if (curTour !== i) {
				document.querySelector(`${tour}`).classList.add('none');
				document.querySelector('.page-img-box').classList.remove(tour.slice(1));
			} else {
				document.querySelector(`${tour}`).classList.remove('none');
				document.querySelector('.page-img-box').classList.add(tour.slice(1));
			}
		});
	}

	function prevTourPage() {
		if (tourPage === 0) {
			tourPage = tourDaysSelector.length - 1;
			addNone(tourDaysSelector.length - 1);
		} else {
			tourPage--;
			addNone(tourPage);
		}
	}

	function nextTourPage() {
		if (tourPage === tourDaysSelector.length - 1) {
			tourPage = 0;
			addNone(0);
		} else {
			tourPage++;
			addNone(tourPage);
		}
	}

	function initTourPage() {
		addNone(0);
	}
	initTourPage();

	// Event Handlers
	leftBtn.addEventListener(`click`, prevTourPage);
	rightBtn.addEventListener(`click`, nextTourPage);
}
tourPages();
