function updateClock() {
    const now = new Date();
    
    // Get hours, minutes, and seconds
    let h = now.getHours().toString().padStart(2, '0');
    let m = now.getMinutes().toString().padStart(2, '0');
    let s = now.getSeconds().toString().padStart(2, '0');
    
    // Display the time
    document.getElementById('clock').textContent = `${h}:${m}:${s}`;
    
    // Display the date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('date').textContent = now.toLocaleDateString(undefined, options);
}

// Update the clock every 1000ms (1 second)
setInterval(updateClock, 1000);

// Dark Mode Toggle Logic
const btn = document.getElementById('theme-toggle');
btn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Run once immediately so it doesn't wait 1 second to start
updateClock();