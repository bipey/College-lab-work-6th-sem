function btn_actn() {
    var username = document.getElementById("id").value;
    var password = document.getElementById("pw").value;

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    // Redirect to another HTML file
    window.location.href = "lab03_02_details.html";
}
