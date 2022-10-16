const board = document.querySelector('#board');
const SQUARES_NUMBER = 950;
const colors = ['#e87368', '#60e667', '#dee64e', '#eb59dc', '#6b76ed'];

for (let i = 0; i < SQUARES_NUMBER; i++) {
	const square = document.createElement('div');
	square.classList.add('square');
	board.append(square);

	square.addEventListener('mouseover', () => setColor(square));
	square.addEventListener('mouseleave', () => removeColor(square));
}

function setColor(element) {
	const color = getRandomColor();

	element.style.backgroundColor = color;
	element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
	element.style.backgroundColor = 'rgb(224, 243, 104)';
	element.style.boxShadow = '0 0 2px rgb(218, 241, 64)';
}

function getRandomColor() {
	return colors[Math.floor(Math.random() * colors.length)];
}