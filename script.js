let clockInterval;
let isRunning = true;

function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    
    // 1. DYNAMIC GREETING
    let greetingText = "";
    if (hours < 12) greetingText = "Good Morning ☀️";
    else if (hours < 18) greetingText = "Good Afternoon 🌤️";
    else greetingText = "Good Evening 🌙";
    document.getElementById('greeting').textContent = greetingText;

    // 2. CLOCK DATA
    let h = hours.toString().padStart(2, '0');
    let m = now.getMinutes().toString().padStart(2, '0');
    let s = now.getSeconds().toString().padStart(2, '0');
    
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    
    document.getElementById('clock').innerHTML = `${h}:${m}<span>:${s}</span>`;
    document.getElementById('date').textContent = now.toLocaleDateString(undefined, options);
}

// 3. THEME PERSISTENCE (LocalStorage)
const themeBtn = document.getElementById('theme-toggle');

// Check for saved theme on load
if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-theme');
}

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    // Save preference to browser storage
    if (document.body.classList.contains('light-theme')) {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }
});

function start() {
    clockInterval = setInterval(updateClock, 1000);
    updateClock();
}

const resetBtn = document.getElementById('reset-btn');
resetBtn.addEventListener('click', () => {
    if (isRunning) {
        clearInterval(clockInterval);
        document.getElementById('clock').innerHTML = `00:00<span>:00</span>`;
        resetBtn.textContent = "Start Clock";
        resetBtn.style.background = "rgba(71, 255, 123, 0.2)";
    } else {
        start();
        resetBtn.textContent = "Stop Clock";
        resetBtn.style.background = "rgba(255, 71, 71, 0.2)";
    }
    isRunning = !isRunning;
});

// Initial call
start();