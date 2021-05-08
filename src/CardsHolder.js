class CardsHolder {
    constructor() {
        this._cardsHolder = document.querySelector('.cards_holder');
        this._cards = []
    }

    async fill(width, height) {
        this._clear();

        await fetch(`http://127.0.0.1:3000/field/?width=${width}&height=${height}`)
            .then((response) => {
                if (response.status === 400)
                    throw new Error('Incorrect size!');
                return response.text();
            })
            .then(text => text.split('\n'))
            .then((cards) => {
                for (const card of cards) {
                    this._cardsHolder.insertAdjacentHTML('beforeend', card)
                }
            });

        this._cards = Array.from(this._cardsHolder.children);
    }

    get cards() {
        return this._cards;
    }

    _clear() {
        this._cardsHolder = document.querySelector('.cards_holder');
        this._cardsHolder.innerHTML = '';
        this._cards = []
    }
}

export default CardsHolder;