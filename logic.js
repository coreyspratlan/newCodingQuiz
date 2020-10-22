//setting the timer for the countdown
var startTime = 3;
let quizTime = startTime * 60;

var timerEl = document.getElementById("timer");

setInterval(countDown, 1000);

function countDown() {
    var minutes = Math.floor(quizTime / 60);
    var seconds = quizTime % 60;
    seconds = seconds < 3 ? "0" + seconds : seconds;
    timerEl.innerHTML = minutes + ":" + seconds;
    quizTime--;
}

countDown();