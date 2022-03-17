const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
import timerValue from './easytimer.min.js'


function analogTimer() {
  const secondsDegrees = ((timerValue / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minsDegrees = ((timervalue / 60) * 360) + ((seconds/60)*6) + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;
}
