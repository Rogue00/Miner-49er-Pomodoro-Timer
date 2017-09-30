var pomoTimer = 25;
var timerRunning = false;
var breakTimerRunning = false;
var breakTimer = 5;
var x = document.getElementById("sound"); 
var y = document.getElementById("sound2");

   // hide break timer buttons

document.getElementById("subtract1").style.visibility = "hidden"; 
	    document.getElementById("add1").style.visibility = "hidden"; 


//reset session timer
function resetTimer() {
  pomoTimer = 25;
    timerRunning = false;
  //clearTimer();
    document.getElementById("counter").innerHTML = pomoTimer;
    document.getElementById("notification").innerHTML = "Press Start To Restart The Timer!";
        switchTimerOn();
		showButtons();
		
}
// hide session timer buttons
function hideButtons() {
	document.getElementById("controller").style.visibility = "hidden";   
        document.getElementById("subtract").style.visibility = "hidden"; 
	    document.getElementById("add").style.visibility = "hidden";    
         document.getElementById("reset").style.visibility = "hidden"; 
}

// show session timer buttons
function showButtons() {
	    document.getElementById("controller").style.visibility = "visible"; 
        document.getElementById("subtract").style.visibility = "visible"; 
	    document.getElementById("add").style.visibility = "visible";    
         
}

// toggle to break timer

function switchTimerOff() {
	document.getElementById("notification").style.visibility = "hidden"; 
            document.getElementById("counter").innerHTML= "";
			document.getElementById("text1").innerHTML= "";
            document.getElementById("text2").innerHTML= "Minutes Left On Break!";
			document.getElementById("subtract1").style.visibility = "visible"; 
	    document.getElementById("add1").style.visibility = "visible"; 
}


// toggle to session timer

function switchTimerOn() {
	document.getElementById("notification").style.visibility = "visible"; 
            document.getElementById("counter").innerHTML= pomoTimer;
			document.getElementById("text1").innerHTML= "Time To Work!";
            document.getElementById("text2").innerHTML= "";
			
}

function switchBreakTimerOff() {
      document.getElementById("break").innerHTML= "";
	  document.getElementById("txt").innerHTML= "";
	  document.getElementById("text2").innerHTML= "";
	  document.getElementById("subtract1").style.visibility = "hidden"; 
	    document.getElementById("add1").style.visibility = "hidden"; 
	  y.play();
}

//add 1 to session timer

function addOne() {
  pomoTimer=pomoTimer + 1;
  
  document.getElementById("counter").innerHTML = pomoTimer;
}

// subtract 1 from session timer

function subtractOne() { 
  if ( pomoTimer > 0) {
  pomoTimer = pomoTimer - 1;
  document.getElementById("counter").innerHTML = pomoTimer;
  } else {
  document.getElementById("notification").innerHTML = "The Timer Is At Zero!";
  }
}

// set session timer..set timer interval...start session timer

function setTimer() {
		 if(timerRunning === false) {
			   timer = setInterval(minus1, 60000);
document.getElementById("counter").innerHTML= pomoTimer;
     document.getElementById("notification").innerHTML = "The Timer Is Set For " + pomoTimer + " Minutes!  Countdown Started!"
  timerRunning = true;
  hideButtons();
  x.play();
		 }
 
}

//subtract 1 from session timer according to passed interval(setTimer).. switch to break timer when session timer reaches 0

function minus1() {
  
  pomoTimer = pomoTimer - 1;
  document.getElementById("counter").innerHTML= pomoTimer;
 document.getElementById("notification").innerHTML = pomoTimer + " Minutes Left!";
 if(pomoTimer <= 0) {
	 clearTimer();
	 switchTimerOff();
	 setBreakTimer();
	 
 }
  } 

// clear timer 

function clearTimer() {
  timer = clearInterval();
  }



// Break Timer Functionality Below


// add to break timer via button controller

function addOneToBreakTimer() {
	breakTimer = breakTimer + 1;
  
  document.getElementById("break").innerHTML = breakTimer;
}

// subract from break timer via button controller

function subtractOneFromBreakTimer() { 
  if ( breakTimer > 0) {
  breakTimer = breakTimer - 1;
  document.getElementById("break").innerHTML = breakTimer;
  } else {
  document.getElementById("txt").innerHTML = "The Timer Is At Zero!";
  }
}

// set and begin break timer...set timer interval..show timer in html

function setBreakTimer() {
  breakTimer = 5;
  if (breakTimerRunning === false) {
    timer = setInterval(minus1FromBreak, 60000);
document.getElementById("break").innerHTML= breakTimer;
     document.getElementById("txt").innerHTML = "Take a " + breakTimer + " Minute Break!  Countdown Started!"
  breakTimerRunning = true;
  y.play();
  } 
}

// subtract from break timer each interval...check when break timer reaches zero..then shut down break timer...allow reset of main session timer

function minus1FromBreak() {
  if (breakTimerRunning = true) {
  breakTimer = breakTimer - 1;
  document.getElementById("break").innerHTML= breakTimer;
 document.getElementById("txt").innerHTML = breakTimer + " Minutes Left!";
      if(breakTimer <= 0) {
		 
		  switchBreakTimerOff();
		  clearTimer();
		  breakTimerRunning = false;
		  document.getElementById("reset").style.visibility = "visible"; 
		  document.getElementById("notification").innerHTML = "Get Ready To Work!";
      }
	  }
  } 



