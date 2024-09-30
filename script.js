let compliments = [
    "You have an amazing smile!",
    "You light up the room.",
    "You're incredibly kind.",
    "Your creativity is inspiring!",
    "You have a heart of gold.",
    "You're a great listener.",
    "Your positivity is contagious!",
    "You make a difference in the world.",
    "You’re more powerful than you know.",
    "You bring out the best in people!"
];

// Function to change compliments every 10 seconds
function changeCompliment() {
    const randomIndex = Math.floor(Math.random() * compliments.length);
    const complimentBox = document.getElementById('compliment');
    complimentBox.style.opacity = '0'; // Fade out

    setTimeout(() => {
        complimentBox.innerText = compliments[randomIndex];
        complimentBox.style.opacity = '1'; // Fade in
    }, 500); // Wait 500ms before changing the compliment
}

// Set the interval to change compliments every 10 seconds
setInterval(changeCompliment, 10000);

// Initially display a compliment
window.onload = changeCompliment;

// Toggle dark mode and save preference to localStorage
function toggleDarkMode() {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    document.querySelector('.container').classList.toggle('dark-mode');
    document.querySelector('.compliment-box').classList.toggle('dark-mode');
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
}

// Submit a custom compliment
function submitCompliment() {
    const customCompliment = document.getElementById('customCompliment').value;
    if (customCompliment.trim() !== "") {
        compliments.push(customCompliment);  // Add to compliment array
        document.getElementById('customCompliment').value = "";  // Clear input
        alert("Thank you! Your compliment has been added.");
    }
}

// Load dark mode preference from localStorage
function loadDarkModePreference() {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'enabled') {
        document.body.classList.add('dark-mode');
        document.querySelector('.container').classList.add('dark-mode');
        document.querySelector('.compliment-box').classList.add('dark-mode');
        document.getElementById('darkModeToggle').checked = true;
    }
}

// Load dark mode preference when the page loads
window.onload = function() {
    loadDarkModePreference();
    changeCompliment(); // Start with a random compliment
};
