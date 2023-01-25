"use strict";

// Establish Secret Number
const secretNumber = Math.trunc(Math.random() * 20 + 1);

// Variables
const btnCheck = document.querySelector(".btn_type_check");
const numInput = document.querySelector(".game__number");
const userMessage = document.querySelector(".game__message");
const gameScore = document.querySelector(".game__score_span");
let userScore = 20;
document.querySelector(".header__number").textContent = secretNumber;

function handleNumberCheck() {
  const guess = Number(numInput.value);

  userMessage.textContent = "🥳 Correct Number!";

  if (userScore > 1) {
    if (!guess) {
      userMessage.textContent = "C'mon! You didn't even guess :)";
    } else if (guess === secretNumber) {
      userMessage.textContent = "Correct Number!";
      userScore++;
      gameScore.textContent = userScore;
    } else if (guess > secretNumber) {
      userMessage.textContent = "A little high...try again!";
      userScore--;
      gameScore.textContent = userScore;
    } else {
      userMessage.textContent = "A little low...try again!";
      userScore--;
      gameScore.textContent = userScore;
    }
  } else {
    userMessage.textContent = "You lost!";
    gameScore.textContent = 0;
  }
}

btnCheck.addEventListener("click", handleNumberCheck);
