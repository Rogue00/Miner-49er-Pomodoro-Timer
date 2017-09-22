var pomoTimer = 25.00;
var timerRunning = false;
var breakTime= 5;
function resetTimer () {
  pomoTimer = 25.00;
  timerRunning = false;
  clearTimer();
  document.getElementById("counter").innerHTML = pomoTimer;
  document.getElementById("notification").innerHTML = "Press Start To Restart The Timer!"
}

function addOne() {
  pomoTimer = pomoTimer + 1;
  
  document.getElementById("counter").innerHTML= pomoTimer;
}
function subtractOne() { 
  if ( pomoTimer > 0) {
  pomoTimer = pomoTimer - 1;
  document.getElementById("counter").innerHTML= pomoTimer;
  } else {
  document.getElementById("notification").innerHTML = "The Timer Is At Zero!";
  }
}

function setTimer() {
  if (timerRunning === false) {
    timer = setInterval(minus1, 60000);
document.getElementById("counter").innerHTML= pomoTimer;
  timerRunning = true;
  } else {
    document.getElementById("notification").innerHTML = "The Timer Is Already Running!"
  }
}

/*function working() {
  if (timerRunning === false) {
  document.getElementById("controller").innerHTML= "Reset";
  timerRunning = true;
  } else {
    document.getElementById("controller").innerHTML= "Start";
    timerRunning = false;
  }
}
*/

function minus1() {
  
  pomoTimer = pomoTimer - 1;
  document.getElementById("counter").innerHTML= pomoTimer;
 document.getElementById("notification").innerHTML = pomoTimer + " Minutes Left!";
  } 


function clearTimer() {
  timer = clearInterval();
  }