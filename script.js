"use strict";

const btn_check = document.querySelector(".check");
const message = document.querySelector(".message");
const guess = document.querySelector(".guess");


const getRandomNumber = () => {
  return Math.floor(Math.random() * 20) + 1;
};

let answer = getRandomNumber();
console.log(answer);

btn_check.addEventListener("click", function () {
  let guessNum = guess.value;

  if (!guessNum) {
    message.textContent = "No Number";
  } else if (guessNum > 20) {
    message.textContent = "Guess Greater then 20";
  } else if (guessNum < 1) {
    message.textContent = "Guess Lesser then 1";
  } else{
    if(Number(guessNum)===answer){
      message.textContent = "Correct";
    } else if(guessNum>answer){
      message.textContent = "Too High!";
    } else{
      message.textContent = "Too Low";
    }
  }
});
