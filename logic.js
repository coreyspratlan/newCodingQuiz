// setting the time for the countdown
var startTime = 3;
// setting the count down time to minutes
var quizTime = startTime * 60;
// setting the timer element to a variable
var timerEl = document.getElementById("timer");
// creating an event when the start button is clicked
document.getElementById("start-button").addEventListener("click", function startQuiz() {
    // setting the countdown interval to decrease by one second
    setInterval(countDown, 1000);
    // creating a function to countdown from the start time until zero minutes/seconds are left
    function countDown() {
        var minutes = Math.floor(quizTime / 60);
        var seconds = quizTime % 60;

        seconds = seconds < 10 ? "0" + seconds : seconds;
        timerEl.innerHTML = minutes + ":" + seconds;
        quizTime--;
        if (quizTime <= 0) {
            clearInterval(quizTime = 0);
        }
    }
}
    // when the start button is clicked, I want to display the first question in the array



);
// calling the count down function once the start button has been clicked
countDown();





