// setting the time for the countdown
var startTime = 3;
// setting the count down time to minutes
var quizTime = startTime * 60;
// setting the id's to each element
// var welcomeScreen = document.getElementById("welcome-screen");
var startButton = document.getElementById("start-button");
var timerEl = document.getElementById("timer");
var questionBox = document.getElementById("question-box");
var question = document.getElementById("question");
var choices = document.getElementById("choices");
// var a = document.getElementById("a");
// var b = document.getElementById("b");
// var c = document.getElementById("c");
// var d = document.getElementById("d");
var submitButton = document.getElementById("submit-button");

var questionList = 0;

// creating an event when the start button is clicked
startButton.addEventListener("click", function startQuiz() {
    // when the start button is clicked, I want to display the first question in the array
    var welcomeScreen = document.getElementById("welcome-screen");
    welcomeScreen.setAttribute("class", "hide");

    questionBox.removeAttribute("class");

    askQuestions();

    function askQuestions() {

        var questionAsked = questions[questionList];

        var questionEl = document.getElementById("question");
        questionEl.textContent = questionAsked.question;

        var a = document.getElementById("A");
        a.textContent = questionAsked.choiceA;

        var b = document.getElementById("B");
        b.textContent = questionAsked.choiceB;

        var c = document.getElementById("C");
        c.textContent = questionAsked.choiceC;

        var d = document.getElementById("D");
        d.textContent = questionAsked.choiceD;

        // for (i = 0; i < questions.length; i++) {

        // }
    }


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

});
// calling the count down function once the start button has been clicked
// countDown();



