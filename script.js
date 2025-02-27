document.addEventListener("DOMContentLoaded", function () {
    var loginBtn = document.getElementById("loginBtn");
    var registerBtn = document.getElementById("registerBtn");
    var loginForm = document.getElementById("login");
    var registerForm = document.getElementById("register");
    var navMenu = document.getElementById("navMenu");
    var navMenuBtn = document.getElementById("navMenuBtn");
    var registerLink = document.getElementById("registerLink");
    var loginLink = document.getElementById("loginLink");

    function toggleForms(isLogin) {
        if (isLogin) {
            loginForm.style.display = "block";
            registerForm.style.display = "none";
            loginBtn.classList.add("white-btn");
            registerBtn.classList.remove("white-btn");
        } else {
            loginForm.style.display = "none";
            registerForm.style.display = "block";
            loginBtn.classList.remove("white-btn");
            registerBtn.classList.add("white-btn");
        }
    }

    function myMenuFunction() {
        navMenu.classList.toggle("responsive");
    }

    // Butonlara tıklanınca ilgili formu göster
    if (loginBtn && registerBtn) {
        loginBtn.addEventListener("click", function () {
            toggleForms(true);
        });

        registerBtn.addEventListener("click", function () {
            toggleForms(false);
        });
    }

    // Menü butonuna tıklanınca menüyü aç/kapat
    if (navMenuBtn) {
        navMenuBtn.addEventListener("click", myMenuFunction);
    }

    // "Sign Up" ve "Login" linkleri de form değiştiriyor
    if (registerLink) {
        registerLink.addEventListener("click", function (e) {
            e.preventDefault();
            toggleForms(false);
        });
    }

    if (loginLink) {
        loginLink.addEventListener("click", function (e) {
            e.preventDefault();
            toggleForms(true);
        });
    }

    // Sayfa açıldığında login ekranı açık olacak
    toggleForms(true);
});


