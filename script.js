// Array of quotes
const quotes = [
    "Success is not how high you have climbed, but how you make a positive difference to the world.",
    "The best way to predict the future is to create it.",
    "Your time is limited, don't waste it living someone else's life.",
    "Don't watch the clock; do what it does. Keep going.",
    "Success usually comes to those who are too busy to be looking for it.",
    "The only limit to our realization of tomorrow is our doubts of today."
];

// Get elements
const quoteElement = document.getElementById('quote');
const progressBar = document.getElementById('progress-bar');

// Function to change the quote every 30 seconds
function updateQuote() {
    let currentQuoteIndex = 0;

    // Start the quote update loop and reset progress bar every 30 seconds
    setInterval(() => {
        // Update the quote text
        currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
        quoteElement.textContent = quotes[currentQuoteIndex];

        // Reset progress bar and fill over 30 seconds
        progressBar.style.transition = 'none'; // Stop transition for reset
        progressBar.style.width = '0%'; // Reset the bar to zero width
        setTimeout
