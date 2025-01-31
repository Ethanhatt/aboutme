document.addEventListener('DOMContentLoaded', function() {
    function updateTime() {
        const timeElement = document.getElementById('time-display');
        if (timeElement) {
            const now = new Date();
            let hours = now.getHours();
            let minutes = now.getMinutes().toString().padStart(2, '0');
            const ampm = hours >= 12 ? 'PM' : 'AM';
            
            // Convert to 12-hour format
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
            
            timeElement.textContent = `${hours}:${minutes} ${ampm}`;
        }
    }

    updateTime();
    setInterval(updateTime, 1000);
});