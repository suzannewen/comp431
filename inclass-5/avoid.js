window.onload = function () {
  var buttonDiv = document.getElementById("clickme");
  buttonDiv.addEventListener("mousemove", moveDiv); // if event triggered, this means the mouse got close to the button
  buttonDiv.addEventListener("click", congrats); // if event triggered, this means the mouse clicked the button
}

function moveDiv () {
  var buttonDiv = document.getElementById("clickme");
  var randomX = Math.round(Math.random() * 1200);
  var randomY = Math.round(Math.random() * 600);

  if (event.shiftKey === false) { // if statement to determine if shift key was pressed during event
    buttonDiv.style.left = randomX + "px";
    buttonDiv.style.top = randomY + "px";
  }
}

function congrats () {
  var hiddenDiv = document.getElementById("hidden");
  var buttonDiv = document.getElementById("clickme");

  hiddenDiv.style.display = "block";
  buttonDiv.innerHTML = "<br> Play Again";
  buttonDiv.removeEventListener("mousemove", moveDiv);
  buttonDiv.addEventListener("click", restart);
}

function restart () {
  var hiddenDiv = document.getElementById("hidden");
  var buttonDiv = document.getElementById("clickme");

  hiddenDiv.style.display = "none";
  buttonDiv.innerHTML = "<br> Click Me!";

  buttonDiv.addEventListener("mousemove", moveDiv);
}