"use strict";

// Establish Secret Number
const secretNumber = Math.trunc(Math.random() * 20 + 1);
let dynamicScore = 20;
document.querySelector(".header__number").textContent = secretNumber;

// Variables
const body = document.querySelector("body");

const btnCheck = document.querySelector(".btn_type_check");
const gameNumberInput = document.querySelector(".game__number");
const gameUserMessage = document.querySelector(".game__message");
const gameUserScore = document.querySelector(".game__score_span");
const gameScoreDisplay = document.querySelector(".header__number");

function playerWins() {
  body.classList.add("player-wins_background");
  gameScoreDisplay.classList.add("player-wins_score");
}

function handleNumberCheck() {
  const guess = Number(gameNumberInput.value);

  if (dynamicScore > 1) {
    if (!guess) {
      gameUserMessage.textContent = "C'mon! You didn't even guess :)";
    } else if (guess === secretNumber) {
      gameUserMessage.textContent = "Correct Number!";
      dynamicScore++;
      gameUserScore.textContent = dynamicScore;
      playerWins();
    } else if (guess > secretNumber) {
      gameUserMessage.textContent = "A little high...try again!";
      dynamicScore--;
      gameUserScore.textContent = dynamicScore;
    } else {
      gameUserMessage.textContent = "A little low...try again!";
      dynamicScore--;
      gameUserScore.textContent = dynamicScore;
    }
  } else {
    gameUserMessage.textContent = "You lost!";
    gameUserScore.textContent = 0;
  }
}

btnCheck.addEventListener("click", handleNumberCheck);
