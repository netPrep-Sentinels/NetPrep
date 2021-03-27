const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "Student" && password === "1234") {
        alert("You have successfully logged in.");
        //window.location = "https://www.example.com";
        location.reload("C:\\Users\\adria\\J-stores\\.vscode\\J-stores\\index.html");
        //.reload()
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})