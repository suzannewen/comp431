//create the canvas
var canvas = document.createElement("canvas");
var c = canvas.getContext("2d");
canvas.width = window.innerWidth - 10;
canvas.height = window.innerHeight - 10;
document.body.appendChild(canvas);

var playerImg = new Image();
playerImg.src = "student.jpg";

var obstacleImg = new Image();
obstacleImg.src = "bed.png";

//create player & objective object
var player = {
    x: canvas.width/2,
    y: canvas.height/2,
    speed: 20,
    icon: playerImg
};

var object = {
    x: canvas.width * Math.random(),
    y: canvas.height * Math.random(),
    speed: 20,
    letters: ["A+", "A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D+", "D", "D-", "F"]
    // icon:
};

var obstacle = {
    x: canvas.height/2,
    y: canvas.height/2,
    xSpeed: 5,
    ySpeed: 5,
    icon: obstacleImg
}


//5 levels
var level = {
    num: 1,
    time: 60
};

//score counter
var gpa = 4.0;
var stars = 0;
var letterNum = 0;

//detects keypresses
// document.onkeydown = function(e) {
//     switch(e.keyCode) {//keycode of event will tell us which direction it was
//         case 37: //left
//             player.x -= player.speed;
//             break;
//         case 38: //up
//             player.y -= player.speed;
//             break;
//         case 39: //right
//             player.x += player.speed;
//             break;
//         case 40: //down
//             player.y += player.speed;
//             break;
//     }
// };

//START OF GAME
var levelTimer = setInterval(function () { //timer starts for first level
        level.time--;
    }, 1000);

setInterval(function () { //starts the game
    draw();
    game();
}, 100); //canvas is redrawn 10 times per second

var totalTime = level.time;

//detects mouse movement to navigate
function mouseMove(e) {
    player.x += e.movementX;
    player.y += e.movementY;
}

function draw () {
    c.clearRect(0, 0, canvas.width, canvas.height);

    c.font="20px Verdana";
    c.fillText("Level " + level.num, 20, 25);
    c.fillText("GPA: " + gpa.toFixed(2), 20, 50);
    c.fillText("Time left: " + level.time, 20, 75);

    c.drawImage(player.icon, player.x, player.y, 20, 40);
    c.drawImage(obstacle.icon, obstacle.x, obstacle.y, 45, 80)
    
    c.font="50px Verdana";
    c.fillText(object.letters[letterNum], object.x, object.y);
}

function game () {
    if (level.time > (totalTime * 0.95)) {
        letterNum = 0;
    }
    else if (level.time > (totalTime * 0.9)) {
        letterNum = 1;
    }
    else if (level.time > (totalTime * 0.85)) {
        letterNum = 2;
    }
    else if (level.time > (totalTime* 0.8)) {
        letterNum = 3;
    }
    else if (level.time > (totalTime * 0.75)) {
        letterNum = 4;
    }
    else if (level.time > (totalTime * 0.7)) {
        letterNum = 5;
    }
    else if (level.time > (totalTime * 0.65)) {
        letterNum = 6;
    }
    else if (level.time > (totalTime * 0.6)) {
        letterNum = 7;
    }
    else if (level.time > (totalTime * 0.55)) {
        letterNum = 8;
    }
    else if (level.time > (totalTime* 0.5)) {
        letterNum = 9;
    }
    else if (level.time > (totalTime * 0.45)) {
        letterNum = 10;
    }
    else if (level.time > (totalTime * 0.4)) {
        letterNum = 11;
    }
    else {
        letterNum = 12;
    }

    //checks if player ran out of time or finished the game
    if (level.time === 0) {
        gameOver();
    }
    else if (level.num === 6) {
        endGame();
    }

    //keeps player & object in bounds
    if (player.x >= canvas.width) { 
        player.x = canvas.width - 30;
    }
    else if (player.x <= 0) {
        player.x = 0;
    }
    if (player.y >= canvas.height) {
        player.y = canvas.height - 30;
    }
    else if (player.y <= 0) {
        player.y = 0;
    }

    if (object.x >= canvas.width) { 
        object.x = canvas.width - 30;
    }
    else if (object.x <= 0) {
        object.x = 0;
    }
    if (object.y >= canvas.height) {
        object.y = canvas.height - 30;
    }
    else if (object.y <= 0) {
        object.y = 0;
    }

    //keeps object & player in bounds    
    if ( (player.x >= (object.x - 30) && player.x <= (object.x + 30)) && (player.y >= (object.y - 30) && player.y <= (object.y + 30)) ) { //if the player catches the object
        player.x = canvas.width/2;
        player.y = canvas.height/2;
        object.x = canvas.width * Math.random();
        object.y = canvas.height * Math.random();
        nextLevel();
    }

    //object moves randomly
    var move = 1 + Math.floor(Math.random() * object.speed);
    move *= Math.floor(Math.random() * 2) === 1 ? 1 : -1;
    var xy = Math.floor(Math.random() * 2); //determines if object moves in x or y direction

    //move obstacles
    if (obstacle.x > canvas.width || obstacle.x < 0) {
        obstacle.xSpeed = -obstacle.xSpeed;
        console.log("x out of bounds")
    }
    if (obstacle.y > canvas.height || obstacle.y < 0) {
        obstacle.ySpeed = -obstacle.ySpeed;
        console.log(obstacle.xSpeed)
    }
    obstacle.x += obstacle.xSpeed;
    obstacle.y += obstacle.ySpeed;

    if(xy === 0) {
        object.x += move;
    }
    else {
        object.y += move;
    }

}

function nextLevel () {
    console.log(letterNum)
    console.log()
    gpa = ((gpa * level.num) + (4.0 - 0.333 * letterNum)) / (level.num + 1);

    clearInterval(levelTimer);
    level.time = 60 - level.num * 10;
    level.num++;
    console.log(level.time)
    totalTime = level.time;
    object.speed += 10;

    // setInterval(function () { //level title
    //     c.fillRect(canvas.width/2, canvas.height/2, 200, 100);
    // }, 50);
    
    levelTimer = setInterval(function () { //start timer when level starts
        level.time--;
    }, 1000);
}

// function startGame () {
//     var levelTimer = setInterval(function () { //timer starts for first level
//         level.time--;
//     }, 1000);
// }

function gameOver () {
    clearInterval(levelTimer);
    level.num = 1;
}

function endGame () {
    clearInterval(levelTimer);
}
