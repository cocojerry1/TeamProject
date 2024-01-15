

// 로그인 페이지로 이동하기 누르면 로그인 페이지로 넘어가게 하는 코드
document.getElementById('login').addEventListener('click', function() {
    window.location.href = "login.html";
});



// 복주머니 생성 코드
setInterval(function createStar() {
    var starCount = Math.floor(Math.random() * 5); // 0~4개의 별을 랜덤하게 생성
    for(var i = 0; i < starCount; i++) {
        setTimeout(function() {
            var star = document.createElement("div");
            star.className = "star";
            star.style.left = Math.random() * window.innerWidth + "px";
            document.body.appendChild(star);
            setTimeout(function() {
                star.remove();
            }, 3000);
        }, i * 600); // 별 생성 시간을 600ms씩 늦춤
    }
}, 3000);

