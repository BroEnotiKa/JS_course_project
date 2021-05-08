import Game from './Game.js'
import Timer from './Timer.js'

const width = Math.max(0, Math.min(10, parseInt((prompt('Insert width (max 10): ', '8')))))
const height = Math.max(0, Math.min(10, parseInt((prompt('Insert height (max 6): ', '4')))))

if (height > 0)
    document.querySelector('.cards_holder').style.gridTemplateColumns = `repeat(${width}, 1fr)`

const game = new Game(width, height);
await game.create();

Timer.start();

// TODO: Исправить зашитую ссылку в cardsholder :)
// TODO: Генерация карточек автоматически
// TODO: Нормальная генерация поля (чтобы можно было растягивать адекватно и под мобилки заходило)
// TODO: Улучшить подсчет очков (функцию какую-нибудь умную придумать или найти)
