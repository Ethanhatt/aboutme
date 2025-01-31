function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById('time-display').textContent = timeString;
}

// Update immediately
updateTime();

// Update every second
setInterval(updateTime, 1000);