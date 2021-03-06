
const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 30;
const ALERT_THRESHOLD = 10;

const COLOR_CODES = {
  info: {
    color: "green"
  },
  warning: {
    color: "orange",
    threshold: WARNING_THRESHOLD
  },
  alert: {
    color: "red",
    threshold: ALERT_THRESHOLD
  }
};

var timeLimit = 600;
var timePassed = 0;
var timeLeft = timeLimit;
var timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;

document.getElementById("app").innerHTML = `
<div class="base-timer" style="margin:auto;">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
      <path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining ${remainingPathColor}"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
  </svg>
  <span id="base-timer-label" class="base-timer__label">
    ${formatTime(
      timeLeft 
    )}
  </span>
</div>
`;
function onTimesUp() {
  clearInterval(timerInterval);
  document.getElementById("startBtn").disabled = false;
}

function resetTimer() {
  // const { alert, warning, info } = COLOR_CODES;
  location.reload(); 
  // timerInterval = null;
  // timeLimit = time;
  // timeLeft = timeLimit;
  // timePassed = 0;
  // document.getElementById("base-timer-label").innerHTML = formatTime(
  //   timeLeft
  // );
  // document
  //     .getElementById("base-timer-path-remaining")
  //     .classList.remove(warning.color);
  // document
  //     .getElementById("base-timer-path-remaining")
  //     .classList.remove(alert.color);
  // document
  //     .getElementById("base-timer-path-remaining")
  //     .classList.add(info.color);
}

function startTimer() {
  document.getElementById("startBtn").disabled = true;
  setRemainingPathColor(timeLeft);
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = timeLimit - timePassed;
    document.getElementById("base-timer-label").innerHTML = formatTime(
      timeLeft
    );
    setCircleDasharray();
    setRemainingPathColor(timeLeft);

    if ((timeLeft <= 0)) {
      onTimesUp();
      play();
      timeLeft = 0;
      timePassed = 0;
      timeLimit = 0;
      document.getElementById("base-timer-label").innerHTML = formatTime(
        timeLeft
      );
    }
  }, 1000);
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `${minutes}:${seconds}`;
}

function setRemainingPathColor(timeLeft) {
  const { alert, warning, info } = COLOR_CODES;
  
  if (timeLeft > warning.threshold){
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(warning.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(alert.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(info.color);

  }else if (timeLeft <= alert.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(warning.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(alert.color);
      
  } else if (timeLeft <= warning.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(info.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(warning.color);
  }
}

function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / timeLimit;
  return rawTimeFraction - (1 / timeLimit) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  document
    .getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
}

function play() {
  var audio = new Audio('https://www.freesoundslibrary.com/wp-content/uploads/2020/03/single-ding-sound-effect.mp3');
  audio.play();
}

//////////////////////////////////// INCREMENTERS
function incrementSec(){
  timeLimit++;
  timeLeft++;
  document.getElementById("base-timer-label").innerHTML = formatTime(
    timeLeft
  );
}

function incrementMin(){
  timeLimit+=60;
  timeLeft+=60;
  document.getElementById("base-timer-label").innerHTML = formatTime(
    timeLeft
  );
}

function incrementTenMin(){
  timeLimit+=600;
  timeLeft+=600;
  document.getElementById("base-timer-label").innerHTML = formatTime(
    timeLeft
  );
}

/////////////////////////////////// DECREMENTERS
function decrementSec(){
  timeLimit--;
  timeLeft--;
  document.getElementById("base-timer-label").innerHTML = formatTime(
    timeLeft
  );
}

function decrementMin(){
  timeLimit-=60;
  timeLeft-=60;
  document.getElementById("base-timer-label").innerHTML = formatTime(
    timeLeft
  );
}

function decrementTenMin(){
  timeLimit-=600;
  timeLeft-=600;
  document.getElementById("base-timer-label").innerHTML = formatTime(
    timeLeft
  );
}