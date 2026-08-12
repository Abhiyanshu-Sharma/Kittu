const elements =  document.querySelectorAll(".fade");
const giftButton = document.getElementById("gift-btn");

window.addEventListener("load", () => {
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add("show");
        }, index * 400);
    });
});

giftButton.addEventListener("click", () => {
    document.body.classList.add("fade-out");

    setTimeout(() => {
        window.location.href = "assets/pages/letter.html";
    }, 800);
});