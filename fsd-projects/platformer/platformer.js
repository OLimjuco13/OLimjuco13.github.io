$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     //toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(120, 0, 30, 600, "brown");
    createPlatform(300, 625, 150, 15, "rgb(229, 102, 6)");
    createPlatform(150, 505, 150, 15, "rgb(229, 102, 6)");
    createPlatform(300, 375, 150, 15, "rgb(229, 102, 6)");
    createPlatform(150, 245, 150, 15, "rgb(229, 102, 6)");
    createPlatform(580, 200, 925, 45, "rgb(7, 98, 60)");
    createPlatform(610, 490, 895, 45, "rgb(7, 98, 60)");
    createPlatform(610, 500, 50, 130, "rgb(7, 98, 60");
    createPlatform(760, 625, 50, 130, "rgb(7, 98, 60");
    createPlatform(910, 500, 50, 130, "rgb(7, 98, 60");
    createPlatform(1060, 625, 50, 130, "rgb(7, 98, 60");
    createPlatform(1200, 625, 50, 130, "rgb(7, 98, 60");
    createPlatform(750, 360, 105, 5, "rgb(229, 102, 6");
    createPlatform(1050, 360, 105, 5, "rgb(229, 102, 6");
    createPlatform(1350, 360, 105, 5, "rgb(229, 102, 6");








    // TODO 3 - Create Collectables
    createCollectable("steve", 1350, 550, .5, .7);
    createCollectable("diamond", 1350, 250, .25, 1);
    createCollectable("database", 1350, 100);





    
    // TODO 4 - Create Cannons
    createCannon("right", 525, 1500);
    createCannon("right", 630, 2000);
    createCannon("top", 775, 1000);
    createCannon("top", 1075, 1250);
    createCannon("bottom", 1250, 2000);




    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
