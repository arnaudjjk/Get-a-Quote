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

// Function to display a random quote and change it live
function changeQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteBox = document.getElementById('quote');
    quoteBox.style.opacity = '0'; // Fade out the old quote
    setTimeout(() => {
        quoteBox.innerText = quotes[randomIndex]; // Change the quote text
        quoteBox.style.opacity = '1'; // Fade in the new quote
    }, 500); // Half-second delay for the fade-out effect
}

// Display the first quote when the page loads
function displayInitialQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteBox = document.getElementById('quote');
    quoteBox.innerText = quotes[randomIndex]; // Show the first quote immediately
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

// Initialize the page by loading dark mode preference and showing the first quote
window.addEventListener('DOMContentLoaded', (event) => {
    loadDarkModePreference();   // Load dark mode
    displayInitialQuote();      // Show the first quote
    setInterval(changeQuote, 10000); // Change the quote every 10 seconds
});
