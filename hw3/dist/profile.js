function updateStatus () {
  var newStatus = document.getElementById("update").value;
  document.getElementById("status").innerHTML = '"' + newStatus + '"';       
}

function updateInfo () {
  var updateList = ["name", "email", "phone", "zip"];

  updateList.forEach(function(id) {
    if (document.getElementById(id).value) {
      var update = document.getElementById(id).value;
      document.getElementById(id + "Current").innerHTML = update;
    }
    document.getElementById(id).value = "";
  });
  
}