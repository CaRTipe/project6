var button = document.querySelector("button")
var email = document.getElementById("email")
var password = document.getElementById("password")

function login() {
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    document.getElementById("details").innerHTML = "Email: " + email + "<br>Password: " + password

}