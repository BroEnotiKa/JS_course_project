import Game from './Game.js'

const cardsCount = Math.min(60, parseInt((prompt('Insert number of cards (max 60): ', '40'))));

// if (cardsCount < 10) {
//     document.querySelector('.cards_holder').style.gridTemplateColumns = `repeat(${Math.max(0, cardsCount)}, 1fr)`
// }

const game = new Game(cardsCount);
game.create();

// TODO: Генерация карточек автоматически
// TODO: Нормальная генерация поля (чтобы можно было растягивать адекватно и под мобилки заходило)
// TODO: Сделать таймер и подсчет очков игрока
// TODO: Сделать нормальную проверку при генерации поля (может зависнуть на бесконечность, т.к. карт может не хватить для всего поля)

const fs = require('fs');

fs.readdir('/', (err, files) => {
    files.forEach(file => {
        console.log(file);
    });
});