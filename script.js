let quotes = [
    "The best way to predict the future is to create it.",
    "Don't watch the clock; do what it does. Keep going.",
    "Success is not how high you have climbed, but how you make a positive difference to the world.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "The purpose of our lives is to be happy.",
    "Life is what happens when you're busy making other plans.",
    "Get busy living or get busy dying.",
    "You have within you right now, everything you need to deal with whatever the world can throw at you."
];

let backgrounds = [
    'linear-gradient(135deg, #f0e4ff 0%, #d6f7f9 100%)', // Light gradient
    'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)', // Pink gradient
    'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)', // Blue gradient
    'linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)', // Green gradient
    'linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)', // Subtle gray gradient
];

// Function to change quotes and background every 30 seconds
function changeQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomBackground = Math.floor(Math.random() * backgrounds.length);
    
    const quoteBox = document.getElementById('quote');
    const body = document.body;

    quoteBox.style.opacity = '0'; // Fade out old quote
    setTimeout(() => {
        quoteBox.innerText = quotes[randomIndex]; // Change quote
        body.style.background = backgrounds[randomBackground]; // Change background
        quoteBox.style.opacity = '1'; // Fade in new quote
    }, 500); // 500ms delay for smooth transition
}

// Function to animate the progress bar
function resetProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = '100%'; // Reset to full width
    setTimeout(() => {
        progressBar.style.transition = 'none'; // Disable transition to instantly reset
        progressBar.style.width = '0%'; // Animate to 0% over 30 seconds
        setTimeout(() => {
            progressBar.style.transition = 'width 30s linear'; // Re-enable transition for the next cycle
            progressBar.style.width = '100%'; // Start the progress bar animation
        }, 100); // Delay before resetting animation
    }, 100); // Slight delay to ensure the animation restarts
}

// Display the first quote and background on page load
function displayInitialQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomBackground = Math.floor(Math.random() * backgrounds.length);

    const quoteBox = document.getElementById('quote');
    const body = document.body;

    quoteBox.innerText = quotes[randomIndex]; // Show first quote
    body.style.background = backgrounds[randomBackground]; // Set initial background
}

// Toggle dark mode and save the preference in localStorage
function toggleDarkMode() {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    document.querySelector('.container').classList.toggle('dark-mode');
    document.querySelector('.quote-box').classList.toggle('dark-mode');
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
}

// Load the dark mode preference from localStorage
function loadDarkModePreference() {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'enabled') {
        document.body.classList.add('dark-mode');
        document.querySelector('.container').classList.add('dark-mode');
        document.querySelector('.quote-box').classList.add('dark-mode');
        document.getElementById('darkModeToggle').checked = true;
    }
}

// Initialize the page
window.addEventListener('DOMContentLoaded', () => {
    loadDarkModePreference();   // Load dark mode preference
    displayInitialQuote();      // Show the first quote
    resetProgressBar();         // Start progress bar
    setInterval(() => {
        changeQuote();
        resetProgressBar();     // Reset progress bar with every new quote
    }, 30000); // Change quote and background every 30 seconds
});
