# code-quiz
A coding quiz created using JS - Week 04 Homework


## I'm sorry it's not completely finished! There are still some issues but wanted to submit what I've got

- need to fix the timer so that it restarts when goBack(); is called
- need to clear storage and score list


## Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score
```


For this code quiz I created an HTML doc that has a header and container that holds the view highscore button and timer - I positioned this using flex justify-content space-between. I then added everything else to the main element and positioned this in the centre of the page. This includes an intro div that has a heading, a quick intro and the start button. After this there is a section that holds the actual question and answers of the quiz as well as a div that the correct/wrong message will appear in. After this there is the section that will display the players score and allow them to enter their name. At the end there is of course the link to the js script.

I used adobe typekit and included the link to the stylesheet in the head.

//creating variables to link elements from the DOM to the js

//creating variables for the ans radio buttons and their labels

//creating a variable to hold the score and setting it at 0

//creating an array to hold the scores

//creating a variable to count the number of questions and setting it to 0

//creating an array of objects that hold the questions and answers - question string, answers array and correctAnswer string

//Creating a function to start the quiz - console.log the quiz has started to check that it runs, hide the intro section by changing style, display the quizEl. Call the startTimer and setQuestion functions that are defined next.

//Defining the startTimer function - console.log the timer has start to ensure it runs. Define a variable that holds the timeLeft and setting it to 15. Defining a timeInterval variable and running the setInterval function to create a countdown. if timeLeft is greater than 15 - take the timerEl and override the textContent of it to say "Time: (timeLeft)s". Decrementing the time by 1. If the time left is less than or equal to 5, change the text colour to red, continue deducting 1, if the timeLeft is equal to 0, or if the currentIndex is the same as the question length, replace the text in timerEl with "your time is up", using clearInterval to stop the timer, and run the gameOver function that is defined later. Setting this function to last for 1500 (15 seconds).

//Defining the setQuestion function - IF the currentInex (number of questions asked) is greater than or equal to the number of questions in the array, call the gameOver function. Other than that - clear the placeholder text in the answer buttons. Setting the question element to the string that is in the current index of the array. Styling font weight and size to differentiate between answers. Using the same script to define the answers, both the text displayed on the DOM and the value of the radio button.

//Adding an event listener forEach answer button - when clicked, run the checkAns function.

//Defining checkAns function - IF the currentIndex is less than the number of questions in the array (-1 as it starts at 0), console.log whether or not it is true that the value of the target that was clicked is equal to the correctAnswer string. IF it is true, remove text from the answers, increase the count of the currentIndex, increase the score count, console.log the score to ensure it is increasing, and print the string "Correct!" on the DOM in the rightWrong element. IF the previous is not true, again, remove the text to restart the questions, still increase the index count, print "Wrong!" on the screen. Else, increase currentIndex, setTimeout, if the answer is false, set next question.

//Deducting time not working

//Defining gameOver function - hide the quiz element, show the gave over element, insert users score into the finalScore element - console log their score.

//Add an event listener to the start quiz button - when clicked, call startQuiz function.

//Creating a function to handle the form when submitted - prevent default refresh, create a variable to hold users name input - taking the value of the input field and storing it in the variable. IF no name is entered, create an alert. Push the users name and score to the scoreArr defined previously. Creating variable to hold the existing scores being stored, checking local storage if they exist - if they ! dont exist, create an array to store them. Push the name to the array and setItem in local storage. Create a variable scoreList and creating a div on the DOM to print the name and score. Calling showHighscore function.

//Defining showHighscore - hide gameOver, quizEl and Intro, show highScore element

//Function to clear storage - redefine innerhtml of scorelist as "", .clear() local storage of window.
        - not working^^

//Adding event listeners to clear scores, score button, form, back buttons

//Defining goBack function - show intro again, hide the rest of the elements, reset currentIndex, score, time left and timer element (not working.)



## Deployed Site
[a](https://lauren-briggs.github.io/code-quiz/) 

## Screnshot of deployed site
[a](assets/img/screenshot.png)