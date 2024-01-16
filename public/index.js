var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // 5초마다 이미지 변경
}
// 댓글 등록 함수
function addComment() {
    var commentInput = document.getElementById('commentInput');
    var comments = localStorage.getItem('comments') ? JSON.parse(localStorage.getItem('comments')) : [];
    comments.push(commentInput.value);
    localStorage.setItem('comments', JSON.stringify(comments));
    displayComments();
    commentInput.value = '';
}

// 댓글 삭제 함수
function deleteComment(index) {
    var comments = localStorage.getItem('comments') ? JSON.parse(localStorage.getItem('comments')) : [];
    comments.splice(index, 1);
    localStorage.setItem('comments', JSON.stringify(comments));
    displayComments();
}
// 댓글 표시 함수
function displayComments() {
    var comments = localStorage.getItem('comments') ? JSON.parse(localStorage.getItem('comments')) : [];
    var commentsDiv = document.getElementById('comments');
    commentsDiv.innerHTML = '';
    for (var i = 0; i < comments.length; i++) {
        commentsDiv.innerHTML += '<p>' + comments[i] + ' <button style="background-color: white; color: black;" onclick="deleteComment(' + i + ')">댓글 삭제</button></p>';
}}
window.onload = function () {
    displayComments();
    var commentInput = document.getElementById('commentInput');
    commentInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.keyCode === 13) { // 'Enter' 키를 감지
            event.preventDefault(); // 'Enter' 키의 기본 동작인 줄바꿈을 막음
            addComment(); // 댓글 등록 함수 실행
        }
    });
}