"use strict";

// document.querySelector(".game__message").textContent = "🥳 Correct Number!";

// document.querySelector(".header__number").textContent = 6;

// document.querySelector(".game__score_span").textContent = 10;

// document.querySelector(".game__number").value = 4;

// * Check the score

// Variables
const btnCheck = document.querySelector(".btn_type_check");
const numInput = document.querySelector(".game__number");
const userMessage = document.querySelector(".game__message");

function handleNumberCheck() {
  const guess = Number(numInput.value);
  console.log(guess);
  document.querySelector(".game__message").textContent = "🥳 Correct Number!";

  if (!guess) {
    userMessage.textContent = "C'mon! You didn't even guess :)";
  }
}

btnCheck.addEventListener("click", handleNumberCheck);
