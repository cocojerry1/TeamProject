


function clearAllComments() {
    localStorage.removeItem('comments');
    loadComments();
    alert('리뷰가 모두 삭제되었습니다.');
}





function loadComments() {
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    const commentsSection = document.getElementById('comment-section');
    commentsSection.innerHTML = '';
    comments.forEach((comment, index) => {
        const commentElement = document.createElement('div');
        commentElement.classList.add('comment');
        commentElement.innerHTML = `
            <strong>${comment.author}</strong>: ${comment.body} 
            <span class="comment-rating">평점: ${comment.rating}</span>
            <button onclick="deleteComment(${index})">삭제하기</button>`; 
        commentsSection.appendChild(commentElement);
    });
}


function submitComment() {
    const author = document.getElementById('comment-author').value;
    const password = document.getElementById('comment-password').value; // Get the password
    const body = document.getElementById('comment-body').value;
    const rating = document.getElementById('rate').value;
    const comment = { author, body, rating, password }; // Include the password here
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.push(comment);
    localStorage.setItem('comments', JSON.stringify(comments));
    loadComments();
    document.getElementById('comment-form').reset();
}

function deleteComment(index) {
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    const passwordToVerify = prompt("비밀번호를입력하세요!!:");

    if (comments[index] && comments[index].password === passwordToVerify) {
        comments.splice(index, 1); // Remove the comment at the given index
        localStorage.setItem('comments', JSON.stringify(comments)); // Update local storage
        loadComments(); // Refresh comments display
    } else {
        alert("잘못된 비밀번호입니다!!.");
    }
}

function setRating(value) {
    document.getElementById('rate').value = value;

    // 클릭한 별 이전의 별들을 채운 색상으로 변경
    const stars = document.querySelectorAll('.rating__star');
    stars.forEach((star, index) => {
        if (index < value) {
            star.classList.add('filled');
        } else {
            star.classList.remove('filled');
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    if (localStorage.getItem('loaded') !== 'true') {
        loadComments();
        localStorage.setItem('loaded', 'true');
    }
    const commentsSection = document.getElementById('comment-section');
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.forEach(comment => {
        const commentElement = document.createElement('div');
        commentElement.classList.add('comment');
        commentElement.innerHTML = `<strong>${comment.author}</strong>: ${comment.body} <span class="comment-rating">평점: ${comment.rating}</span>`;
        commentsSection.appendChild(commentElement);
    });
});


