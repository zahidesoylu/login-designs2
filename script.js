document.addEventListener("DOMContentLoaded", function () {
    var loginBtn = document.getElementById("loginBtn");
    var registerBtn = document.getElementById("registerBtn");
    var formBox = document.querySelector(".form-box");

    // Butonlara tıklanınca ilgili formu göster
    if (loginBtn && registerBtn) {
        loginBtn.addEventListener("click", function () {
            formBox.classList.remove("active"); // Login formunu göster
        });

        registerBtn.addEventListener("click", function () {
            formBox.classList.add("active"); // Register formunu göster
        });
    }

    // Sayfa açıldığında login ekranı açık olacak
    formBox.classList.remove("active"); // Login ekranını aç
});

