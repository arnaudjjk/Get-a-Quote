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

    // Set interval for updating the quote every 30 seconds
    setInterval(() => {
        // Update the quote text
        currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
        quoteElement.textContent = quotes[currentQuoteIndex];

        // Reset progress bar
        progressBar.style.transition = 'none'; // Remove transition for reset
        progressBar.style.width = '0%'; // Reset width
        setTimeout(() => {
            progressBar.style.transition = 'width 30s linear'; // Reapply transition
            progressBar.style.width = '100%'; // Fill progress bar over 30 seconds
        }, 100); // Small delay for resetting the transition
    }, 30000); // 30 seconds interval
}

// Initialize the first quote and start progress bar animation
function initQuoteUpdater() {
    quoteElement.textContent = quotes[0]; // Start with the first quote
    progressBar.style.width = '100%'; // Start progress bar
    progressBar.style.transition = 'width 30s linear'; // Animate progress bar
    updateQuote(); // Start quote update loop
}

// Start the quote updating process on page load
window.onload = initQuoteUpdater;
