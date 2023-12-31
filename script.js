"use strict";

const btn_check = document.querySelector(".check");
const message = document.querySelector(".message");
const guess = document.querySelector(".guess");
const score = document.querySelector(".score");
const highscore = document.querySelector(".highscore");
const number = document.querySelector(".number");
const bgcolor = document.querySelector("body").style;
const reset = document.querySelector(".again");

let curScore = 20;
let curHighScore = 0;
const getRandomNumber = () => {
  return Math.floor(Math.random() * 20) + 1;
};

function resetGame() {
  bgcolor.backgroundColor = "#222";
  curScore = 20;
  answer = getRandomNumber();
  console.log(answer);
  guess.value = "";
  number.textContent = "?";
  number.style.width = "15rem";
  displayMessage("Start guessing...");
}

function displayMessage(mess) {
  message.textContent = mess;
}

let answer = getRandomNumber();
console.log(answer);

btn_check.addEventListener("click", function () {
  let guessNum = guess.value;

  if (!guessNum) {
    displayMessage("No Number");
  } else if (curScore > 1) {
    if (Number(guessNum) === answer) {
      displayMessage("Correct");
      number.textContent = answer;
      curHighScore = curScore;
      bgcolor.backgroundColor = "#60b347";
      number.style.width = "30rem";

      if (curHighScore > highscore.textContent)
        highscore.textContent = curHighScore;
    } else {
      // message.textContent = answer < guessNum ? "Too High!" : "Too Low";
      displayMessage(answer < guessNum ? "Too High!" : "Too Low");
      curScore -= 1;
      score.textContent = curScore;
    }
  } else {
    displayMessage("You Lost The Game");
    curScore -= 1;
    score.textContent = curScore;
    number.textContent = answer;
    bgcolor.backgroundColor = "red";
  }
});

reset.addEventListener("click", function () {
  resetGame();
});
