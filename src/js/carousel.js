'use strict';
/* //// image root Data //// */
const data = [
	'1.0',
	'1.1',
	'1.2',
	'1.3',
	'1.4',
	'3-2.0',
	'3-2.1',
	'3-2.2',
	'3-2.3',
	'3-2.4',
	'3-2.5',
	'3-2.6',
	'3-2.7',
	'3-4.0',
	'3-4.1',
	'3-4.2',
	'3-4.3',
	'3-4.4',
	'3-4.5',
	'3-4.6',
	'3-4.7',
	'3-4.8',
	'3-4.9',
	'3-4.10',
	'3-4.11',
	'3-4.12',
	'4-3.0',
	'4-3.1',
	'4-3.2',
	'4-3.3',
	'4-3.4',
	'4-3.5',
	'4-3.6',
	'4-3.7',
	'4-3.8',
	'4-3.9',
];
/* //// Carousel //// */
const carousel = function () {
	// Variables
	const frames = document.querySelectorAll('.carousel figure');
	const btnFirst = document.getElementById('firstPic');
	const btnLeft = document.getElementById('prevPic');
	const infoTab = document.querySelector(`#curPic span`);
	const btnRight = document.getElementById('nextPic');
	const btnLast = document.getElementById('lastPic');
	const maxFrame = frames.length;
	let curFrame = 0;
	// Functions
	const goToFrame = function (frame) {
		frames.forEach(
			(s, i) => (s.style.transform = `translateX(${100 * (i - frame)}%)`)
		);
	};
	function firstFrame() {
		curFrame = 0;
		goToFrame(0);
		curPosition(1, maxFrame);
	}
	function prevFrame() {
		curFrame === 0 ? (curFrame = maxFrame - 1) : curFrame--;
		goToFrame(curFrame);
		curPosition(curFrame + 1, maxFrame);
	}
	function nextFrame() {
		curFrame === maxFrame - 1 ? (curFrame = 0) : curFrame++;
		goToFrame(curFrame);
		curPosition(curFrame + 1, maxFrame);
	}
	function lastFrame() {
		curFrame = maxFrame - 1;
		goToFrame(maxFrame - 1);
		curPosition(maxFrame, maxFrame);
	}
	const init = function () {
		goToFrame(0);
		curPosition(curFrame + 1, maxFrame);
	};
	init();
	function curPosition(cur, tot) {
		infoTab.textContent = `Frame ${cur} / From ${tot}`;
	}
	// Event Handlers
	btnFirst.addEventListener(`click`, firstFrame);
	btnLeft.addEventListener(`click`, prevFrame);
	btnRight.addEventListener(`click`, nextFrame);
	btnLast.addEventListener(`click`, lastFrame);
	document.addEventListener(`keydown`, function (e) {
		e.key === `ArrowLeft` && prevFrame();
		e.key === `ArrowRight` && nextFrame();
	});
};
carousel();
