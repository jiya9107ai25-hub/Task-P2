const button = document.getElementById("welcomeButton");
const message = document.getElementById("welcomeMessage");

if (button && message) {
    button.addEventListener("click", function () {
        message.textContent =
            "Thanks for visiting my DEV@Deakin portfolio!";
    });
}