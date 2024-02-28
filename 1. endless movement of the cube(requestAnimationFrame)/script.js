"use strict";

const output = document.querySelector('.output');
const container = document.querySelector('.container');
const game = { animaton: null, inplay: false, x: 0, speed: 1 };

output.addEventListener('click', (event) => {
	if (!game.inplay) {
		game.animaton = window.requestAnimationFrame(mover);
		game.inplay = true;
	} else {
		window.cancelAnimationFrame(game.animaton);
		game.inplay = false;
	}
});

function mover() {
	const dim = container.getBoundingClientRect();
	game.x +=game.speed;
	if ((game.x > dim.width-50) || (game.x < 0)) {
		game.speed *= -1;
	} 
	output.style.left = game.x + 'px';
	game.animaton = window.requestAnimationFrame(mover);
}