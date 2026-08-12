const memories = document.querySelectorAll(".reveal");
const continueButton = document.getElementById("continue-btn");
const video = document.querySelector("video");


// Reveal memories + play video
window.addEventListener("load", () => {

    memories.forEach((memory, index) => {

        setTimeout(() => {

            memory.classList.add("show");

            if (memory.classList.contains("video")) {
                video.play();
            }

        }, index * 500);

    });

});


// Transition to next chapter
continueButton.addEventListener("click", () => {

    document.body.classList.add("fade-out");

    setTimeout(() => {

        window.location.href = "../pages/water-cooler.html";

    }, 800);

});