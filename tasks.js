class Game {
    constructor(cards) {
        this.cards = cards;
    }

    flip(selectedCard) {
        selectedCard.classList.add('flipped');
    }
}

let cardsCount = parseInt((prompt('Insert number of cards: ', '40')));

let cardSection = document.querySelector('.cards')
cardSection.style.width = `${1100}px`
cardSection.style.height = `${110 * cardsCount / 10}px`

for (let i = 1; i <= cardsCount; i++){
    cardSection.insertAdjacentHTML('beforeend', '<div class="card">' +
        '<div class="front_card"></div>' +
        '<div class="back_card"><svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" height="100" viewBox="-64 -64 640 640" width="100"><g><path d="m256 392c-33.084 0-60 26.916-60 60s26.916 60 60 60 60-26.916 60-60-26.916-60-60-60zm0 90c-16.542 0-30-13.458-30-30s13.458-30 30-30 30 13.458 30 30-13.458 30-30 30z"/><path d="m256 0c-86.019 0-156 69.981-156 156v15h120v-15c0-19.851 16.149-36 36-36s36 16.149 36 36c0 10.578-4.643 20.59-12.74 27.471l-83.26 70.787v107.742h120v-52.258l40.976-34.837c34.968-29.714 55.024-73.052 55.024-118.905 0-86.019-69.981-156-156-156zm81.547 252.047-51.547 43.824v36.129h-60v-63.871l72.688-61.8c14.815-12.589 23.312-30.933 23.312-50.329 0-36.393-29.607-66-66-66-31.235 0-57.471 21.81-64.281 51h-60.832c7.441-62.431 60.712-111 125.113-111 69.477 0 126 56.523 126 126 0 37.034-16.201 72.04-44.453 96.047z"/></g></svg></div>' +
        '</div>');
}

const game = new Game(Array.from(cardSection.children));

// TODO: Сделать один обработчик на cardSection вместо кучи отдельных?
// TODO: Генерация карточек автоматически
// TODO: Нормальная генерация поля (чтобы можно было растягивать адекватно и под мобилки заходило)
// TODO: Проверка условия игры и ее завершение

game.cards.forEach(card => {
    card.addEventListener('click', game.flip.bind(game, card));
})