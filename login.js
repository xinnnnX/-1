// JavaScript source code
function login() {
    var username = document.getElementById("username");
    var pass = document.getElementById("password");

    if (username.value == "") {
        alert("Please enter username");
    }
    else if (pass.value == "") {
        alert("Please enter password");
    }
    else if (username.value == "admin" && pass.value == "123456") {
        window.location.href = "welcome.html";
    }
    else {
        alert("Username or password not correct!");
    }
}