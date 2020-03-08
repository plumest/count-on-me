// Set time in minutes
var minCounter = 1;
// Set time in second
var initialTime = minCounter * 60;

var initialDisplay = `00 : 00`;

var timerElement = document.getElementById("timer");
var timer;

// Don't change variables below
var hour;
var minute;
var second;

function getTime() {
    hour = Math.floor(timer/3600);
    minute = Math.floor(timer/60%60);
    second = timer%60;
}

function showTime() {
    window.timer--;
    getTime();
    if (second < 10) { second = "0" + second; }
    if (minute < 10) { minute = "0" + minute; }

    if (!timer) {
        timerElement.innerHTML = `Time out!!`
        clearInterval(counting);
    } else if (hour) {
        if (hour < 10) { hour = "0" + hour; }
        timerElement.innerHTML = `${hour} : ${minute} : ${second}`;
    } else {
        if (timer <= 60) {
            timerElement.classList.add("timerAnimation", "isRed");
        }
        timerElement.innerHTML = `${minute} : ${second}`;
    }
}

function setTime() {
    window.timer = initialTime;
    window.counting = setInterval(showTime, 1000);
    timerElement.classList.remove("timerAnimation", "isRed");
    pauseResumeBox.classList.remove("displayNone");
}

function pause() {
    clearInterval(counting);
    elPause.classList.toggle("displayNone");
    elResume.classList.toggle("displayNone");
}

function resume() {
    window.counting = setInterval(showTime, 1000);
    elPause.classList.toggle("displayNone");
    elResume.classList.toggle("displayNone");
}

function stopTimer() {
    clearInterval(counting);
    window.timer = initialTime;
    timerElement.innerHTML = initialDisplay;
    timerElement.classList.remove("timerAnimation", "isRed");
    pauseResumeBox.classList.add("displayNone");
    elPause.classList.remove("displayNone");
    elResume.classList.add("displayNone");
}

var elStartTimer = document.getElementById("startTimer");
var elStopTimer = document.getElementById("stopTimer");
var elPause = document.getElementById("pause");
var elResume = document.getElementById("resume");
var pauseResumeBox = document.getElementById("pause-resume");

if (elStartTimer.addEventListener) {
    elStartTimer.addEventListener("click", setTime, false);
}

if (elPause.addEventListener) {
    elPause.addEventListener("click", pause, false);
}

if (elResume.addEventListener) {
    elResume.addEventListener("click", resume, false);
}

if (elStopTimer.addEventListener) {
    elStopTimer.addEventListener("click", stopTimer, false);
}