document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    if (user === "hnganne" && pass === "iumtunne") {
        alert("Weo căm hôm bây bê")
        window.location.href = "main.html";
    } else {
        alert("Ủa ai v");
    }
});