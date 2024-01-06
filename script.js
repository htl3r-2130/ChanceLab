"use strict";
const openSidebar = document.querySelector("#menu");
menu.addEventListener("click", showSidebar);

const closeSidebar = document.querySelector("#close");
closeSidebar.addEventListener("click", hideSidebar);

function showSidebar() {
  document.querySelector(".sidebar").style.display = "flex";
}
function hideSidebar() {
  document.querySelector(".sidebar").style.display = "none";
}
const openSettings1 = document.querySelector("#openSettings1");
const openSettings2 = document.querySelector("#openSettings2");
openSettings1.addEventListener("click", showSettings);
openSettings2.addEventListener("click", showSettings);

const closeSettings = document.querySelector("#hideSettings");
closeSettings.addEventListener("click", hideSettings);

function showSettings() {
  document.querySelector(".settings").style.display = "flex";
  document.querySelector(".sidebar").style.display = "none";
}
function hideSettings() {
  document.querySelector(".settings").style.display = "none";
}

//Darkmode

const darkmode = document.querySelector("#toggle");
darkmode.addEventListener("change", setDarkmode);
let darkmodeActive = false;

function setDarkmode() {
  if (!darkmodeActive) {
    document.querySelectorAll(".darkmodeText").forEach((link) => {
      link.style.color = "white";
    });
    document.querySelectorAll("svg").forEach((link) => {
      link.style.fill = "white";
    });
    document.querySelector(".randomNum").style.backgroundColor = "black";
    document.querySelector("nav").style.backgroundColor = "rgb(105, 105, 105)";
    document.querySelector(".settings").style.backgroundColor = "black";
    document.querySelector("nav").style.boxShadow =
      "3px 3px 5px rgba(255, 255, 255, 0.24)";
    darkmodeActive = true;
  } else {
    document.querySelectorAll(".darkmodeText").forEach((link) => {
      link.style.color = "black";
    });
    document.querySelectorAll("svg").forEach((link) => {
      link.style.fill = "black";
    });
    document.querySelector(".randomNum").style.backgroundColor = "white";
    document.querySelector("nav").style.backgroundColor = "white";
    document.querySelector(".settings").style.backgroundColor = "white";
    document.querySelector("nav").style.boxShadow =
      "3px 3px 5px rgba(0, 0, 0, 0.24)";
    darkmodeActive = false;
  }
}

//Random Num

const randomNumBtn = document.querySelector("#randomNumGenerate-btn");
randomNumBtn.addEventListener("click", randomNumGenerate);

function randomNumGenerate() {
  const minElement = document.querySelector("#min");
  const maxElement = document.querySelector("#max");
  let min = parseInt(minElement.value);
  let max = parseInt(maxElement.value);
  const randomNumOutput = document.querySelector("#randomNumH1");
  const error = document.querySelector("#randomNumError");

  if (isNaN(min) || isNaN(max)) {
    error.style.display = "block";
    error.innerHTML = "Min oder Max darf nicht leer sein";
  } else if (min > max) {
    error.style.display = "block";
    error.innerHTML = "Min darf nicht größer als Max sein";
  } else if (max > 10000) {
    error.style.display = "block";
    error.innerHTML = "Max darf nicht größer als 10000 sein";
  } else if (min < -10000) {
    error.style.display = "block";
    error.innerHTML = "Min darf nicht kleiner als -10000 sein";
  } else {
    error.style.display = "none";
    function generateRandomNumberRecursively() {
      randomNumOutput.textContent = Math.floor(
        Math.random() * (max - min + 1) + min
      );

      if (index < 5) {
        index++;
        setTimeout(generateRandomNumberRecursively, 70);
      }
    }

    let index = 0;
    generateRandomNumberRecursively();
  }
}
//Coinflip
const coinflipBtn = document.querySelector("#coinflip-btn");
coinflipBtn.addEventListener("click", coinflip);

const rotatingBox = document.getElementById("rotatingBox");

function coinflip() {
  let random = Math.floor(Math.random() * 2);
  console.log(random);
  if (random === 0) {
    console.log("0---");
    flipFront(0);
  } else {
    console.log("1---");
    flipBack(0);
  }
}
let rotationAngle = 0;
function rotateCoin(degrees) {
  rotationAngle += degrees;
  rotatingBox.style.transform = `rotateY(${rotationAngle}deg)`;
  console.log(rotationAngle);
}
function flipFront(deg) {
  if (deg <= 90) {
    rotateCoin(10);
    setTimeout(() => flipFront(deg + 10), 1);
  } else if (deg > 90 && deg <= 270) {
    document.querySelector("#coin").src = "pics/SVG/back.svg";
    rotateCoin(10);
    setTimeout(() => flipFront(deg + 10), 1);
  } else if (deg > 270 && deg <= 450) {
    document.querySelector("#coin").src = "pics/SVG/front.svg";
    rotateCoin(10);
    setTimeout(() => flipFront(deg + 10), 1);
  } else if (deg > 450 && deg <= 630) {
    document.querySelector("#coin").src = "pics/SVG/back.svg";
    rotateCoin(10);
    setTimeout(() => flipFront(deg + 10), 5);
  } else if (deg > 630 && deg < 720) {
    document.querySelector("#coin").src = "pics/SVG/front.svg";
    rotateCoin(10);
    setTimeout(() => flipFront(deg + 10), 10);
  } else if (deg === 720) {
    deg = 0;
    rotationAngle = 0;
  }
}
function flipBack(deg) {
  if (deg <= 90) {
    rotateCoin(10);
    setTimeout(() => flipBack(deg + 10), 1);
    console.log(document.querySelector("#coin").src);
  } else if (deg > 90 && deg <= 270) {
    document.querySelector("#coin").src = "pics/SVG/back.svg";
    rotateCoin(10);
    setTimeout(() => flipBack(deg + 10), 1);
  } else if (deg > 270 && deg <= 450) {
    document.querySelector("#coin").src = "pics/SVG/front.svg";
    rotateCoin(10);
    setTimeout(() => flipBack(deg + 10), 1);
  } else if (deg > 450 && deg <= 630) {
    document.querySelector("#coin").src = "pics/SVG/back.svg";
    rotateCoin(10);
    setTimeout(() => flipBack(deg + 10), 5);
  } else if (deg > 630 && deg < 720) {
    document.querySelector("#coin").src = "pics/SVG/back.svg";
    rotateCoin(10);
    setTimeout(() => flipBack(deg + 10), 10);
  } else if (deg === 720) {
    deg = 0;
    rotationAngle = 0;
    document.querySelector("#coin").src = "pics/SVG/back.svg";
  }
}

//Dice
const diceBtn = document.querySelector("#dice-btn");
diceBtn.addEventListener("click", rollDice);
const dice = document.querySelector("#dice");
let currentRotation = 0;

function rollDice() {
  const step = 10;
  function rotateStep(deg) {
    if (deg <= 360) {
      dice.style.transform = `rotate(${deg}deg)`;
      setTimeout(() => rotateStep(deg + step), 10);
      console.log(deg);
      if (deg == 90) {
        setRandomSrc();
      }
      if (deg == 180) {
        setRandomSrc();
      }
      if (deg == 270) {
        setRandomSrc();
      }
      if (deg == 360) {
        setRandomSrc();
      }
    }
  }

  rotateStep(0);
}
function setRandomSrc() {
  let diceValue = Math.floor(Math.random() * 6) + 1;

  switch (diceValue) {
    case 1:
      dice.src = "pics/SVG/one.svg";
      break;
    case 2:
      dice.src = "pics/SVG/two.svg";
      break;
    case 3:
      dice.src = "pics/SVG/three.svg";
      break;
    case 4:
      dice.src = "pics/SVG/four.svg";
      break;
    case 5:
      dice.src = "pics/SVG/five.svg";
      break;
    case 6:
      dice.src = "pics/SVG/six.svg";
      break;
    default:
      break;
  }
}
