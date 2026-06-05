$(document).ready(function () {
  // Your code goes here
  $("<div>")
  .css("height", 15)
  .css("width", 15)
  .css("background-color", "black")
  .css("position", "absolute")
  .css("top", 40)
  .css("left", 40)
  .appendTo("#die");


 $("#die").on("click", handleClick);
});
/* code above is the jQuery code: right now it's a .on for registering clicks
and the dice's dot's css
*/


//Here I'm creating the functions to the dice game
//This function matches the right code to the right face
function makeDot(top, left, elementId) {
    $("top")
  .css("height", 15)
  .css("width", 15)
  .css("background-color", "black")
  .css("position", "absolute")
  .css("top", 60)
  .css("left", 50)
  .appendTo("elementId");

    $("bottom")
  .css("height", 15)
  .css("width", 15)
  .css("background-color", "black")
  .css("position", "absolute")
  .css("top", 40)
  .css("left", 50)
  .appendTo("elementId");

  $("elementId")
    .appendTo("#die")
}

makeDot(50, 50, "#die");
makeDot(25, 25, "#die");
makeDot(75, 75, "#die");

//This logs the string "clicked" to console
function rollDie(dieID) {
  var randomNum=Math.ceil(Math.random() * 6);
  console.log(randomNum);
}

//This calls the rollDie function after a specific event occurs
function handleClick() {
  rollDie("#die");
}







