let startvalue = document.querySelector('.big-timer');
let leftButtonElem = document.querySelector('.left-btn');
let rightButtonElem = document.querySelector('.right-btn');
let digitalTimerElem = document.querySelector('.digital-timer_timer');

let timerValue = 10;

leftButtonElem.addEventListener('mouseup', () => {
    timerValue --;
    startvalue.innerText = timerValue;
})
rightButtonElem.addEventListener('mouseup', () => {
    timerValue ++;
    startvalue.innerText = timerValue;
})

function startTimer() {
    let timer = new easycounter.Timer();
    Timer.start({countdown: true, startValues: {seconds: timerValue}});
    digitalTimerElem.innerHTML = timer.getTimeValues().toString();
    timer.start();
    
    timer.addEventListener('secondsUpdated', function (e) {
        digitalTimerElem.innerHTML = timer.getTimeValues().toString();
    });
    
    timer.addEventListener('targetAchieved', function (e) {
        digitalTimerElem.innerHTML = timer.getTimeValues().toString();
    });
}
startTimer();