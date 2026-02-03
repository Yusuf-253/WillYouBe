const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const displayGif = document.getElementById('displayGif');
const question = document.getElementById('question');
const btnWrapper = document.getElementById('btnWrapper');
const heartContainer = document.getElementById('heart-container');

let yesSize = 1.2;
let noClickCount = 0;

const noTexts = [
    "Are you sure?",
    "Really sure??",
    "Think again! 🥺",
    "Last chance!",
    "Surely not?",
    "You're breaking my heart ;(",
    "I'm gonna cry...",
    "Just say yes already!"
];

// Function to create falling hearts
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's'; // 2-5 seconds
    heart.style.opacity = Math.random();
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    
    heartContainer.appendChild(heart);

    // Remove heart after animation ends
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Start creating hearts
setInterval(createHeart, 300);

noBtn.addEventListener('click', () => {
    // Make Yes button bigger
    yesSize += 0.4;
    yesBtn.style.fontSize = `${yesSize}rem`;
    
    // Scale up padding proportionally
    const paddingY = 12 + (noClickCount * 4);
    const paddingX = 28 + (noClickCount * 8);
    yesBtn.style.padding = `${paddingY}px ${paddingX}px`;

    // Change No button text
    if (noClickCount < noTexts.length) {
        noBtn.innerText = noTexts[noClickCount];
    } else {
        noBtn.innerText = "Okay, I'm hiding the button now!";
        noBtn.style.display = 'none'; // Optional: hide the No button eventually
    }
    
    noClickCount++;
});

yesBtn.addEventListener('click', () => {
    question.innerText = "Yay! Best Valentine ever! 🥰";
    // Celebrate with a new gif
    displayGif.src = "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWV6ODVpdmljeHhwd3Z0NGx1OGtqYWttZXJwa2h2Z2Zza3hubTU4ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dvdcBNbAiNVT9Z0iwP/giphy.gif";
    
    // Hide the buttons
    btnWrapper.classList.add('hidden');
    
    // Increase heart frequency for celebration
    setInterval(createHeart, 100);
});