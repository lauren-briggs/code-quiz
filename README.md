# code-quiz
A coding quiz created using JS - Week 04 Homework


#I'm sorry it's not completely finished! There are still some issues but wanted to submit what I've got

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



// I created a function that, when I press the start button:
        hides the intro section
        shows the quiz section
        starts the timer

// 

// I need to set the correct answer

// When I answer correctly I then change the text content again and display "correct!"

// When I answer incorrectly I display "wrong!" and deduct time

