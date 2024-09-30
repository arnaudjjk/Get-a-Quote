// Dark mode toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Load comments from local storage
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

// Add new comment
function addComment() {
    const commentInput = document.getElementById('commentInput');
    const commentList = document.getElementById('commentList');
    const newComment = commentInput.value.trim();

    if (newComment) {
        const li = document.createElement('li');
        li.textContent = newComment;
        commentList.appendChild(li);

        const savedComments = localStorage.getItem('comments');
        const comments = savedComments ? JSON.parse(savedComments) : [];
        comments.push(newComment);
        localStorage.setItem('comments', JSON.stringify(comments));

        commentInput.value = '';
    }
}

document.addEventListener('DOMContentLoaded', loadComments);
