import Game from './Game.js'

const cardsCount = parseInt((prompt('Insert number of cards: ', '40')));

const cardsSection = document.querySelector('.cards')
// cardsSection.style.width = `${1100}px`
// cardsSection.style.height = `${110 * Math.ceil(cardsCount / 10)}px`

const game = new Game(cardsSection, cardsCount);

// TODO: Генерация карточек автоматически
// TODO: Нормальная генерация поля (чтобы можно было растягивать адекватно и под мобилки заходило)
// TODO: Сделать таймер и подсчет очков игрока
// TODO: Сделать нормальную проверку при генерации поля (может зависнуть на бесконечность, т.к. карт может не хватить для всего поля)
// TODO: Отрефакторить весь этот ужас и сделать его читабельнее
game.generateField();
game.shuffleCards();
console.log("WAS HERE");

console.log('./svg/')

const fs = require('fs');

fs.readdir('/', (err, files) => {
    files.forEach(file => {
        console.log(file);
    });
});