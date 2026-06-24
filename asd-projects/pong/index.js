/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  const FRAME_RATE = 60;
  const FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  const KEY = {
    ENTER: 13,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
  }
  const WASD = {
    W: 87,
    A: 65,
    S: 83,
    D: 68
  }
  
  // Game Item Objects
  function gameItem($id) {
    var gameItem = {}
    gameItem.id = $id;
    gameItem.x = parseFloat($($id).css("left"));
    gameItem.y = parseFloat($($id).css("top"));
    gameItem.width = $($id).width();
    gameItem.height = $($id).height();
    gameItem.speedX = 0
    gameItem.speedY = 0
    return gameItem;
  }

  // one-time setup
  let interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp);   
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {

  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    console.log(event.which) 

    if (event.which === KEY.ENTER ) {
      console.log("ENTER pressed.");
    } else if (event.which === KEY.LEFT) {
      console.log("LEFT pressed.")
    } else if (event.which === KEY.RIGHT) {
      console.log("RIGHT pressed.")
    } else if (event.which === KEY.UP) {
      console.log("UP pressed.")
      leftPaddle.speedY -= 5;
    } else if (event.which === KEY.DOWN) {
      console.log("DOWN pressed,")
      leftPaddle.speedY += 5;
    }

    if (event.which === WASD.W) {
      console.log("W pressed.");
      rightPaddle.speedY -= 5;
    } else if (event.which === WASD.A) {
      console.log("A pressed.");
    } else if (event.which === WASD.S) {
      console.log("S pressed.");
      rightPaddle.speedY += 5;
    } else if (event.which === WASD.D) {
      console.log("S pressed.")
    } else if (event.which === WASD.ENTER) {
      console.log("ENTER pressed.")
    }
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
