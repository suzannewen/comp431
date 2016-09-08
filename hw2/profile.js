var valuesList = ["display", "email", "phone", "zipcode", "pw", "pwConfirm"]; // contains id names of all fields
var currentValues = [];
var inputArray = [];
var alertValues = ["display name", "email", "phone number", "zipcode", "password", "confirmation password"];

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

function pwMatch () { // user must have the same password in both fields
  var pw = document.getElementById("password").value;
  var match = document.getElementById("confirmation").value;        

  if (pw != match) {
    alert("Password does not match!");
    return false;
  }
  else {
    return true;
  }
}

  function submit () {
    alertString = ""; // "clears" alertString before each submit event
    changeIds = []; // contains the id's of the fields to be changed
    newValues = []; // contains the new values for the fields

    valuesList.forEach(inputValues);
    inputArray.forEach(checkDiff); // determines field values to be changed

    if (alertString.length > 0) { // alertString contains the fields that have been changed and will be updated
      console.log("You are changing: " + alertString);
    }
    else {
      console.log("None of your information will be changed.")
    }

    changeIds.forEach(changeValues); // changes field values to new updated ones
    valuesList.forEach(clearInput); // clears input text area
  }

  function checkDiff (element, index, array) { // array is inputArray
    if (array[index].length > 0 && array[index] !== currentValues[index]) { // checks if input field is filled in and if it is different from the previous value
      alertString += alertValues[index] + " ";
      changeIds.push(valuesList[index]);
      newValues.push(array[index]);
    }
  }

  function changeValues (element, index, array) {
    document.getElementById(element).innerHTML = newValues[index];
  }

  function clearInput (element, index, array) {
    var inputName = element + "Input";
    document.getElementById(inputName).value = "";
  }