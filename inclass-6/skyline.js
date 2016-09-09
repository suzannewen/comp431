'use strict'

var blgList = [];
var sunX = 0;
var carX = 800;

var createApp = function(canvas) { 
  var c = canvas.getContext("2d");

  // Create the ground
  var floor = canvas.height/2
  var grad = c.createLinearGradient(0,floor,0,canvas.height)
  grad.addColorStop(0, "green")
  grad.addColorStop(1, "black")
  c.fillStyle=grad
  c.fillRect(0, floor, canvas.width, canvas.height)

  // make a sun
  c.beginPath();
  c.arc(0,75,50,0,2*Math.PI);
  c.fillStyle="yellow";
  c.fill();

  // common size for windows
  var windowSpacing = 2, floorSpacing = 3
  var windowHeight = 5, windowWidth = 3

  // colors of buildings
  var blgColors = [ 'red', 'blue', 'gray', 'orange'] 

  //build a building
  var build = function() { 

    c.clearRect(0,0,800,800);

    // Create the ground
    var floor = canvas.height/2
    var grad = c.createLinearGradient(0,floor,0,canvas.height)
    grad.addColorStop(0, "green")
    grad.addColorStop(1, "black")
    c.fillStyle=grad
    c.fillRect(0, floor, canvas.width, canvas.height)

    // make a sun
    c.beginPath();
    c.arc(sunX,75,50,0,2*Math.PI);
    c.fillStyle="yellow";
    c.fill();
    sunX += 10; // to move sun, skips to left of screen if it reaches the other side
    if (sunX === 800) {
      sunX = 0;
    }

    var x0 = Math.random()*canvas.width
    var blgWidth = (windowWidth+windowSpacing) * Math.floor(Math.random()*10)
    var blgHeight = Math.random()*canvas.height/2
    c.fillStyle= blgColors[ Math.floor(Math.random()*blgColors.length)]

    var blgDetails = [x0, blgWidth, blgHeight, c.fillStyle]; // create array to store details of each building, this allows for all buildings to be rebuilt
    blgList.push(blgDetails); // each building stored in an array

    blgList.forEach(function (element, index, array) {
      var x0 = array[index][0];
      var blgWidth = array[index][1];
      var blgHeight = array[index][2];
      c.fillStyle= array[index][3];
      var floor = canvas.height/2
      var grad = c.createLinearGradient(0,floor,0,canvas.height)

      c.fillRect(x0, floor - blgHeight, blgWidth, blgHeight) // creates building
      for (var y = floor - floorSpacing; y > floor - blgHeight; y -= floorSpacing + windowHeight) {
        for (var x = windowSpacing; x < blgWidth - windowWidth; x += windowSpacing + windowWidth) {

          var randomInt = Math.round(Math.random()); // randomInt to determine if windows are on or off (yellow or black)
          if (randomInt === 1) {
            c.fillStyle = "yellow";
          }
          else {
            c.fillStyle = "black";
          }

          c.fillRect(x0 + x, y - windowHeight, windowWidth, windowHeight)
        }
    }
  });

    var bmwImg = new Image(); // image object for car
    bmwImg.onload=function(){
        c.drawImage(bmwImg, carX, 380, 100, 80);
    }
    bmwImg.src = "bmw.jpg";
    carX -= 20; // each time, the car will move left 20px
    if (carX === 0) { // to detect if the car has reached the left of the screen
      carX = 800;
    }
  }

  return {
    build: build
  }
}

window.onload = function() {
  var app = createApp(document.querySelector("canvas"))
  document.getElementById("build").onclick = app.build
}
