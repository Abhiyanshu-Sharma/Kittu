const cooler = document.getElementById("cooler");
const water = document.getElementById("water");
const progress = document.getElementById("progress");
const progressText = document.getElementById("progress-text");
const instruction = document.getElementById("instruction");
const completionMessage = document.getElementById("completionMessage");

let waterLevel = 0;
let filling = false;
let animationId;


// Start Filling
const startFilling = () => {

    if (waterLevel >= 100) return;

    filling = true;

    cooler.classList.add("filling");

    instruction.textContent = "Keep holding... 💧";

    fillWater();
};


// Stop Filling
const stopFilling = () => {

    filling = false;

    cooler.classList.remove("filling");

    if (waterLevel < 100) {
        instruction.textContent = "Hold the cooler to fill it 💧";
    }
};


// Fill the cooler
const fillWater = () => {

    if (!filling) return;

    waterLevel += 0.5;

    if (waterLevel >= 100) {

        waterLevel = 100;

        updateWater();

        completeGame();

        return;
    }

    updateWater();

    animationId = requestAnimationFrame(fillWater);
};


// Update Water
const updateWater = () => {

    water.style.height = `${waterLevel}%`;

    progress.style.width = `${waterLevel}%`;

    progressText.textContent = `${Math.floor(waterLevel)}%`;
};


// Game Completed
const completeGame = () => {

    filling = false;

    cooler.classList.remove("filling");

    instruction.classList.add("hide");

    completionMessage.classList.remove("hide");

    completionMessage.textContent = "Cooler full! 💧 You did it!";
};


// Mouse + Touch
cooler.addEventListener("pointerdown", startFilling);

cooler.addEventListener("pointerup", stopFilling);

cooler.addEventListener("pointerleave", stopFilling);

cooler.addEventListener("pointercancel", stopFilling);


// Prevent browser context menu
cooler.addEventListener("contextmenu", (event) => {
    event.preventDefault();
});