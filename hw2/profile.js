var valuesList = ["display", "email", "phone", "zipcode", "pw", "pwConfirm"]; // contains id names of all fields
var currentValues = [];
var inputArray = [];
var alertValues = ["display name", "email", "phone number", "zipcode", "password", "confirmation password"];
// regex used for validation
var regexValues = [".{5,}","[0-9a-zA-Z\-]{1,}.?[0-9a-zA-Z\-]*@[0-9a-zA-Z\-]{1,}.[a-zA-Z\-]{1,}","[0-9]{3}-[0-9]{3}-[0-9]{4}","[0-9]{5}", ".{6,12}", ".{6,12}"];

window.onload = function () {
  valuesList.forEach(getCurrent);
}

function getCurrent (element, index, array) { // fills currentValues array with the values currently stored
  currentValues[index] = document.getElementById(element).innerHTML;
}

function inputValues (element, index, array) { // fills inputArray with inputted values (even empty ones)
  var inputName = element + "Input";
  inputArray[index] = document.getElementById(inputName).value;
}

function pwMatch () { // checks that confirmation password matches password
  var pw = document.getElementById("pwInput").value;
  var match = document.getElementById("pwConfirmInput").value;        
  if (pw != match) {
    alert("Password does not match!");
    return false;
  }
  else {
    return true;
  }
}

// grabs inputted values, checks if they are different, checks if they are valid, and then replaces the field with the new values
  function submit () { 
    alertString = "";
    changeIds = []; // contains the id's of the fields to be changed
    newValues = []; // contains the new values for the fields

    valuesList.forEach(inputValues);
    inputArray.forEach(checkDiff);

    if (alertString.length > 0) { // alertString contains the fields that have been changed and will be updated
      alert("You are changing: " + alertString);
    }
    else {
      alert("None of your information will be changed.")
    }

    changeIds.forEach(changeValues); 
    valuesList.forEach(clearInput); // clears input text area
  }

  // checks if input field is filled in, valie, and different from the previous stored value
  function checkDiff (element, index, array) { // array is inputArray
    if (array[index].length > 0 && array[index] !== currentValues[index]) { 
      if (array[index].match(regexValues[index]) === null) { // checks if input is valid with regex
        alert("Your input for " + alertValues[index] + " is not valid.");
        return;
      }
      alertString += alertValues[index] + " ";
      changeIds.push(valuesList[index]);
      newValues.push(array[index]);
    }
  }

// changes field values to new updated ones
  function changeValues (element, index, array) {
    document.getElementById(element).innerHTML = newValues[index];
  }

// clears the input field after each update
  function clearInput (element, index, array) {
    var inputName = element + "Input";
    document.getElementById(inputName).value = "";
  }