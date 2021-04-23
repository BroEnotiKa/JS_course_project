class CardsHolder {
    constructor(elementsCount) {
        this._elementsCount = elementsCount;
        this._backCardIcon = '<svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" height="100" viewBox="-64 -64 640 640" width="100"><g><path d="m256 392c-33.084 0-60 26.916-60 60s26.916 60 60 60 60-26.916 60-60-26.916-60-60-60zm0 90c-16.542 0-30-13.458-30-30s13.458-30 30-30 30 13.458 30 30-13.458 30-30 30z"/><path d="m256 0c-86.019 0-156 69.981-156 156v15h120v-15c0-19.851 16.149-36 36-36s36 16.149 36 36c0 10.578-4.643 20.59-12.74 27.471l-83.26 70.787v107.742h120v-52.258l40.976-34.837c34.968-29.714 55.024-73.052 55.024-118.905 0-86.019-69.981-156-156-156zm81.547 252.047-51.547 43.824v36.129h-60v-63.871l72.688-61.8c14.815-12.589 23.312-30.933 23.312-50.329 0-36.393-29.607-66-66-66-31.235 0-57.471 21.81-64.281 51h-60.832c7.441-62.431 60.712-111 125.113-111 69.477 0 126 56.523 126 126 0 37.034-16.201 72.04-44.453 96.047z"/></g></svg>';
        this._usedCardsIndexes = new Set()
        this._graphics = document.querySelectorAll('.graphics');
        this._cardsHolder = document.querySelector('.cards_holder');
        this._cards = []
    }

    fill() {
        this._clear();
        while(this._cardsHolder.children.length < this._elementsCount) {
            this._addTwoEqualCards();
        }
        this._cards = Array.from(this._cardsHolder.children);
    }

    get cards() {
        return this._cards;
    }

    _clear() {
        this._usedCardsIndexes = new Set();
        this._graphics = document.querySelectorAll('.graphics');
        this._cardsHolder = document.querySelector('.cards_holder');
        this._cardsHolder.innerHTML = '';
        this._cards = []
    }

    _addTwoEqualCards() {
        const graphics_type_index = Math.floor(Math.random() * this._graphics.length);
        const children = this._graphics[graphics_type_index].children;
        const icon_index = Math.floor(Math.random() * children.length);
        const res = children[icon_index].outerHTML;
        const cardIndex = graphics_type_index + "__" + icon_index;

        if (this._usedCardsIndexes.has(cardIndex)) {
            this._addTwoEqualCards();
        } else {
            this._usedCardsIndexes.add(cardIndex);

            for (let j = 0; j < 2; j++) {
                this._cardsHolder.insertAdjacentHTML('beforeend', `
<div class="card" data-card-index=${cardIndex}> 
<div class="front_card">${res}</div>
<div class="back_card">${this._backCardIcon}</div>
</div>`);
            }
        }
    }
}

export default CardsHolder;