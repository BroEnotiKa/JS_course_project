class Game {
    constructor(cards) {
        this.cards = cards
        this.animation_duration = 3000;
    }

    checkCard(card) {
        // console.log(card);
        card.style.background = 'red';
        // card.style.transform = 'rotate(360deg)'
        card.classList.add('flipped');
        const flippedCards = this.cards.filter(c => c.classList.contains('flipped'));
        if (flippedCards.length >= 2) {
            setTimeout(() => {
                for (const flippedCard of flippedCards) {
                    flippedCard.style.background = 'darkslategray';
                    flippedCard.classList.remove('flipped');
                    // card.style.transform = 'rotateY(360deg)'
                }}, this.animation_duration);
        }
    }
}

let count = parseInt((prompt('Insert number of cards: ', '40')));

let cardSection = document.querySelector('.cards')
for (let i = 1; i <= count; i++){
    cardSection.insertAdjacentHTML('beforeend', '<div class="card"></div>');
}

game = new Game(Array.from(cardSection.children));

// TODO: Сделать один обработчик на cardSection вместо кучи отдельных?
game.cards.forEach(card => {
    card.addEventListener('click', game.checkCard.bind(game, card));
    // console.log('add');
});