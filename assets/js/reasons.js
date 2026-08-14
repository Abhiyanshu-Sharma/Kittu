const envelope = document.getElementById("envelope");
const reason = document.getElementById("reason");

const instruction = document.getElementById("instruction");
const tapMessage = document.getElementById("tap-message");
const continueBtn = document.getElementById("continue-btn");


const reasons = [
    "I love the way you make even ordinary moments feel special.",
    "I love how easily you make me laugh.",
    "I love your smile.",
    "I love how comfortable I feel around you.",
    "I love the little things you do without even realizing them.",
    "I love talking to you about absolutely nothing.",
    "I love how you can make a bad day feel a little better.",
    "I love your random little comments.",
    "I love the way you get excited about things you love.",
    "I love our stupid inside jokes.",
    "I love how we can laugh at the same thing for the hundredth time.",
    "I love how being with you never feels like a chore.",
    "I love the memories we've made together.",
    "I love the way you understand me.",
    "I love how you make me feel appreciated.",
    "I love our conversations that somehow go on forever.",
    "I love how you can be adorable without trying.",
    "I love the little moments that only make sense to us.",
    "I love how much fun we have together.",
    "I love simply having you around.",
    "I love the way you look when you're genuinely happy.",
    "I love how you make me want to make more memories with you.",
    "I love our weirdness.",
    "I love that I can be completely myself around you.",
    "I love the way you care about the people you love."
];


const getRandomReason = () => {

    const index = Math.floor(
        Math.random() * reasons.length
    );

    return reasons[index];
};


envelope.addEventListener("click", () => {

    const randomReason = getRandomReason();

    reason.textContent = randomReason;

    envelope.classList.add("open");

    instruction.textContent = "A few of the reasons... ❤️";

    tapMessage.textContent = "Tap anywhere to close";

});

document.addEventListener("click", (event) => {

    if (!envelope.classList.contains("open")) return;

    if (envelope.contains(event.target)) return;

    envelope.classList.remove("open");

    reason.textContent = "";

    instruction.textContent = "There are probably more than I can count...";

    tapMessage.textContent = "Open it ❤️";

});

continueBtn.addEventListener("click", () => {

    document.body.classList.add("fade-out");

    setTimeout(() => {
        window.location.href = "final.html";
    }, 800);

});