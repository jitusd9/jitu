const allCards = document.querySelectorAll('.card');

allCards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('card-expand');
    })
})