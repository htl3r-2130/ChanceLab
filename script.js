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
  document.querySelector(".randomNum").style.display = "none";
  document.querySelector(".sidebar").style.display = "none";
  document.querySelector(".coinflip").style.display = "none";
  document.querySelector(".dice").style.display = "none";
}
function hideSettings() {
  if (!darkmodeActive) {
    location.reload();
  }
  document.querySelector(".settings").style.display = "none";
  document.querySelector(".randomNum").style.display = "flex";
  document.querySelector(".coinflip").style.display = "flex";
  document.querySelector(".dice").style.display = "flex";
}

//Darkmode

const darkmode = document.querySelector("#toggle");
darkmode.addEventListener("change", setDarkmode);
let darkmodeActive = false;

function setDarkmode() {
  let fontWhitemode = "black";
  let navBackgroundWhitemode = "white";
  let backgroundWhitemode = "white";

  let fontDarkmode = "white";
  let backgroundDarkmode = "rgb(41, 41, 41)";
  let backgroundDarkmodeCoin = "rgb(30, 30, 30)";
  let navBackgroundDarkmode = "black";

  const darkmodeText = document.querySelectorAll(".darkmodeText");
  const svg = document.querySelectorAll("svg");
  const nav = document.querySelector("nav");
  const settingsBackground = document.querySelector(".settings");

  const randomNumBackground = document.querySelector(".randomNum");
  const min = document.querySelector("#min");
  const max = document.querySelector("#max");
  const coinflipBackground = document.querySelector(".coinflip");
  const diceBackground = document.querySelector(".dice");
  const footer = document.querySelector("#mainFooter");
  const gitLogo1 = document.querySelector("#gitLogo1");
  const gitLogo2 = document.querySelector("#gitLogo2");

  if (!darkmodeActive) {
    darkmodeText.forEach((link) => {
      link.style.color = fontDarkmode;
    });
    svg.forEach((link) => {
      link.style.fill = fontDarkmode;
    });
    document.querySelector("#close").style.fill = "black";
    nav.style.backgroundColor = navBackgroundDarkmode;
    settingsBackground.style.backgroundColor = backgroundDarkmode;

    randomNumBackground.style.backgroundColor = backgroundDarkmode;
    min.style.borderBottom = "4px white solid";
    max.style.borderBottom = "4px white solid";

    coinflipBackground.style.backgroundColor = backgroundDarkmodeCoin;

    diceBackground.style.backgroundColor = backgroundDarkmode;
    footer.style.backgroundColor = navBackgroundDarkmode;
    gitLogo1.src = "pics/github-mark-white.svg";
    gitLogo2.src = "pics/github-mark-white.svg";

    darkmodeActive = true;
  } else {
    darkmodeText.forEach((link) => {
      link.style.color = fontWhitemode;
    });
    svg.forEach((link) => {
      link.style.fill = fontWhitemode;
    });
    nav.style.backgroundColor = navBackgroundWhitemode;
    settingsBackground.style.backgroundColor = backgroundWhitemode;
    gitLogo1.src = "pics/github-mark.svg";

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
    error.innerHTML = "Min or Max cannot be empty";
  } else if (min > max) {
    error.style.display = "block";
    error.innerHTML = "Min cannot be greater than Max";
  } else if (max > 10000) {
    error.style.display = "block";
    error.innerHTML = "Max cannot be greater than 10 000";
  } else if (min < -10000) {
    error.style.display = "block";
    error.innerHTML = "Min cannot be less than -10000";
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

let count = 0;

function coinflip() {
  count++;
  let random = count % 3 === 0 ? 1 : Math.floor(Math.random() * 2);
  console.log(random + "---");
  random === 0 ? flipFront(0) : flipBack(0);
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
        setRandomEvenSrc();
      }
      if (deg == 180) {
        setRandomEvenSrc();
      }
      if (deg == 270) {
        setRandomEvenSrc();
      }
      if (deg == 360) {
        setRandomSrc();
      }
    }
  }

  rotateStep(0);
}
function setRandomEvenSrc() {
  let diceValue = Math.floor(Math.random() * 3) + 1;

  switch (diceValue) {
    case 1:
      dice.src = "pics/SVG/two.svg";
      break;
    case 2:
      dice.src = "pics/SVG/four.svg";
      break;
    case 3:
      dice.src = "pics/SVG/six.svg";
      break;
    default:
      break;
  }
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
