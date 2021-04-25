import SpeedRate from "./SpeedRate.js";


class TimerClass {
    constructor(){
        this._timerHtml = document.querySelector('.timer');
        this._tick = this._create();
        this._stopFlag = false;
    }

    start() {
        this._stopFlag = false;

        let timerClass = this;
        let timer = function() {
            timerClass._tick();
            if (timerClass._stopFlag) return;
            setTimeout(timer, SpeedRate.coefficient * 1000);
        }
        timer();
    }

    clear() {
        this._timerHtml.childNodes[0].nodeValue = '0';
        this._tick = this._create();
    }

    stop() {
        this._stopFlag = true;
    }

    _create()
    {
        let timerNode = this._timerHtml.childNodes[0];
        let sec = parseInt(timerNode.nodeValue);
        return function() {
            timerNode.nodeValue = (++sec).toString();
        }
    }
}

const Timer = new TimerClass();

export default Timer;