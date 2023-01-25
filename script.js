"use strict";

// * Establish Secret Number on load
const secretNumber = Math.trunc(Math.random() * 20 + 1);
let dynamicScore = 20;

// * Game Variables
const body = document.querySelector("body");
const btnCheck = document.querySelector(".btn_type_check");
const btnReset = document.querySelector(".btn_type_reset");
const gameNumberInput = document.querySelector(".game__number");
const gameUserMessage = document.querySelector(".game__message");
const gameUserScore = document.querySelector(".game__score_span");
const gameScoreDisplay = document.querySelector(".header__number");

// * Player wins!!!
function playerWins() {
  body.classList.add("player-wins_background");
  gameScoreDisplay.classList.add("player-wins_score");
  gameScoreDisplay.textContent = secretNumber;
}

// * Playing the Game
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

// * Resetting the Game
function handleGameReset() {
  body.classList.remove("player-wins_background");
  gameScoreDisplay.classList.remove("player-wins_score");
  gameScoreDisplay.textContent = "?";
  gameUserScore.textContent = "20";
  gameUserMessage.textContent = "Start guessing...";
}

btnReset.addEventListener("click", handleGameReset);
