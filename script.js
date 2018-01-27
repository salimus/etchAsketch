let container = document.getElementById('container');
let multiColorBtn = document.getElementById('multiColor');
let colorBtn = false;
let gridSize = document.getElementById('gridSize');
let totalSize = container.clientWidth;

function createDiv(size) {
	let div = document.createElement('div');

	div.classList.add('square');
	div.style.height = `${size}px`;
	div.style.width = `${size}px`;

	return div;
}

function createGrid(size) {
	for (let i = 0; i < size * size; i++) {
		container.appendChild(createDiv(totalSize / size));
	}
}

function multiColor() {
	colorBtn = !colorBtn;
}

function getRandomizeColor() {
	let red = Math.floor(Math.random() * 256);
	let green = Math.floor(Math.random() * 256);
	let blue = Math.floor(Math.random() * 256);

	return `rgb(${red}, ${green}, ${blue})`;
}

function resetGrid() {
    if (gridSize.value < 1) return;
  
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    createGrid(gridSize.value);
}

container.addEventListener('mouseover', function(e) {
	let color = colorBtn == true ? getRandomizeColor() : 'black';

	if (e.target.classList.contains('square')) {
		e.target.style.background = color;
	}
});

createGrid(gridSize.value);







