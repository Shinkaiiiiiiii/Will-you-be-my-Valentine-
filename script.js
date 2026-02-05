// LIST OF TEXTS
const phrases = [
    "No",
    "Are you sure?",
    "Really sure?",
    "Think again!",
    "Last chance!",
    "Surely not?",
    "You might regret this!",
    "Give it another thought!",
    "Are you absolutely certain?",
    "This could be a mistake!",
    "Have a heart!",
    "Don't be so cold!",
    "Change of heart?",
    "Wouldn't you reconsider?",
    "Is that your final answer?",
    "You're breaking my heart ;(",
    "Is that your final answer?",
    "You're breaking my heart ;(",
    "Plsss? :( You're breaking my heart",
];

// LIST OF IMAGES FOR "NO" BUTTON (Begging)
const noImages = [
    "beg0.gif",
    "beg1.gif",
    "beg2.gif",
    "beg3.gif",
    "beg.gif",
    "step2.gif" // Added the extra gif here!
];

// LIST OF IMAGES FOR "YES" BUTTON (Success)
const yesImages = [
    "yes1.gif",
    "yes2.gif",
    "yes3.gif",
    "yes4.gif"
];

let noCount = 0;

function nextPage() {
    document.getElementById("question-container").style.display = "none";
    document.getElementById("success-container").style.display = "block";
    
    // Pick a RANDOM image from the yesImages list
    const randomYesImage = yesImages[Math.floor(Math.random() * yesImages.length)];
    document.getElementById("successImage").src = randomYesImage;
    
    triggerConfetti();
}

function moveButton() {
    var noButton = document.getElementById('noButton');
    var yesButton = document.getElementById('yesButton');
    var mainImage = document.getElementById('mainImage');
    
    // 1. Change Text
    noCount++;
    if (noCount < phrases.length) {
        noButton.innerText = phrases[noCount];
    } else {
        noButton.innerText = phrases[phrases.length - 1];
    }

    // 2. Change Image (Cycle through the list)
    // The % operator loops back to 0 when it reaches the end of the list
    const imageIndex = noCount % noImages.length;
    mainImage.src = noImages[imageIndex];

    // 3. Grow the YES button (Slower growth rate)
    var currentFontSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    var newSize = currentFontSize * 1.2; // Changed from 1.6 to 1.2 (Less aggressive)
    yesButton.style.fontSize = newSize + "px";
    
    // Update padding to balance the look
    var currentPadding = parseFloat(window.getComputedStyle(yesButton).padding);
    yesButton.style.padding = (currentPadding * 1.1) + "px";
}

// Confetti Effect
function triggerConfetti() {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
}