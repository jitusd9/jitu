window.addEventListener("DOMContentLoaded", scrollLoop, false);

var text = document.querySelector("#name");
var cirlce = document.querySelector("#circle");
var image = document.querySelector("#img_bg");
var symbols = document.querySelector("#symbols");

function scrollLoop(e) {
	// let xScrollPosition = window.scrollX;
	let yScrollPosition = window.scrollY;

	setTranslate(0, yScrollPosition * -0.6, text);
	setTranslate(0, yScrollPosition * -0.8, cirlce);
	setTranslate(0, yScrollPosition * 0.5, image);
	setTranslate(0, yScrollPosition * 0.3, symbols);

	requestAnimationFrame(scrollLoop);
}

function setTranslate(xPos, yPos, el) {
	el.style.transform = "translate3d(" + xPos + ", " + yPos + "px, 0)";
}
