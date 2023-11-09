'use strict';
/* //// Carousel //// */
const carousel = function () {
	// Variables
	const frames = document.querySelectorAll('.carousel figure');
	const btnFirst = document.getElementById('firstPic');
	const btnLeft = document.getElementById('prevPic');
	const btnRight = document.getElementById('nextPic');
	const btnLast = document.getElementById('lastPic');
	const maxFrame = frames.length;
	let curFrame = 0;
	console.log(maxFrame);
	// Functions
	const goToFrame = function (frame) {
		frames.forEach(
			(s, i) => (s.style.transform = `translateX(${100 * (i - frame)}%)`)
		);
	};
	function firstFrame() {
		goToFrame(0);
	}
	function prevFrame() {
		if (curFrame === 0) {
			curFrame = maxFrame - 1;
		} else {
			curFrame--;
		}
		goToFrame(curFrame);
	}
	function nextFrame() {
		if (curFrame === maxFrame - 1) {
			curFrame = 0;
		} else {
			curFrame++;
		}
		goToFrame(curFrame);
	}
	function lastFrame() {
		goToFrame(maxFrame - 1);
	}
	const init = function () {
		goToFrame(0);
	};
	init();
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
