const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNDIyOThiOWZmNDQzMDNjNzIzNDkwZjFhYjY3YzMyYiIsInN1YiI6IjY1OTRjYzk2N2U5ZDVmNWU3Y2YzNzllNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U5I30BOJInO0_ioET2ilBYiC8jTsAa9dIcq-Ne_j9ps'
    }
};
const searchInput = document.getElementById('search-input');

searchInput.addEventListener('input', function () {
    // 입력된 검색어
    const searchTerm = searchInput.value.toLowerCase();
    // 각 영화 카드에 대한 루프
    const movieCards = document.querySelectorAll('.movie-card');

    let matchFound = false;
    movieCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        // 검색어와 영화 제목 또는 설명이 일치하는 경우 보여줌
        if (title.includes(searchTerm)) {
            card.style.display = 'grid';
            matchFound = true;
        } else {
            card.style.display = 'none';
        }
    });
    // 일치하는 영화가 없는 경우 알림
    if (!matchFound && searchTerm) {
        alert("일치하는 영화가 없습니다");
    }
});
    // 일치하지 않는경우
    if (!matchFound && searchTerm) {
        alert("일치하는 영화가 없습니다");
    }

document.addEventListener('DOMContentLoaded', function () {
    const movieContainer = document.getElementById('movie-container');

    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
        .then(response => response.json())
        .then(data => {
            // 데이터에서 영화 목록 가져오기
            const movies = data.results;

            // 각 영화에 대해 카드 생성 및 표시
            movies.forEach(movie => {
                const card = document.createElement('div');
                card.classList.add('movie-card');

                card.dataset.movieId = movie.id;


                const title = document.createElement('h3');
                title.textContent = movie.title;

                const image = document.createElement('img');
                image.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
                image.alt = movie.title;

                const rating = document.createElement('p');
                rating.textContent = `Rating: ${movie.vote_average}`;

                const description = document.createElement('p');
                // description.textContent = movie.overview;

                // 클릭 이벤트를 추가하여 영화 ID를 출력하는 함수 호출
                image.addEventListener('click', function () {
                    showMovieDetail(movie.title, movie.poster_path, movie.overview);
                });


                card.appendChild(title);
                card.appendChild(image);
                card.appendChild(rating);

                // 설명을 오른쪽에 추가
                const descriptionContainer = document.createElement('div');
                descriptionContainer.classList.add('description-container');
                descriptionContainer.appendChild(description);
                card.appendChild(descriptionContainer);

                movieContainer.appendChild(card);
            });
        });



    // 모달 창 만들기
    function showMovieDetail(title, poster_path, overview, htmlContent) {
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.style.display = 'flex';
        const modalBody = document.createElement('div');
        modalBody.classList.add('modal_body');
        const modalImg = document.createElement('img');
        modalImg.src = `https://image.tmdb.org/t/p/w500/${poster_path}`;
        modalImg.classList.add('modal-image');
        const modalTitle = document.createElement('h2');
        modalTitle.textContent = title;
        modalTitle.classList.add('modal-title');
        const modalContent = document.createElement('p');
        modalContent.textContent = overview;
        modalContent.classList.add('modal-content');
        fetch('comment.html') // comment.html 파일의 경로를 입력합니다.
            .then(response => response.text())
            .then(data => {
                const htmlContentContainer = document.createElement('div');
                htmlContentContainer.innerHTML = data; // htmlContent는 문자열 형태의 HTML 코드입니다.
                modalBody.appendChild(htmlContentContainer);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        // 닫기 버튼 생성
        const closeButton = document.createElement('i');
        closeButton.classList.add('bx', 'bxs-x-square');
        closeButton.style.cursor = 'pointer';
        // 닫기 버튼 클릭 이벤트
        closeButton.addEventListener('click', function () {
            modal.remove();
            // 블러 효과 제거
            const elementsToBlur = document.querySelectorAll('body > *:not(.modal)');
            elementsToBlur.forEach(element => {
                element.classList.remove('blur-background');
            });
        });
        // 요소들을 모달 바디에 추가
        modalBody.appendChild(modalTitle);
        modalBody.appendChild(modalContent);
        modalBody.appendChild(modalImg);
        modalBody.appendChild(closeButton); // 닫기 버튼 추가
        modal.appendChild(modalBody);
        document.body.appendChild(modal);
        // 블러 효과 적용
        const elementsToBlur = document.querySelectorAll('body > *:not(.modal)');
        elementsToBlur.forEach(element => {
            element.classList.add('blur-background');
        });
        // 모달 외부 클릭 시 모달 닫기
        modal.addEventListener('click', function (event) {
            if (event.target === modal) {
                closeButton.click();
            }
        });
    }



    function showSaveButton(container) {
        const saveButton = container.querySelector('.save-btn');
        saveButton.style.display = 'block';
    }

    function hideSaveButton(container) {
        const saveButton = container.querySelector('.save-btn');
        saveButton.style.display = 'none';
    }

    function saveMovie(movieId) {
        // 원하는 동작을 수행하도록 추가 작업 수행
        console.log('Save Movie ID:', movieId);
    }
    // 검색어 입력란에서 엔터 키 입력 처리
    function searchKeyPress(event) {
        if (event.key === 'Enter') {
            searchMovies();
        }
    }

    // 검색 버튼 클릭 또는 엔터 키 입력 시 호출되는 함수
    function searchMovies() {
        const searchTerm = document.getElementById('search-input').value;

        // 검색어가 비어 있지 않은 경우에만 영화 검색 요청
        if (searchTerm.trim() !== '') {
            // TODO: 검색어를 이용하여 영화 검색 요청하는 코드 추가
            console.log('Search Term:', searchTerm);
            // 여기에 검색 기능을 추가할 수 있습니다.
            // 예: TMDB API 호출 및 검색 결과 표시 등
        }
    }
})
