"use strict";
//let parr = document.querySelector("p");
//parr.textContent = `Guess a number between 1 and 10`;
let gsecretNumb = 0;
let arrSecretN = [];
let numMax = 10;
let attempts = 1;
let numbrBox = document.getElementById("usrNum");
let guessbtn = document.querySelector(".container__boton");
let newGamebtn = document.querySelector("#reiniciar");

function initGame() {
  assignTextElem("h1", "Secret Number Game");
  assignTextElem("p", `Guess a number between 1 and ${numMax}`);
  //Restart counter
  attempts = 1;
  //Generate random number
  gsecretNumb = randomNumbGen();
}

function newGameAction() {
  //Clear input box
  clearTextBox();
  //Show the initial message
  initGame();
  //Disable new game button
  newGamebtn.setAttribute("disabled", true);
}

function clearTextBox() {
  numbrBox.value = "";
}

function assignTextElem(elem, txt) {
  const htmlEl = document.querySelector(elem);
  htmlEl.innerHTML = txt;
}

function randomNumbGen() {
  let numbR = Math.floor(Math.random() * numMax) + 1;

  if (arrSecretN.length === numMax) {
    assignTextElem("h1", "GAME OVER");
    assignTextElem("p", `Thanks for playing`);
    guessbtn.setAttribute("disabled", true);
  } else {
    if (arrSecretN.includes(numbR)) {
      return randomNumbGen();
    } else {
      arrSecretN.push(numbR);
      //console.log(arrSecretN);
      return numbR;
    }
  }
}

//++++++++++++++++++++++++++++++MAIN
initGame();

newGamebtn.addEventListener("click", newGameAction);

//Function called from html doc
function usrTryGuess() {
  const usrNumb = parseInt(numbrBox.value);
  console.log(gsecretNumb, usrNumb);
  if (gsecretNumb === usrNumb) {
    assignTextElem(
      "p",
      `Correct! You guessed the secret number, it only took you ${attempts} ${
        attempts > 1 ? "tries" : "try"
      }`
    );
    newGamebtn.removeAttribute("disabled");
  } else {
    if (gsecretNumb > usrNumb) {
      assignTextElem("p", `Secret number is greater`);
    } else {
      assignTextElem("p", `Secret number is less`);
    }
    attempts++;
    clearTextBox();
  }
}

/*++++++++++++++++++++++++++++++++************* CHALLENGES #1
arrSecretN.push(23); //Add element at the end of the array
arrSecretN.push(65);
arrSecretN.unshift(400); //Add element at the beginning of the array
console.log(arrSecretN);
console.log(arrSecretN.length);
arrSecretN.pop(); //removes last element
arrSecretN.shift(); //removes first element
console.log(arrSecretN);

const helloWorldFct = function (n) {
  console.log(`Hello ${n}!`);
};

helloWorldFct("Mav");

const numbTimesTwo = function (num) {
  return num * 2;
};

const avgNumb = function (...num) {
  return num.reduce((a, b) => a + b) / num.length;
};

const greatestNumb = function (...num) {
  var g = num[0];

  for (var i = 0; i < num.length; i++) {
    if (num[i] > g) g = num[i];
  }

  return g;
};

function numTimes(n) {
  return n * n;
}

console.log(numbTimesTwo(32));
console.log(avgNumb(23, 43, 2));
console.log(numTimes(2));
console.log(greatestNumb(23, 634, 12, 44, 0, -32, 2121));
*/

/*
//CHALLENGE #2
function calcIMC(height, weight) {
  return weight / (height * height);
}

function factorialNu(n) {
  let numb = [];
  while (n >= 1) {
    numb.push(n);
    n--;
  }
  return numb.reduce((acc, i) => acc * i, 1);
}

function currencyExch(m) {
  return `$${m} are equivalent to ${m * 4.92} brazilian reales`;
}

function measRect(h, w) {
  console.log(`Perimeter: ${2 * h + 2 * w}, Area: ${h * w}`);
}

function measCir(r) {
  console.log(`Perimeter: ${Math.PI * (r * 2)}, Area: ${Math.PI * (r * r)}`);
}

function timesNumb(n) {
  let times = 10;
  while (times > 0) {
    console.log(`${n} x ${times} = ${n * times}`);
    times--;
  }
}

console.log(calcIMC(1.65, 68));
console.log(factorialNu(5));
console.log(currencyExch(5));
measRect(2, 4);
measCir(3);
timesNumb(5);

//********++++++++++ CHALLENGE 3
let genrList = [];
let lProgr = ["JavaScript", "C", "C++", "Kotlin", "Python"];

lProgr.push("Java", "Ruby", "GoLang");
printPL();
console.log(avgN([23, 4, 2, 7, 4]));
greaterLessN([23, 4, 2, 7, 4, -32, 0, 44]);
console.log(sumN([23, 4, 2, 7, 4, -32, 0, 44]));
console.log(findNum([23, 4, 2, 7, 4, -32, 0, 44], 7));
console.log(sumArr([2, 7, 9, 5], [1, 4, 5, 9]));
console.log(squareNum([3, 5, 2, 7, 8, 4, 9]));

function printPL() {
  console.log(lProgr);
}

function avgN(num) {
  let sum = 0;

  for (let i = 0; i < num.length; i++) {
    sum += num[i];
  }
  return sum / num.length;
}

function greaterLessN(num) {
  let max = num[0];
  let min = num[0];

  for (let i = 0; i < num.length; i++) {
    if (num[i] > max) max = num[i];

    if (num[i] < min) min = num[i];
  }
  console.log(num);
  console.log(`Maximum: ${max}, Minimum: ${min}`);
}

function sumN(num) {
  console.log(num);
  return num.reduce((acc, i) => acc + i, 0);
}

function findNum(arr, n) {
  if (arr.includes(n)) return arr.indexOf(n);

  return -1;
}

function sumArr(arr1, arr2) {
  let sumArr = [];

  for (let i = 0; i < arr1.length; i++) {
    sumArr.push(arr1[i] + arr2[i]);
  }

  return sumArr;
}

function squareNum(num) {
  let newA = [];

  for (let i = 0; i < num.length; i++) {
    newA.push(num[i] * num[i]);
  }

  return newA;
}
*/
