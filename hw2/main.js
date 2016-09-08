// JS logic for shifting pictures

var img1 = "http://media2.popsugar-assets.com/files/thumbor/hwWt2icc1aQutyAB38qRllv4ozs/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2013/07/26/804/n/1922794/1ba529f2a85fb362_Cover3/i/Summer-Flowers-Instagram-2013.jpg";
var img2 = "http://www.we-are-scout.com/wp-content/uploads/2015/07/11385249_250135431847630_431005031_n.jpg";
var img3 = "https://s-media-cache-ak0.pinimg.com/564x/44/a9/d5/44a9d5a7ab2a46f082a4741b31cd1623.jpg";
var img4 = "http://data.whicdn.com/images/36747150/large.jpg";
var img5 = "http://data.whicdn.com/images/38349476/large.jpg";
var img6 = "http://41.media.tumblr.com/09e99d4384b2e6b9507549517f38ad88/tumblr_n6garoRaFL1r9y3mio1_500.png";
var img7 = "http://66.media.tumblr.com/tumblr_m9cp2zH3Pi1rsphzto1_1280.jpg";
var img8 = "http://flirtyfleurs.com/wp-content/uploads/2013/10/Picture-1.png";
var img9 = "http://instagram.com/p/ZncvJYS0Xa/";

var cardArray = [1, 2];
var imageArray = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
var intervalArray = [];
var counterArray = [];

window.onload = function () {
  cardArray.forEach(setImages);
  cardArray.forEach(getInterval);
  cardArray.forEach(startInterval);
}

// gives each card a starting background image
function setImages (element, index, array) {
  var idName = "picture" + element;
  document.getElementById(idName).style.backgroundImage = "url('" + imageArray[index] + "')";
}

// gives each card a starting interval from 1-5
function getInterval (element, index, array) {
  var randomInt = Math.round(Math.random() * 5);
  if (randomInt === 0) {
    randomInt = 1;
  }
  
  intervalArray[index] = randomInt;
}

// starts the interval function for each card, named sequentially (var counter1, counter2...etc.); a random image is assigned every interval
function startInterval (element, index, array) {
  var idName = "picture" + element;
  var interval = intervalArray[index] * 1000;

  counterArray[index] = setInterval(function () {
    var imgInt = Math.round(Math.random() * 5);
    document.getElementById(idName).style.backgroundImage = "url('" + imageArray[imgInt] + "')";
    console.log(idName);
  }, interval);
}

function startStop (buttonNum) { // buttonNum is element #, timerNum is index
  var timerNum = buttonNum - 1;
  var buttonName = "button" + buttonNum;
  var button = document.getElementById(buttonName);

  if (button.value === "stop") {
    clearInterval(counterArray[timerNum]);
    button.value = "start";
  }
  else {
    var randomInt = Math.round(Math.random() * 5);
    if (randomInt === 0) {
      randomInt = 1;
    }
    var interval = randomInt * 1000;
    var idName = "picture" + buttonNum;

    counterArray[timerNum] = setInterval(function () {
      var imgInt = Math.round(Math.random() * 5);
      document.getElementById(idName).style.backgroundImage = "url('" + imageArray[imgInt] + "')";
      console.log(idName);
    }, interval);
    button.value = "stop";
  }
}



