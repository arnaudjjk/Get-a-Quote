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

// Function to change quotes every 10 seconds
function changeQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteBox = document.getElementById('quote');
    quoteBox.style.opacity = '0'; // Fade out
    setTimeout(() => {
        quoteBox.innerText = quotes[randomIndex]; // Update the quote
        quoteBox.style.opacity = '1'; // Fade in
    }, 500); // Wait 500ms before changing the quote
}

// Function to display a quote on page load
function displayInitialQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteBox = document.getElementById('quote');
    quoteBox.innerText = quotes[randomIndex]; // Show the first quote
}

// Toggle dark mode and save preference to localStorage
function toggleDarkMode() {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    document.querySelector('.container').classList.toggle('dark-mode');
    document.querySelector('.quote-box').classList.toggle('dark-mode');
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
}

// Load dark mode preference on page load
function loadDarkModePreference() {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'enabled') {
        document.body.classList.add('dark-mode');
        document.querySelector('.container').classList.add('dark-mode');
        document.querySelector('.quote-box').classList.add('dark-mode');
        document.getElementById('darkModeToggle').checked = true;
    }
}

// Run this function once the DOM is fully loaded
window.addEventListener('DOMContentLoaded', (event) => {
    loadDarkModePreference();  // Load dark mode preference
    displayInitialQuote();     // Show the first quote on page load
    setInterval(changeQuote, 10000);  // Change quotes every 10 seconds
});
