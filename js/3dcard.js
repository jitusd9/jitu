// if (window.innerWidth > 800) {
// 	let cards = document.querySelectorAll(".card");

// 	cards.forEach(card => {
// 		card.addEventListener("mousemove", e => {
// 			// console.log(x, y);
// 			// console.log(e.pageX, e.pageY);

// 			dom_rect = card.getBoundingClientRect();
// 			mouseX = e.clientX - dom_rect.left;
// 			mouseY = e.clientY - dom_rect.top;

// 			let degy = (dom_rect.width / 2 - mouseX) / 20;
// 			let degx = -(dom_rect.height / 2 - mouseY) / 20;

// 			card.style.transform = `rotateX(${degx}deg) rotateY(${degy}deg) rotateZ(0deg)`;
// 		});

// 		card.addEventListener("mouseout", () => {
// 			card.style.transform = `rotateX(0deg) rotateY(0deg) rotateZ(0deg) `;
// 		});
// 	});
// }

// my photo card 
const frontSide = document.querySelector(".photo-front");
const backSide = document.querySelector(".photo-back");

setInterval(() => {
    frontSide.classList.toggle('active');
    backSide.classList.toggle('active');
}, 6000);
