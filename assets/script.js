//linking variables to elements on the DOM
//start button
var startBtn = document.querySelector(".start-btn");
//intro section
var intro = document.querySelector(".intro");
//quiz section
var quizEl = document.querySelector(".quiz");
//game over section
var gameOverEl = document.querySelector(".game-over")
//view highscores button
var scoreBtn = document.querySelector(".score-btn");
//timer
var timerEl = document.querySelector(".timer");
//question
var questionEl = document.querySelector(".question");
//answer buttons - all
var answerBtn = document.querySelectorAll(".answer-btn");
// var nextBtn = document.querySelector(".next-btn");
//individual answers
var ans1 = document.querySelector("#ans1");
var ans2 = document.querySelector("#ans2");
var ans3 = document.querySelector("#ans3");
var ans4 = document.querySelector("#ans4");
//individual answers radio
var rdAnswer1 = document.querySelector("#rdAnswer1");
var rdAnswer2 = document.querySelector("#rdAnswer2");
var rdAnswer3 = document.querySelector("#rdAnswer3");
var rdAnswer4 = document.querySelector("#rdAnswer4");
//radio buttons
var radio = document.querySelectorAll(".answer-btn");
//score
var score = 0;
//correct/wrong answer
var rightWrong = document.querySelector(".correct");
//back button
var backBtn = document.querySelector(".back-btn");
//back button #2
var backBtnHs = document.querySelector(".back-btn-hs");
//clear scores button
var clearScores = document.querySelector(".clear-btn");
//submit name form
var form = document.querySelector(".name-submit");
//variable to store name input
var nameSubmit = document.querySelector(".name");
//array to store scores
var scoreArr = [];
//view highscores element
var highScoresEl = document.querySelector(".high-scores");
//final score display p eleemnt
var finalScore = document.querySelector("#final-score");
//variable to count the number of questions
var currentIndex = 0;

var timeLeft

//defining the questions and answers in objects and arrays
const questions = [
    {
        //defining the question
        question: "Commonly used data types do NOT include:",
        answers: ["Strings", "Booleans", "Alerts", "Numbers"],
        correctAnswer: "Alerts"
    },
    {
        question: "The condition in an if / else statement is enclosed within ____.",
        answers: ["Quotes", "Curly Brackets", "Parentheses", "Square brackets"],
        correctAnswer: "Curly Brackets"
    },
    {
        question: "Arrays in Javascript can be used to store ____.",
        answers: ["Numbers & Strings", "Other Arrays", "Booleans", "All of the Above"],
        correctAnswer: "All of the Above"
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        answers: ["Commas", "Curly Brackets", "Quotation Marks", "Parentheses"],
        correctAnswer: "Quotation Marks"
    },
    {
        question: "A very useful tool used in development and debugging for printing content to the debugger is :",
        answers: ["JavaScript", "Terminal/Bash", "For Loops", "console.log"],
        correctAnswer: "console.log"
    }
];


//writing the function to start the quiz
function startQuiz() {
    console.log("The quiz has started");
    //hide the intro section
    intro.style.display = "none";
    //show the quiz section
    quizEl.style.display = "block";
    //call timer function
    startTimer();
    setQuestion();
}

//timer function
function startTimer() {
    console.log("The timer has started too");
    timeLeft = 15;
    //Using the `setInterval()` method to call a function to be executed every 1500 milliseconds
    var timeInterval = setInterval(function () {
        //as long as time left is greater than 1 - show the remaining seconds/numerical value of timeLeft
        if (timeLeft > 5) {
            // Set the `textContent` of `timerEl` to show the remaining seconds
            timerEl.textContent = 'Time: ' + timeLeft + 's';
            // Decrement `timeLeft` by 1
            timeLeft--;
        } if (timeLeft <= 5) {
            timerEl.textContent = 'Time: ' + timeLeft + 's';
            timerEl.style.color = "red";
            timeLeft--;
            console.log("5 Seconds Left")
        } if (timeLeft === 0 || currentIndex === questions.length) {
            //once timeLeft gets to 0 OR all the questions have been answered, set timerEl to an empty string
            timerEl.textContent = "Your time is up";
            //clear interval to stop timer
            clearInterval(timeInterval);
            //call display finished function - end game
            gameOver();
            console.log("Time is up");
        }
    }, 1500);
}

function setQuestion() {
    if (currentIndex >= questions.length) {
        gameOver();
        return
    }
    //remove placeholder text
    answerBtn.innerHTML = "";

    //set the question element to the current question in the array
    questionEl.textContent = questions[currentIndex].question;
    questionEl.style.fontWeight = "bolder";
    questionEl.style.fontSize = "22px";
    questionEl.style.paddingBottom = "5px";

    ans1.textContent = questions[currentIndex].answers[0];
    rdAnswer1.value = questions[currentIndex].answers[0];

    ans2.textContent = questions[currentIndex].answers[1];
    rdAnswer2.value = questions[currentIndex].answers[1];

    ans3.textContent = questions[currentIndex].answers[2];
    rdAnswer3.value = questions[currentIndex].answers[2];

    ans4.textContent = questions[currentIndex].answers[3];
    rdAnswer4.value = questions[currentIndex].answers[3];
}

//add event listener for click on answer buttons
answerBtn.forEach(function (elem) {
    elem.addEventListener("click", checkAns);
})

function checkAns(event) {
    if (currentIndex < questions.length - 1) {
        console.log(event.target.value === questions[currentIndex].correctAnswer)
        //if the answer clicked is equal to the correctAnswer in the array then...
        if (event.target.value === questions[currentIndex].correctAnswer) {
            //remove text from answerBtn
            answerBtn.innerHTML = ""
            //increase currentIndex
            currentIndex++
            //increase score
            score++
            //print score
            console.log("Score: " + score);
            //print Correct! on the screen
            rightWrong.textContent = "Correct!";
            console.log("Correct!")

        } //if not then...
        else {
            //remove text from answerBtns
            answerBtn.innerHTML = "";
            //increase index
            currentIndex++
            //TO DO: need to deduct time
            timeLeft -= 5;
            //print Wrong! on the screen
            rightWrong.textContent = "Wrong!";
            console.log("Wrong!")

        }
    } else {
        rightWrong.textContent = "";
    }

    currentIndex++;
    setTimeout(function () {
        event.target.checked = false;
        setQuestion()
    }, 200)
}

//game Over function
function gameOver() {
    //hide quiz element
    quizEl.style.display = "none";
    //show gameOverEl content
    gameOverEl.style.display = "block";
    //print players score on screen
    finalScore.textContent = "Your Score: " + score;
    console.log("Score: " + score);
}


//call start quiz function when start button is clicked
startBtn.addEventListener("click", startQuiz);

//submit name to highscores
function handleFormSubmit(event) {
    event.preventDefault();

    //selecting the name input field from DOM and creating a variable to hold its value
    var userName = nameSubmit.value;

    //if no name entered - console log following message
    if (!userName) {
        console.log("Error - no name entered");
        alert("Please enter your name!");
        return;
    }

    //push the users name and score to the score array
    scoreArr.push({ userName, score });
    console.log(scoreArr);

    //print "player (name) got a score of (score)" to the console log
    console.log("Player " + userName + " got a score of " + score);

    //check if scores are stored already and creates storage if not
    var existingScoreArr = JSON.parse(localStorage.getItem(scoreArr))
    if (!existingScoreArr) {
        existingScoreArr = []
    }
    //adding name and score to array
    existingScoreArr.push(scoreArr);
    //storing score
    localStorage.setItem(scoreArr, JSON.stringify(existingScoreArr));

    console.log(window.localStorage.scoreArr)

    console.log("This is the existing score array: " + existingScoreArr);
    console.log("This is the new score: " + scoreArr);

    //print name and score to page
    var scoreList = document.createElement("div");
    scoreList.innerHTML = nameSubmit.value + " - " + score;
    highScoresEl.appendChild(scoreList);

    showHighscore();
}


function showHighscore() {
    //hide other element and show highscores elements
    gameOverEl.style.display = "none";
    quizEl.style.display = "none";
    intro.style.display = "none";
    highScoresEl.style.display = "block";


}

//function to clear storage
function clearStorage() {
    scoreList.innerHTML = "";
    window.localStorage.clear();
}

clearScores.addEventListener("click", clearStorage);

scoreBtn.addEventListener("click", showHighscore);

form.addEventListener("submit", handleFormSubmit);

//call start quiz function when back button is clicked
backBtn.addEventListener("click", goBack);

//call start quiz function when back button is clicked
backBtnHs.addEventListener("click", goBack);


//function to go back/start over
function goBack() {
    intro.style.display = "block";
    quizEl.style.display = "none";
    gameOverEl.style.display = "none";
    highScoresEl.style.display = "none";
    currentIndex = 0;
    score = 0;
    timeLeft = 15;
    timerEl.textContent = 'Time: ' + timeLeft + 's';
}
