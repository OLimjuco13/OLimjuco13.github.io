$(document).ready(function () {
  // Your code goes here

  function makeDot(top, left, elementId) {
    $("<div>")
    .css("height", 15)
    .css("width", 15)
    .css("background-color", "black")
    .css("position", "absolute")
    .css("top", top)
    .css("left", left)
    .appendTo(elementId);
}

  $("#die").on("click", handleClick);
});

//Here I'm creating the functions to the dice game
//This function matches the right code to the right face
  function makeDot(top, left, elementId) {
    $("<div>")
  .css("height", 15)
  .css("width", 15)
  .css("background-color", "black")
  .css("position", "absolute")
  .css("top", top)
  .css("left", left)
  .appendTo(elementId);
}

//This logs the string "clicked" to console
function rollDie(dieID) {
  $(dieID).empty();
  var randomNum=Math.ceil(Math.random() * 6);
  console.log(randomNum);

  if (randomNum === 1) {
  makeDot(50, 50, dieID); // middle middle
} else if (randomNum === 2) {
  makeDot(25, 25, dieID); // top left
  makeDot(75, 75, dieID); // bottom right
} else if (randomNum === 3) {
  makeDot(25, 25, dieID); // top left
  makeDot(75, 75, dieID); // bottom right
  makeDot(50, 50, dieID); // middle middle
} else if (randomNum === 4) {
  makeDot(75, 75, dieID); // bottom right
  makeDot(25, 25, dieID); // top left
  makeDot(25, 75, dieID); // bottom left
  makeDot(75, 25, dieID); // top right
} else if (randomNum === 5) {
  makeDot(50, 50, dieID); // middle middle
  makeDot(75, 75, dieID); // bottom right
  makeDot(25, 25, dieID); // top left
  makeDot(25, 75, dieID); // bottom left
  makeDot(75, 25, dieID); // top right
} else {
  makeDot(25, 25, dieID);
  makeDot(50, 25, dieID);
  makeDot(75, 25, dieID);
  makeDot(25, 75, dieID);
  makeDot(50, 76, dieID); 
  makeDot(75, 75, dieID);
}
}

//This calls the rollDie function after a specific event occurs
function handleClick() {
  rollDie("#die");
}







