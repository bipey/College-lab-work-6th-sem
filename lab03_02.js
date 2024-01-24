
var username = localStorage.getItem("username");
var password = localStorage.getItem("password");

var displayContainer = document.getElementById("displayContainer");
displayContainer.innerText = "Username: " + username + "\nPassword: " + password;
