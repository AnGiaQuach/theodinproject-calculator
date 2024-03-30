"use strict";

let num1 = "";
let num2 = "";
let op = undefined;
let afterEqual = true;
let clearNum1 = true;

function operating(num1, op, num2) {
  num1 = Number(num1);
  num2 = Number(num2);
  if (op === "+") {
    return num1 + num2;
  } else if (op === "–") {
    return num1 - num2;
  } else if (op === "x") {
    return num1 * num2;
  } else if (op === "/") {
    return num1 / num2;
  }
}

function displayTempAnswer(n1, o, n2) {
  if (n1 && o && n2) {
    n1 = String(operating(n1, o, n2));
  }
  num1 = n1;
  console.log(num1);
  document.querySelector(".displayNumber").textContent = num1;
  //dom.window.document.getElementById('displayArea') = num1;
}

function displayNumber(num) {
  //document.getElementById("displayArea").value = num1;
  document.querySelector(".displayNumber").textContent = num;
}

const equalButton = document.getElementById("equal");
equalButton.addEventListener("click", function () {
  displayTempAnswer(num1, op, num2); //display answer and store in num1
  num2 = "";
  op = undefined;
  afterEqual = true;
  clearNum1 = true;
});

const operateKey = document.querySelectorAll(".operate");
for (const key of operateKey) {
  key.addEventListener("click", function () {
    if (num1) {
      afterEqual = false; //continue with previous number
      displayTempAnswer(num1, op, num2);
      op = key.textContent;
      num2 = "";
    }
  });
}

const numberKey = document.querySelectorAll(".number");
for (const key of numberKey) {
  key.addEventListener("click", function () {
    if (afterEqual) {
      // starting type num1 from the begining
      if (clearNum1) {
        num1 = "";
        clearNum1 = false;
      }
      num1 += key.textContent;
      displayNumber(num1);
    } else {
      num2 += key.textContent; // add more num
      displayNumber(num2);
    }
  });
}

const AC = document.getElementById("AC"); //AC button
AC.addEventListener("click", function () {
  num1 = "";
  num2 = "";
  op = undefined;
  afterEqual = true;
  clearNum1 = true;
  document.querySelector(".displayNumber").textContent = "";
});

const DEL = document.getElementById("DEL"); //DEL button
DEL.addEventListener("click", function () {
  num1 = num1.slice(0, -1);
  console.log(num1);
  displayNumber(num1);
});
