'use strict';
/* //// Term-Payment//// */
function termPayment() {
	// Variables
	const termBtn = document.querySelector('.term-btn');
	const paymentBtn = document.querySelector('.payment-btn');
	const term = document.querySelector('.term');
	const payment = document.querySelector('.payment');
	let termBtnIsActive = true;
	// Functions
	function termKeeper() {
		termBtn.classList.add('active');
		term.classList.remove('none');
		paymentBtn.classList.remove('active');
		payment.classList.add('none');
		termBtnIsActive = !termBtnIsActive;
	}
	function paymentKeeper() {
		termBtn.classList.remove('active');
		term.classList.add('none');
		paymentBtn.classList.add('active');
		payment.classList.remove('none');
		termBtnIsActive = !termBtnIsActive;
	}
	// Event Handlers
	termBtn.addEventListener(`click`, termKeeper);
	paymentBtn.addEventListener(`click`, paymentKeeper);
}
termPayment();
