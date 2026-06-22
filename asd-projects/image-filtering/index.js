// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here

  applyFilter(reddify);
  applyFilterNoBackground(decreaseBlue);
  applyFilter(increaseGreenByBlue);
  applyFilterNoBackground(reddify);
  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2, 3 & 5: Create the applyFilter function here
function applyFilter(filterFunction) {
  for (i = 0; i < image.length; i++) {
    for (j = 0; j < image[i].length; j++) {
      let pixel = image[i][j];
      let pixelArray = rgbStringToArray(pixel);
      filterFunction(pixelArray);
      var updatedPixel = rgbArrayToString(pixelArray);
      image[i][j] = updatedPixel;
    }
  }
}

// TODO 9 Create the applyFilterNoBackground function
function applyFilterNoBackground(filterFunction) {
  let backgroundColor = image[0][0];
  for (i = 0; i < image.length; i++) {
    for (j = 0; j < image[i].length; j++) {
      if (image[i][j] !== backgroundColor) {
       let pixel = image[i][j];
       let pixelArray = rgbStringToArray(pixel)
        filterFunction(pixelArray);
        let updatedPixelString = rgbArrayToString(pixelArray);
        image[i][j] = updatedPixelString;
      }
    }
  }
}

// TODO 6: Create the keepInBounds function
function keepInBounds(number) {
  return number < 0 ? 0 : number > 255 ? 255 : number;
  }

// TODO 4: Create reddify filter function
function reddify(randArray) {
  randArray[RED] = 200;
}



// TODO 7 & 8: Create more filter functions
function decreaseBlue(randArray) {
  randArray[BLUE] -= 50;
  randArray[BLUE] = keepInBounds(BLUE);
}

function increaseGreenByBlue(randArray) {
  randArray[GREEN] += randArray[BLUE];
  randArray[GREEN] = keepInBounds(GREEN)
}
// CHALLENGE code goes below here
