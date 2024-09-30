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
        // Debugging to check if quotes are being updated
        console.log('Current Quote Index: ', currentQuoteIndex);
        console.log('Displaying Quote: ', quotes[currentQuoteIndex]);

        // Update the quote text
        quoteElement.textContent = quotes[currentQuoteIndex];

        // Reset progress bar
        progressBar.style.transition = 'none'; // Stop transition for reset
        progressBar.style.width = '0%'; // Reset the bar to zero width
        setTimeout(() => {
            progressBar.style.transition = 'width 30s linear'; // Smooth transition over 30s
            progressBar.style.width = '100%'; // Animate the progress bar to fill
        }, 100); // Small delay for smooth reset

        // Move to the next quote
        currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;

    }, 30000); // Change quote every 30 seconds
}

// Initialize the first quote and progress bar
function initQuoteUpdater() {
    quoteElement.textContent = quotes[0]; // Start with the first quote
    progressBar.style.width = '100%'; // Start progress bar fill
    progressBar.style.transition = 'width 30s linear'; // Animate progress bar fill over 30s
    updateQuote(); // Start updating the quote and progress bar
}

// Start everything when the page loads
window.onload = initQuoteUpdater;
