var today = new Date();

function validateDOB () {
  var birthDate = document.getElementById("birthdate").value;
  var birthYear = birthDate.substr(0,4);
  var birthMonth = birthDate.substr(5,2); 
  var birthDay = birthDate.substr(8,2);

  var checkDate = new Date(birthYear,birthMonth,birthDay);
  var dateDiff = (today-checkDate)/(1000*60*60*24*365); //convert ms to years

  if (dateDiff < 18) {
    alert("You must be at least 18 years of age to register.");
    return false;
  }
  else {
    return true;
  }

}

function pwMatch () {
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

function setTime() {
  var time = Date.now();
  document.getElementById("timestamp").value = time;
}

function validateLogin () {
  if (document.getElementById("loginName").value.length === 0) {
    alert("You must enter your login name.");
    return;
  }
  else if (document.getElementById("loginPW").value.length ===0) {
    alert("You must enter your password.");
    return;
  }
  else {
    document.location.href = "main.html";
  }
}

function clearLogin () {
  document.getElementById("loginName").value = "";
  document.getElementById("loginPW").value = "";
}