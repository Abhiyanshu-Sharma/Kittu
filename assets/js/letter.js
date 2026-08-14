document.addEventListener("DOMContentLoaded", () => {

    const elements = document.querySelectorAll(".line, footer, button");

    elements.forEach((element, index) => {

        setTimeout(() => {
            element.classList.add("show");
        }, index * 1000);

    });

});

const continueButton = document.getElementById("continue-btn");

continueButton.addEventListener("click",()=>{

    document.body.classList.add("fade-out");

    setTimeout(()=>{

        window.location.href="first-date.html";

    },800);

});