let compliments = [
    "You have an amazing smile!",
    "You light up the room.",
    "You're incredibly kind.",
    "Your creativity is inspiring!",
    "You have a heart of gold.",
    "You're a great listener.",
    "Your positivity is contagious.",
    "You make a difference in the world.",
    "You’re more powerful than you know.",
    "You bring out the best in people!"
];

// Function to generate a random compliment and open modal
function openComplimentModal() {
    const randomIndex = Math.floor(Math.random() * compliments.length);
    const compliment = compliments[randomIndex];

    const complimentText = document.getElementById('complimentText');
    const complimentSound = document.getElementById('complimentSound');

    complimentText.innerText = compliment; // Set compliment text
    complimentSound.play(); // Play sound effect

    const modal = document.getElementById('complimentModal');
    modal.style.display = 'flex'; // Show modal

    // Close modal when clicking outside of it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none'; // Close modal
        }
    }
}

// Toggle dark mode and save preference to localStorage
function toggleDarkMode() {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    document.querySelector('.container').classList.toggle('dark-mode');
    document.querySelectorAll('.generate-btn, .submit-btn, .donation-btn').forEach(btn => {
        btn.classList.toggle('dark-mode');
    });
    document.querySelector('.modal-content').classList.toggle('dark-mode');

    // Save dark mode preference
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
        document.querySelectorAll('.generate-btn, .submit-btn, .donation-btn').forEach(btn => {
            btn.classList.add('dark-mode');
        });
        document.querySelector('.modal-content').classList.add('dark-mode');
        document.getElementById('darkModeToggle').checked = true;
    }
}

// Load dark mode preference when the page loads
window.onload = loadDarkModePreference;
