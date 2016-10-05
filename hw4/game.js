//create the canvas
var canvas = document.createElement("canvas");
var c = canvas.getContext("2d");
canvas.width = window.innerWidth - 10;
canvas.height = window.innerHeight - 40;
document.body.appendChild(canvas);

//images for player & obstacles
var playerImg = new Image();
playerImg.src = "student.jpg";

var bedImg = new Image();
bedImg.src = "bed.png";

var fbImg = new Image();
fbImg.src = "facebook.png";

var tvImg = new Image();
tvImg.src = "tv.png";

var bookImg = new Image();
bookImg.src = "book.jpg";

//create player, grade, and obstacle objects
var player = {
    x: canvas.width/2,
    y: canvas.height/2,
    speed: 20,
    icon: playerImg
};

var object = {
    x: canvas.width * Math.random(),
    y: canvas.height * Math.random(),
    speed: 15,
    letters: ["A+", "A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D+", "D", "D-", "F"]
    // icon:
};

var bed = {
    x: canvas.height * Math.random(),
    y: canvas.height * Math.random(),
    xSpeed: 5,
    ySpeed: 5,
    icon: bedImg
}

var fb = {
    x: canvas.height * Math.random(),
    y: canvas.height * Math.random(),
    xSpeed: 5,
    ySpeed: 5,
    icon: fbImg
}

var tv = {
    x: canvas.height * Math.random(),
    y: canvas.height * Math.random(),
    xSpeed: 10,
    ySpeed: 10,
    icon: tvImg
}

//level & maze object
var level = {
    num: 1,
    time: 60
};

var maze = {
    map1: [10, 70, 130, 190, 250, 310],
    map2: [310, 370, 430, 490, 550, 610],
    map3: [880, 940, 1000, 1060, 1120, 1180],
    icon: bookImg
}

//score counter
var gpa = 4.0;
var stars = 0;
var letterNum = 0;

//START OF GAME
var levelTimer = setInterval(function () { //timer starts for first level
        level.time--;
    }, 1000);
var totalTime = level.time;

setInterval(function () { //starts the game
    draw();
    game();
}, 100); //canvas is redrawn 10 times per second

//detects mouse movement to navigate
function mouseMove(e) {
    // player.x += e.movementX * 5;
    // player.y += e.movementY * 5;
    player.x = e.clientX;
    player.y = e.clientY;
}

function draw () {
    //clears canvas each time
    c.clearRect(0, 0, canvas.width, canvas.height);

    //prints out level, GPA and time
    c.font="20px Verdana";
    c.fillText("Level " + level.num, 20, 25);
    c.fillText("GPA: " + gpa.toFixed(2), 20, 50);
    c.fillText("Time left: " + level.time, 20, 75);

    //draws maze based on level
    if (level.num >= 2) {
        for (var i = 0; i < maze.map1.length; i ++) {
            c.drawImage(maze.icon, canvas.width * 0.2, maze.map1[i], 50, 50);
            c.drawImage(maze.icon, canvas.width * 0.7, maze.map1[i], 50, 50);
            c.drawImage(maze.icon, canvas.width * 0.5, maze.map2[i], 50, 50);
        }
    }
    if (level.num >= 4) {
        for (var i = 0; i < maze.map1.length; i ++) {
            c.drawImage(maze.icon, maze.map1[i], canvas.height * 0.7, 50, 50);
            c.drawImage(maze.icon, maze.map3[i], canvas.height * 0.7, 50, 50);
        }
    }
    

    //draws player and grade
    c.drawImage(player.icon, player.x, player.y, 20, 40);
    c.font="50px Verdana";
    c.fillText(object.letters[letterNum], object.x, object.y);

    //draws obstacles based on level
    if (level.num > 1) {
        c.drawImage(bed.icon, bed.x, bed.y, 45, 80);
    }
    if (level.num > 3) {
        c.drawImage(fb.icon, fb.x, fb.y, 65, 65);
    }
    if (level.num > 4) {
        c.drawImage(tv.icon, tv.x, tv.y, 70, 70);
    }
}

function game () {
    //determines grade as time passes
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

    //checks if player ran out of time or GPA is less than 2.0, or finished the game
    if (level.time === 0 || gpa < 2.0) {
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

    //checks if player catches the grade 
    if ( Math.abs(object.x - player.x) < 30 && Math.abs(object.y - player.y) < 30 ) { //if the player catches the object
        player.x = canvas.width/2;
        player.y = canvas.height/2;
        object.x = canvas.width * Math.random();
        object.y = canvas.height * Math.random();
        nextLevel();
    }

    //checks if player hits obstacle
    if ( Math.abs(bed.x - player.x) < 30 && Math.abs(bed.y - player.y) < 30 && level.num > 1) { //if the player catches the object
        level.time -= 10;
        console.log("ouch")
    }
    if ( Math.abs(fb.x - player.x) < 30 && Math.abs(fb.y - player.y) < 30&& level.num > 3) { //if the player catches the object
        level.time -= 10;
    }
    if ( Math.abs(tv.x - player.x) < 30 && Math.abs(tv.y - player.y) < 30 && level.num > 4) { //if the player catches the object
        level.time -= 10;
    }

    //object moves randomly
    var move = 1 + Math.floor(Math.random() * object.speed);
    move *= Math.floor(Math.random() * 2) === 1 ? 1 : -1;
    var xy = Math.floor(Math.random() * 2); //determines if object moves in x or y direction
    if(xy === 0) {
        object.x += move;
    }
    else {
        object.y += move;
    }

    //move obstacles
    if (bed.x > canvas.width || bed.x < 0) {
        bed.xSpeed = -bed.xSpeed;
    }
    if (bed.y > canvas.height || bed.y < 0) {
        bed.ySpeed = -bed.ySpeed;
    }
    bed.x += bed.xSpeed;
    bed.y += bed.ySpeed;

    if (fb.x > canvas.width || fb.x < 0) {
        fb.xSpeed = -fb.xSpeed;
    }
    if (fb.y > canvas.height || fb.y < 0) {
        fb.ySpeed = -fb.ySpeed;
    }
    fb.x += fb.xSpeed;
    fb.y += fb.ySpeed;

    if (tv.x > canvas.width || tv.x < 0) {
        tv.xSpeed = -tv.xSpeed;
    }
    if (tv.y > canvas.height || tv.y < 0) {
        tv.ySpeed = -tv.ySpeed;
    }
    tv.x += tv.xSpeed;
    tv.y += tv.ySpeed;
}

function nextLevel () {
    //calculates GPA (score)
    gpa = ((gpa * level.num) + (4.0 - 0.333 * letterNum)) / (level.num + 1);

    //reset timer & decreases time for next level
    clearInterval(levelTimer); 
    level.time = 60 - level.num * 10;
    totalTime = level.time;

    level.num++;
    object.speed += 10;

    //increase the speed of the obstacles each term
    if (level.num > 2) {
        bed.xSpeed += 10;
        bed.ySpeed += 10;
    }
    if (level.num > 4) {
        fb.xSpeed += 10;
        fb.ySpeed += 10;
    }
    
    //start timer when level starts
    levelTimer = setInterval(function () {
        level.time--;
    }, 1000);
}

function gameOver () {
    clearInterval(levelTimer);
    level.num = 1;
}

function endGame () {
    clearInterval(levelTimer);
}
