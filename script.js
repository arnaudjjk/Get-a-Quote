let visitorCount = 0;

// Simulate a live visitor count increasing every 1/10th of a second
function updateVisitorCount() {
    const visitorElement = document.getElementById('visitor-count');
    visitorCount += Math.floor(Math.random() * 3) + 1; // Increment count randomly
    visitorElement.innerText = visitorCount.toLocaleString(); // Display with commas
}

// Run the updateVisitorCount function every 1/10th of a second (100ms)
setInterval(updateVisitorCount, 100);

// Function to toggle dark mode
function toggleDarkMode() {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    document.querySelector('.container').classList.toggle('dark-mode');
    document.querySelector('.quote-box').classList.toggle('dark-mode');
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
}

// Load dark mode preference
function loadDarkModePreference() {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'enabled') {
        document.body.classList.add('dark-mode');
        document.querySelector('.container').classList.add('dark-mode');
        document.querySelector('.quote-box').classList.add('dark-mode');
        document.getElementById('darkModeToggle').checked = true;
    }
}

// Initialize the page with dark mode preference
window.addEventListener('DOMContentLoaded', () => {
    loadDarkModePreference();
});
