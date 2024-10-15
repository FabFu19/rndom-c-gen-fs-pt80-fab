/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//card variables
const card = document.querySelector("#card");
const paloUp = document.querySelector("#palo-up");
const cardValue = document.querySelector("#card-value");
const paloDown = document.querySelector("#palo-down");
const palo = ["♥", "♦", "♣", "♠"];
const cardWord = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "K",
  "Q"
];

window.onload = function() {
  //write your code here

  getPalo();
  getCardValue();
  colorPalo(paloUp.innerText, paloUp.innerText);
};

//functions

setInterval(() => {
  getPalo();
  getCardValue();
  colorPalo();
}, 6000);

const getPalo = () => {
  let gettingPalo = palo[Math.floor(Math.random() * palo.length)];
  paloUp.innerText = gettingPalo;
  paloDown.innerText = gettingPalo;
  cardValue.innerText = gettingPalo;
};
const getCardValue = () => {
  const gettinVal = cardWord[Math.floor(Math.random() * cardWord.length)];
  cardValue.innerText = gettinVal;
  //console.log(getCardValue);
};
const colorPalo = val => {
  if (val === "♥" || val === "♦") {
    paloUp.classList.add("red-color");
    paloDown.classList.add("red-color");
    cardValue.classList.add("red-color");
  }
};
