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

function loadComments() {
    const savedComments = localStorage.getItem('comments');
    const commentList = document.getElementById('commentList');
    if (savedComments) {
        const comments = JSON.parse(savedComments);
        comments.forEach(comment => {
            const li = document.createElement('li');
            li.textContent = comment;
            commentList.appendChild(li);
        });
    }
}

function addComment() {
    const commentInput = document.getElementById('commentInput');
    const commentList = document.getElementById('commentList');
    const newComment = commentInput.value.trim();

    if (newComment) {
        // Add comment to list
        const li = document.createElement('li');
        li.textContent = newComment;
        commentList.appendChild(li);

        // Save comment in local storage
        const savedComments = localStorage.getItem('comments');
        const comments = savedComments ? JSON.parse(savedComments) : [];
        comments.push(newComment);
        localStorage.setItem('comments', JSON.stringify(comments));

        // Clear input field
        commentInput.value = '';
    }
}

// Load comments on page load
document.addEventListener('DOMContentLoaded', loadComments);
