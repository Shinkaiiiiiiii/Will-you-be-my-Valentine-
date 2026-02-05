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
    "step2.gif"
];

// LIST OF IMAGES FOR "YES" BUTTON (Success Slideshow)
const yesImages = [
    "yes1.gif",
    "yes2.gif",
    "yes3.gif",
    "yes4.gif" // I kept yes4 because you uploaded it earlier!
];

let noCount = 0;
let yesIndex = 0; // Track which 'Yes' image we are showing

function nextPage() {
    document.getElementById("question-container").style.display = "none";
    document.getElementById("success-container").style.display = "block";
    
    // --- SLIDESHOW LOGIC STARTS HERE ---
    
    // 1. Show the first image immediately
    document.getElementById("successImage").src = yesImages[0];

    // 2. Start the loop to change image every 2 seconds
    setInterval(function() {
        // Move to the next index, loop back to 0 if at the end
        yesIndex = (yesIndex + 1) % yesImages.length;
        document.getElementById("successImage").src = yesImages[yesIndex];
    }, 2000); // 2000 milliseconds = 2 seconds
    
    // --- SLIDESHOW LOGIC ENDS HERE ---

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
    const imageIndex = noCount % noImages.length;
    mainImage.src = noImages[imageIndex];

    // 3. Grow the YES button
    var currentFontSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    var newSize = currentFontSize * 1.2; 
    yesButton.style.fontSize = newSize + "px";
    
    // Update padding
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