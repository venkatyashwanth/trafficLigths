let stopLightEl = document.getElementById("stopLight");
let readyLightEl = document.getElementById("readyLight");
let goLightEl = document.getElementById("goLight");
let stopBtnEl = document.getElementById("stopBtn");
let readyBtnEl = document.getElementById("readyBtn");
let goBtnEl = document.getElementById("goBtn");

function turnOnRed(){
    stopLightEl.style.backgroundColor = '#cf1124';
    stopBtnEl.style.backgroundColor = '#cf1124';
    readyLightEl.style.backgroundColor = '#4b5069';
    readyBtnEl.style.backgroundColor = '#4b5069';
    goLightEl.style.backgroundColor = '#4b5069';
    goBtnEl.style.backgroundColor = '#4b5069';
}

function turnOnYellow(){
    stopLightEl.style.backgroundColor = '#4b5069';
    stopBtnEl.style.backgroundColor = '#4b5069';
    readyLightEl.style.backgroundColor = '#f7c948';
    readyBtnEl.style.backgroundColor = '#f7c948';
    goLightEl.style.backgroundColor = '#4b5069';
    goBtnEl.style.backgroundColor = '#4b5069';
}

function turnOnGreen(){
    stopLightEl.style.backgroundColor = '#4b5069';
    stopBtnEl.style.backgroundColor = '#4b5069';
    readyLightEl.style.backgroundColor = '#4b5069';
    readyBtnEl.style.backgroundColor = '#4b5069';
    goLightEl.style.backgroundColor = '#199473';
    goBtnEl.style.backgroundColor = '#199473';
}