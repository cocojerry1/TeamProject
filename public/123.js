<html lang="en">

<head>
    <meta charset="UTF-8">
    <mata http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Responsive Movies Website</title>
        <!-- Link TO CSS-->
        <link rel="stylesheet" href="style.css">
        <!-- Fov Icon-->
        <link rel="shortcut icon" href="img/fav-icon.png" type="image/x-icon">
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Movie Cards</title>
</head>

<body>
 

    <div class="main_container"> <!-- 헤더 -->
        <header>
            <div class="nav container">
                <a href="index.html" class="logo">
                    NEA<span>FLEX</span>
                </a>
                <!-- 검색 창 만들기 -->
                <div class="search-box">
                    <input type="search" name="" id="search-input" placeholder="Search movie"
                        onkeydown="searchKeyPress(event)">
                    <i class='bx bx-search' onclick="searchMovies()"></i>
                    <!--placeholder은 그냥 이거에 대한 설명임 개발자가 알아볼수 있께-->

                </div>
                <!-- User -->
                <a href="#" class="user">
                    <img src="https://th.bing.com/th/id/OIP._0nj-VCGpTVBUPZYf0UHYAHaHa?w=206&h=206&c=7&r=0&o=5&pid=1.7"
                        alt="" class="user-img">
                </a>
                <div class="navbar">
                    <a href="index.html" class="nav-link nav-active ">
                        <i class='bx bx-home'></i>
                        <span class="nav-link-title">Home</span>
                    </a>
                    <a href="populars.html" class="nav-link">
                        <i class='bx bxs-hot'></i>
                        <span class="nav-link-title">Populars</span>
                    </a>

                    <a href="latest movies.html" class="nav-link">
                        <i class='bx bx-tv'></i>
                        <span class="nav-link-title">latest movies</span>
                    </a>

                    <a href="favourite.html" class="nav-link">
                        <i class='bx bx-heart'></i>
                        <span class="nav-link-title">Favourite</span>
                    </a>
                </div>
            </div>
        </header>
        <section class="home container" id="home">
            <div class="home-text">
                <h1 class="home-title"></h1>
                <h1>올해 상영 예정 영화</h1>
                <br>
                <div class="slideshow-container">
                    <div class="mySlides fade">
                        <div class="slide-content">
                            <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdBbLVJ%2FbtsAJxXfRKz%2FqYk4HwSYyYgnpqAE2I2Ly1%2Fimg.jpg"
                                style="width:50%">
                            <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FC5UIH%2FbtsAxalZdL3%2Fmh5O93VqBa9Qi1nvpIoITk%2Fimg.webp"
                                style="width:50%">
                        </div>
                    </div>

                    <div class="mySlides fade">
                        <div class="slide-content">
                            <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FMXosE%2FbtsA313DKiS%2FNqaYB1nS9C4TgvfFPK8jb0%2Fimg.webp"
                                style="width:50%">
                            <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FBIUzA%2FbtsCpzFPf1G%2FGLhGRk5l8jXPjopXGvuC00%2Fimg.webp"
                                style="width:50%">
                        </div>
                    </div>
                    <div class="mySlides fade">
                        <div class="slide-content">
                            <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FclkIcS%2FbtsAuPQoiF2%2FK23y4Kp29QyWylTuIxI80K%2Fimg.webp"
                                style="width:50%">
                            <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdaLkVu%2FbtszL0xJTL0%2Fo8iycwxGoTTkUwslLj68c1%2Fimg.webp"
                                style="width:50%">
                        </div>
                    </div>
                    <div class="mySlides fade">
                        <div class="slide-content">
                            <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FE0Ou7%2FbtsDbegpzzn%2FN2qKyvSJS5AKrjyMce7gu1%2Fimg.jpg"
                                style="width:50%">
                            <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb6kfrx%2FbtsCP37mvtD%2FMWO8XRXSWLzpOmG321w2D0%2Fimg.jpg"
                                style="width:50%">
                        </div>
                    </div>
                    <div class="mySlides fade">
                        <div class="slide-content">
                            <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcRmomE%2FbtsCP4L6kOc%2Fs4HYSvViFvr7MnuAV90wm1%2Fimg.jpg"
                                style="width:50%">
                            <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FREpcg%2FbtrJuRFDLAX%2FZcqgvyfgPOxBRNkSElivSk%2Fimg.jpg"
                                style="width:50%">
                        </div>
                    </div>
                    <div class="mySlides fade">
                        <div class="slide-content">
                            <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdMfrYH%2FbtsCTAXBpsF%2F5VR55t9s5tQSkYULP7DbXK%2Fimg.jpg"
                                style="width:50%">
                            <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcXdSNi%2Fbtsz5lCm2hk%2FpVDSZtaMIFoEekiKtrvmQ0%2Fimg.jpg"
                                style="width:50%">
                        </div>
                    </div>
                    <div class="mySlides fade">
                        <div class="slide-content">
                            <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FUYDaj%2FbtsCtphEbDN%2FlpekWLJexs4a0DcSMEd6kk%2Fimg.webp"
                                style="width:50%">
                            <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbY65to%2FbtsyuMnJD6e%2FsRTTBnnSxbfXmWok5sD6U1%2Fimg.jpg"
                                style="width:50%">
                        </div>
                    </div>
                    <div class="mySlides fade">
                        <div class="slide-content">
                            <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbt6WFA%2FbtsiOGPJiQy%2FE1L0ciTKjkIwyiHbJbXcK1%2Fimg.webp"
                                style="width:50%">
                            <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbt6WFA%2FbtsiOGPJiQy%2FE1L0ciTKjkIwyiHbJbXcK1%2Fimg.webp"
                                style="width:50%">
                        </div>
                    </div>
                </div>
                <br>
                <div class="comment-form">
                    <h3>상영 영화에 대한 기대평을 남겨주세요. 추첨을 통해 총 500분께 100만 메소를 드립니다</h3>
                    <h2 class="comment-title">댓글 남기기</h2>
                    <textarea id="commentInput" placeholder="댓글을 작성하세요."></textarea>
                    <button onclick="addComment()"></button>
                </div>
                <!-- 댓글 표시 영역 -->
                <div class="comments" id="comments">
                   
                </div>


                </a>
            </div>
    </div>

    <!-- Link To JS-->
    <script src="index.js"></script>
    <script src="comment.js"></script>
    

</body>