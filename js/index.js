var pomoTimer = 25;
var timerRunning = false;
var breakTimerRunning = false;
var breakTimer = 1;
var x = document.getElementById("sound"); 
var y = document.getElementById("sound2");

        document.getElementById("subtract1").style.visibility = "hidden"; 
	    document.getElementById("add1").style.visibility = "hidden"; 
clearTimer();

function resetTimer() {
  pomoTimer = 25;
    timerRunning = false;
  //clearTimer();
    document.getElementById("counter").innerHTML = pomoTimer;
    document.getElementById("notification").innerHTML = "Press Start To Restart The Timer!";
        switchTimerOn();
		showButtons();
		
}
function hideButtons() {
	document.getElementById("controller").style.visibility = "hidden";   
        document.getElementById("subtract").style.visibility = "hidden"; 
	    document.getElementById("add").style.visibility = "hidden";    
         document.getElementById("reset").style.visibility = "hidden"; 
}
function showButtons() {
	    document.getElementById("controller").style.visibility = "visible"; 
        document.getElementById("subtract").style.visibility = "visible"; 
	    document.getElementById("add").style.visibility = "visible";    
         
}
function switchTimerOff() {
	document.getElementById("notification").style.visibility = "hidden"; 
            document.getElementById("counter").innerHTML= "";
			document.getElementById("text1").innerHTML= "";
            document.getElementById("text2").innerHTML= "Minutes Left On Break!";
			document.getElementById("subtract1").style.visibility = "visible"; 
	    document.getElementById("add1").style.visibility = "visible"; 
}

function switchTimerOn() {
	document.getElementById("notification").style.visibility = "visible"; 
            document.getElementById("counter").innerHTML= pomoTimer;
			document.getElementById("text1").innerHTML= "Time To Work!";
            document.getElementById("text2").innerHTML= "";
			
}

function switchBreakTimerOff() {
	//document.getElementById("text2").style.visibility = "hidden"; 
      document.getElementById("break").innerHTML= "";
	  document.getElementById("txt").innerHTML= "";
	  document.getElementById("text2").innerHTML= "";
	  document.getElementById("subtract1").style.visibility = "hidden"; 
	    document.getElementById("add1").style.visibility = "hidden"; 
	  y.play();
}

function addOne() {
  pomoTimer=pomoTimer + 1;
  
  document.getElementById("counter").innerHTML = pomoTimer;
}
function subtractOne() { 
  if ( pomoTimer > 0) {
  pomoTimer = pomoTimer - 1;
  document.getElementById("counter").innerHTML = pomoTimer;
  } else {
  document.getElementById("notification").innerHTML = "The Timer Is At Zero!";
  }
}

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
 if(pomoTimer <= 0) {
	 clearTimer();
	 switchTimerOff();
	 setBreakTimer();
	 
 }
  } 


function clearTimer() {
  timer = clearInterval();
  }


  
  
  
  
  
  
  
  
  
  
  function resetBreakTimer() {
  breakTimer = 5;
    breakTimerRunning = false;
  //clearTimer();
   // document.getElementById("break").innerHTML = pomoTimer;
    //document.getElementById("txt").innerHTML = "Press Start To Restart The Timer!";

}
function addOneToBreakTimer() {
	breakTimer = breakTimer + 1;
  
  document.getElementById("break").innerHTML = breakTimer;
}
function subtractOneFromBreakTimer() { 
  if ( breakTimer > 0) {
  breakTimer = breakTimer - 1;
  document.getElementById("break").innerHTML = breakTimer;
  } else {
  document.getElementById("txt").innerHTML = "The Timer Is At Zero!";
  }
}

function setBreakTimer() {
  if (breakTimerRunning === false) {
    timer = setInterval(minus1FromBreak, 60000);
document.getElementById("break").innerHTML= breakTimer;
     document.getElementById("txt").innerHTML = "Take a " + breakTimer + " Minute Break!  Countdown Started!"
  breakTimerRunning = true;
  y.play();
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

function minus1FromBreak() {
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



