'use strict';
const openSidebar = document.querySelector("#menu");
menu.addEventListener("click", showSidebar);

const closeSidebar = document.querySelector("#close");
closeSidebar.addEventListener("click", hideSidebar);

function showSidebar(){
    document.querySelector(".sidebar").style.display="flex";
}
function hideSidebar(){
    document.querySelector(".sidebar").style.display="none";
}
const openSettings1 = document.querySelector("#openSettings1");
const openSettings2 = document.querySelector("#openSettings2");
openSettings1.addEventListener("click", showSettings);
openSettings2.addEventListener("click", showSettings);

const closeSettings = document.querySelector("#hideSettings");
closeSettings.addEventListener("click", hideSettings);

function showSettings(){
    document.querySelector(".settings").style.display="flex";
    document.querySelector(".sidebar").style.display="none";
}
function hideSettings(){
    document.querySelector(".settings").style.display="none";
}

//Darkmode

const darkmode = document.querySelector("#toggle");
darkmode.addEventListener("change", setDarkmode);
let darkmodeActive= false;

function setDarkmode() {
    if (!(darkmodeActive)) {
        document.querySelectorAll(".darkmodeText").forEach(link => {
            link.style.color="white";
        });
        document.querySelectorAll("svg").forEach(link => {
            link.style.fill="white";
        });
        document.querySelector(".randomNum").style.backgroundColor="black";
        document.querySelector("nav").style.backgroundColor="rgb(105, 105, 105)";
        document.querySelector(".settings").style.backgroundColor="black";
        document.querySelector("nav").style.boxShadow = "3px 3px 5px rgba(255, 255, 255, 0.24)";
        darkmodeActive=true;
    }
    else{
        document.querySelectorAll(".darkmodeText").forEach(link => {
            link.style.color="black";
        });
        document.querySelectorAll("svg").forEach(link => {
            link.style.fill="black";
        });
        document.querySelector(".randomNum").style.backgroundColor="white";
        document.querySelector("nav").style.backgroundColor="white";
        document.querySelector(".settings").style.backgroundColor="white";
        document.querySelector("nav").style.boxShadow = "3px 3px 5px rgba(0, 0, 0, 0.24)";
        darkmodeActive=false;
    }
}

//Random Num

const randomNumBtn = document.querySelector("#randomNumGenerate-btn");
randomNumBtn.addEventListener("click", randomNumGenerate)

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
            randomNumOutput.textContent = Math.floor(Math.random() * (max - min + 1) + min);

            if (index < 5) {
                index++;
                setTimeout(generateRandomNumberRecursively, 70);
            }
        }

        let index = 0;
        generateRandomNumberRecursively();
    }
}


