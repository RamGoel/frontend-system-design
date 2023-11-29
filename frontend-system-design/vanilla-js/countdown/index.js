import { parse } from "path";

const hour = document.getElementById('hour-picker');
const minute = document.getElementById('minute-picker');
const second = document.getElementById('second-picker');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');

(() => {

    start.addEventListener('click', () => {
        if (hour.value === '' && minute.value === '' && second.value === '') {
            return;
        }

        let hourValue = parseInt(hour.value);
        let minuteValue = parseInt(minute.value);
        let secondValue = parseInt(second.value);

        function normalizeValues(hr, min, sec){
            if(hourValue > 23){
                minuteValue+=hourValue-23
                hourValue = 23;
            }

            if(minuteValue > 59){
                secondValue+=minuteValue-59
                minuteValue = 59;
            }

            if (secondValue > 59) {
                minuteValue += secondValue - 59
                secondValue = 59;
            }
        }

    })

})()