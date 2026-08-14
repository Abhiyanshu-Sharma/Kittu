const box = document.getElementById("box");

const sleepingCat = document.getElementById("sleeping-cat");
const playingCat = document.getElementById("playing-cat");
const heartCat = document.getElementById("heart-cat");

const instruction = document.getElementById("instruction");
const petMessage = document.getElementById("pet-message");
const continueBtn = document.getElementById("continue-btn");

let currentState = "box";

box.addEventListener("click", () => {
    box.classList.add("hide-box");

    sleepingCat.classList.add("active");

    instruction.textContent = "Oh... someone's sleeping. 🐈";

    petMessage.classList.remove("hidden");

    currentState = "sleeping";
});

sleepingCat.addEventListener("pointerdown", () => {

    if (currentState !== "sleeping") return;

    sleepingCat.classList.remove("active");

    playingCat.classList.add("active");

    instruction.textContent = "Aww... she wants to play 🐾";

    petMessage.textContent = "Keep playing with her ❤️";

    currentState = "playing";

    setTimeout(() => {

        if (currentState !== "playing") return;

        playingCat.classList.remove("active");

        heartCat.classList.add("active");

        instruction.textContent = "I think she likes you ❤️";

        petMessage.classList.add("hidden");

        continueBtn.classList.remove("hidden");

        currentState = "heart";

    }, 4000);
});

continueBtn.addEventListener("click", () => {

    document.body.classList.add("fade-out");

    setTimeout(() => {

        window.location.href = "reasons.html";

    }, 800);

});