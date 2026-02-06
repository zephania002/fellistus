// --- Countdown Logic ---
function updateCountdown() {
    const targetDate = new Date("February 14, 2026 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = targetDate - now;

    // Time calculations
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    if (gap > 0) {
        document.getElementById('days').innerText = Math.floor(gap / day);
        document.getElementById('hours').innerText = Math.floor((gap % day) / hour);
        document.getElementById('mins').innerText = Math.floor((gap % hour) / minute);
        document.getElementById('secs').innerText = Math.floor((gap % minute) / second);
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();

// --- Interactive Elements ---
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const mainCard = document.getElementById('main-card');
const celebration = document.getElementById('celebration');

noBtn.addEventListener('mouseover', () => {
    // Avoid the button jumping off-screen
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    noBtn.style.position = 'fixed';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

yesBtn.addEventListener('click', () => {
    mainCard.style.display = 'none';
    celebration.classList.remove('hidden');
    // Launch confetti effect
    setInterval(createHearts, 200);
});

function createHearts() {
    const heart = document.createElement('div');
    heart.classList.add('heart-float');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}

// Initial subtle hearts
setInterval(createHearts, 2000);