function imgSlider(picture) {
	document.querySelector('.pepsi').src = `./img/${picture}`;
}

function changeBgColor(color) {
	const sec = document.querySelector('.sec');
	sec.style.backgroundColor = color;
}