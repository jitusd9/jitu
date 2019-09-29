// Menu toggel script ****************************

(function() {
	const menuBtn = document.querySelector(".nav-toggle");
	const navBar = document.querySelector(".nav");

	function toggleMenu(e) {
		navBar.classList.toggle("expanded");
		menuBtn.classList.toggle("expanded");
	}

	navBar.addEventListener("click", toggleMenu);

	menuBtn.addEventListener("click", toggleMenu);
})();
