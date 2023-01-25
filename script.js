"use strict";

// document.querySelector(".game__message").textContent = "🥳 Correct Number!";

// document.querySelector(".header__number").textContent = 6;

// document.querySelector(".game__score_span").textContent = 10;

// document.querySelector(".game__number").value = 4;

// * Check the score

// Establish Secret Number
const secretNumber = Math.trunc(Math.random() * 10 + 1);

// Variables
const btnCheck = document.querySelector(".btn_type_check");
const numInput = document.querySelector(".game__number");
const userMessage = document.querySelector(".game__message");
document.querySelector(".header__number").textContent = secretNumber;

function handleNumberCheck() {
  const guess = Number(numInput.value);

  userMessage.textContent = "🥳 Correct Number!";

  if (!guess) {
    userMessage.textContent = "C'mon! You didn't even guess :)";
  } else if (guess === secretNumber) {
    userMessage.textContent = "Correct Number!";
  } else if (guess > secretNumber) {
    userMessage.textContent = "A little high...try again!";
  } else {
    userMessage.textContent = "A little low...try again!";
  }
}

btnCheck.addEventListener("click", handleNumberCheck);
