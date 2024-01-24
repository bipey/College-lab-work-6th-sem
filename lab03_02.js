// Retrieve data from localStorage
var username = localStorage.getItem("username");
var password = localStorage.getItem("password");

// Display data in the container
var displayContainer = document.getElementById("displayContainer");
displayContainer.innerText = "Username: " + username + "\nPassword: " + password;
