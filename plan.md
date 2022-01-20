get the total number of bootcampers
get random number between zero and total min one
get that bootcamper with that id
check whether if it is chosen
if true generate another number and go back to line 2
else change the chosen true

Create two components
-Coin
div
circular
heads/tails dependant on outcome of flip
-Text
h3
initial state - flip coin instruction
setState - Answer Question/Pick another bootcamper
App
-coin onClick
-random choice of 1(heads)/2(tails)
-if statement - if 1, set prop of text component to be 'Answer question' - else if 2, set prop of text component to be 'Pick another bootcamper'
