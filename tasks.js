class Game {
    constructor(cardsSection) {
        this.cardsSection = cardsSection;
        this.cards = Array.from(cardsSection.children);
        this.animation_duration = 1000;
    }

    flip(selectedCard) {
        selectedCard.classList.add('flipped');
        const flippedCards = this.cards.filter(c => c.classList.contains('flipped'));

        if (flippedCards.length === 2) {
            this.cardsSection.classList.add('pause_game');

            setTimeout(() => {
                this.cardsSection.classList.remove('pause_game');
            }, this.animation_duration);

            this.checkFindMatch(flippedCards[0], flippedCards[1]);
        }
    }

    checkFindMatch(firstCard, secondCard) {
        if (firstCard.dataset.cardIndex === secondCard.dataset.cardIndex) {
            firstCard.classList.replace('flipped', 'find_match');
            secondCard.classList.replace('flipped', 'find_match');

            // check game end
            if (!this.cards.every(card => card.classList.contains('find_match'))) return;

            setTimeout(() => {
                this.shuffleCards();
            }, this.animation_duration);
        } else {
            setTimeout(() => {
                firstCard.classList.remove('flipped');
                secondCard.classList.remove('flipped');
            }, this.animation_duration);
        }
    }

    shuffleCards() {
        this.cards.forEach(card => {
            const randomNumber = Math.floor(Math.random() * this.cards.length);
            card.classList.remove('find_match');

            setTimeout(() => {
                card.style.order = `${randomNumber}`;
            }, 400);
        })
    }
}

const cardsCount = parseInt((prompt('Insert number of cards: ', '40')));

const cardsSection = document.querySelector('.cards')
cardsSection.style.width = `${1100}px`
cardsSection.style.height = `${110 * cardsCount / 10}px`

const graphics = document.querySelectorAll('.graphics');
const questionIcon = '<svg xmlns="http://www.w3.org/2000/food" id="Capa_1" height="100" viewBox="-64 -64 640 640" width="100"><g><path d="m256 392c-33.084 0-60 26.916-60 60s26.916 60 60 60 60-26.916 60-60-26.916-60-60-60zm0 90c-16.542 0-30-13.458-30-30s13.458-30 30-30 30 13.458 30 30-13.458 30-30 30z"/><path d="m256 0c-86.019 0-156 69.981-156 156v15h120v-15c0-19.851 16.149-36 36-36s36 16.149 36 36c0 10.578-4.643 20.59-12.74 27.471l-83.26 70.787v107.742h120v-52.258l40.976-34.837c34.968-29.714 55.024-73.052 55.024-118.905 0-86.019-69.981-156-156-156zm81.547 252.047-51.547 43.824v36.129h-60v-63.871l72.688-61.8c14.815-12.589 23.312-30.933 23.312-50.329 0-36.393-29.607-66-66-66-31.235 0-57.471 21.81-64.281 51h-60.832c7.441-62.431 60.712-111 125.113-111 69.477 0 126 56.523 126 126 0 37.034-16.201 72.04-44.453 96.047z"/></g></svg>';

for (let i = 1; i <= Math.floor(cardsCount / 2); i++){
    const graphics_type_index = Math.floor(Math.random() * graphics.length);
    const children = graphics[graphics_type_index].children;
    const icon_index = Math.floor(Math.random() * children.length)
    const res = children[icon_index].outerHTML;

    for (let i = 0; i < 2; i++) {
        cardsSection.insertAdjacentHTML('beforeend', `
<div class="card" data-card-index=${graphics[graphics_type_index].className.split(' ').join('') + "__" + graphics_type_index + "__" + icon_index}> 
<div class="front_card">${res}</div>
<div class="back_card">${questionIcon}</div>
</div>`);
    }
}

const game = new Game(cardsSection);

// TODO: Сделать один обработчик на cardSection вместо кучи отдельных?
// TODO: Генерация карточек автоматически
// TODO: Нормальная генерация поля (чтобы можно было растягивать адекватно и под мобилки заходило)
game.cards.forEach(card => {
    card.addEventListener('click', game.flip.bind(game, card));
})

game.shuffleCards();
