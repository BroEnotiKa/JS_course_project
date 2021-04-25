import Game from './Game.js'
import Timer from './Timer.js'

const cardsCount = Math.min(60, parseInt((prompt('Insert number of cards (max 60): ', '40'))));

// Чтобы по центру расположить, костыль, мб можно поправить будет
if (cardsCount < 10) {
    document.querySelector('.cards_holder').style.gridTemplateColumns = `repeat(${Math.max(0, cardsCount)}, 1fr)`
}

const game = new Game(cardsCount);
game.create();
Timer.start();


// TODO: Генерация карточек автоматически
// TODO: Нормальная генерация поля (чтобы можно было растягивать адекватно и под мобилки заходило)
// TODO: Улучшить подсчет очков (функцию какую-нибудь умную придумать или найти)
// TODO: Сделать нормальную проверку при генерации поля (может зависнуть на бесконечность, т.к. карт может не хватить для всего поля)

// const fs = require('fs');
//
// fs.readdir('/', (err, files) => {
//     files.forEach(file => {
//         console.log(file);
//     });
// });

// var request = new XMLHttpRequest();
