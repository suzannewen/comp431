var cardArray = [1, 2, 3, 4, 5, 6, 7, 8];
var imageArray = [];
var intervalArray = [];
var counterArray = [];

window.onload = function () {
  imageArray = [ // loads images to cycle through
    "http://media2.popsugar-assets.com/files/thumbor/hwWt2icc1aQutyAB38qRllv4ozs/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2013/07/26/804/n/1922794/1ba529f2a85fb362_Cover3/i/Summer-Flowers-Instagram-2013.jpg",
    "http://www.we-are-scout.com/wp-content/uploads/2015/07/11385249_250135431847630_431005031_n.jpg",
    "https://s-media-cache-ak0.pinimg.com/564x/44/a9/d5/44a9d5a7ab2a46f082a4741b31cd1623.jpg",
    "http://data.whicdn.com/images/36747150/large.jpg",
    "http://data.whicdn.com/images/38349476/large.jpg",
    "http://41.media.tumblr.com/09e99d4384b2e6b9507549517f38ad88/tumblr_n6garoRaFL1r9y3mio1_500.png",
    "http://66.media.tumblr.com/tumblr_m9cp2zH3Pi1rsphzto1_1280.jpg",
    "http://flirtyfleurs.com/wp-content/uploads/2013/10/Picture-1.png",
    "http://www.tesselaarflowers.com.au/wp-content/uploads/2012/10/lovelybouquet_henryhudson.jpg",
    "http://cdni.condenast.co.uk/426x639/d_f/flowers-house-16may16-instagram-thegreenvase_b_426x639.jpg",
    "http://stylonylon.com/wp-content/uploads/2015/06/IMG_1235.jpg",
    "https://images.britcdn.com/wp-content/uploads/2014/09/jardinebotanic.jpg",
    "http://www.we-are-scout.com/wp-content/uploads/2015/07/10932323_408316049320573_1388087895_n.jpg",
    "https://s-media-cache-ak0.pinimg.com/736x/7d/6f/0d/7d6f0d535a5964ced75cf9446b5cacdf.jpg",
    "http://www.designsponge.com/wp-content/uploads/2016/01/livia.jpg",
    "https://imgaf.s3.eu-central-1.amazonaws.com/public/artwork/products/960467/poster/instagram-42267-190294104255503659-3025006.jpg"];

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
    var imgInt = Math.round(Math.random() * 15);
    document.getElementById(idName).style.backgroundImage = "url('" + imageArray[imgInt] + "')";
  }, interval);
}

// starts or stops the interval cycling through images
function startStop (buttonNum) {
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
    counterArray[timerNum] = setInterval(function () { // "restarts" the interval if it is stopped
      var imgInt = Math.round(Math.random() * 5);
      document.getElementById(idName).style.backgroundImage = "url('" + imageArray[imgInt] + "')";
    }, interval);
    button.value = "stop";
  }
}



