let clockInterval;
let isRunning = true;

function updateClock() {
    const now = new Date();
    
    // Format Time
    let h = now.getHours().toString().padStart(2, '0');
    let m = now.getMinutes().toString().padStart(2, '0');
    let s = now.getSeconds().toString().padStart(2, '0');
    
    // Format Date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString(undefined, options);

    // Update the UI
    document.getElementById('clock').innerHTML = `${h}:${m}<span>:${s}</span>`;
    document.getElementById('date').textContent = dateString;
}

// Start the timer
function start() {
    clockInterval = setInterval(updateClock, 1000);
    updateClock();
}

// STOP / RESET Button Logic
const resetBtn = document.getElementById('reset-btn');
resetBtn.addEventListener('click', () => {
    if (isRunning) {
        clearInterval(clockInterval);
        document.getElementById('clock').innerHTML = `00:00<span>:00</span>`;
        resetBtn.textContent = "Start Clock";
        resetBtn.style.background = "rgba(71, 255, 123, 0.2)"; // Green tint
    } else {
        start();
        resetBtn.textContent = "Stop Clock";
        resetBtn.style.background = "rgba(255, 71, 71, 0.2)"; // Red tint
    }
    isRunning = !isRunning;
});

// Theme Toggle Logic
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
});

// Initialize the clock
start();