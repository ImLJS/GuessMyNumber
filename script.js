"use strict";

const btn_check = document.querySelector(".check");
const message = document.querySelector(".message");
const guess = document.querySelector(".guess");
const score = document.querySelector(".score");
const highscore = document.querySelector(".highscore");
const number = document.querySelector(".number");
const bgcolor = document.querySelector("body").style;

let curScore = 20;
const getRandomNumber = () => {
  return Math.floor(Math.random() * 20) + 1;
};

let answer = getRandomNumber();
console.log(answer);

btn_check.addEventListener("click", function () {
  let guessNum = guess.value;

  if (!guessNum) {
    message.textContent = "No Number";
  } else if (curScore > 1) {
    if (Number(guessNum) === answer) {
      message.textContent = "Correct";
      number.textContent = answer;
      highscore.textContent = curScore;
      bgcolor.backgroundColor = '#60b347';
      number.style.width = '30rem';
    } else if (guessNum > answer) {
      message.textContent = "Too High!";
      curScore -= 1;
      score.textContent = curScore;
    } else {
      message.textContent = "Too Low";
      curScore -= 1;
      score.textContent = curScore;
    }
  } else {
    message.textContent = "You Lost The Game";
    curScore -= 1;
    score.textContent = curScore;
    number.textContent = answer;
    bgcolor.backgroundColor = 'red';
  }
});
