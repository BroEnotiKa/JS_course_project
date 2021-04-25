import CardsHolder from './CardsHolder.js';
import SpeedRate from './SpeedRate.js';
import ScoreCounter from './ScoreCounter.js';

class Game {
    constructor(cardsCount) {
        this.cardsHolder = new CardsHolder(cardsCount);
        this.animation_duration = 1000 / SpeedRate.coefficient;
    }

    create() {
        this._generateField();
        this._shuffleCards();
    }

    _flip(selectedCard) {
        selectedCard.classList.add('flipped');
        const flippedCards = this.cardsHolder.cards.filter(c => c.classList.contains('flipped'));

        if (flippedCards.length === 2) {
            this.cardsHolder._cardsHolder.classList.add('pause_game');

            setTimeout(() => {
                this.cardsHolder._cardsHolder.classList.remove('pause_game');
            }, this.animation_duration);

            this._checkFindMatch(flippedCards[0], flippedCards[1]);
        }
    }

    _checkFindMatch(firstCard, secondCard) {
        if (firstCard.dataset.cardIndex === secondCard.dataset.cardIndex) {
            ScoreCounter.updateScore(true);
            firstCard.classList.replace('flipped', 'find_match');
            secondCard.classList.replace('flipped', 'find_match');
            this._checkGameEnd();
        } else {
            ScoreCounter.updateScore(false);
            setTimeout(() => {
                firstCard.classList.remove('flipped');
                secondCard.classList.remove('flipped');
            }, this.animation_duration);
        }
    }

    _checkGameEnd() {
        if (!this.cardsHolder.cards.every(card => card.classList.contains('find_match'))) return;
        setTimeout(() => {
            this._generateField();
            this._shuffleCards();
        }, this.animation_duration);
    }

    _generateField() {
        this.cardsHolder.fill();

        this.cardsHolder.cards.forEach(card => {
            card.addEventListener('click', this._flip.bind(this, card));
        })
    }

    _shuffleCards() {
        this.cardsHolder.cards.forEach(card => {
            const randomNumber = Math.floor(Math.random() * this.cardsHolder.cards.length);
            card.classList.remove('find_match');
            card.style.order = `${randomNumber}`;
        })
    }
}

export default Game;