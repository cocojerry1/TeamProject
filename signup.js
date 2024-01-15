document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // prevent the form from submitting

    var name = document.getElementById('name').value;
    var user_id = document.getElementById('user_id').value;
    var pw = document.getElementById('pw').value;
    var age = document.getElementById('age').value;
    var gender = document.getElementById('gender').value;
    var genre = document.getElementById('Genre').value;

    // You can send these values to the server using AJAX or fetch API
    // Here is an example using fetch API

    fetch('/signupProc', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            user_id: user_id,
            pw: pw,
            age: age,
            gender: gender,
            genre: genre
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) { 
            // 회원가입 성공하면 login.html로 넘어가게
            window.location.href = "login.html";
        } else {
            // Handle the failure case
            alert(data.message); // assuming the server responds with { message: 'error message' } on failure
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
