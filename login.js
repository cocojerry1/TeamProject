document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // prevent the form from submitting

    var user_id = document.getElementById('user_id').value;
    var pw = document.getElementById('pw').value;
    var rememberMe = document.getElementById('remember-me').checked;

    // You can send these values to the server using AJAX or fetch API
    // Here is an example using fetch API

    fetch('/loginProc', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user_id: user_id,
            pw: pw,
            remember_me: rememberMe
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) { // assuming the server responds with { success: true } on success
            // Redirect to index.html
            window.location.href = "index.html";
        } else {
            // Handle the failure case
            alert(data.message); // assuming the server responds with { message: 'error message' } on failure
        }
    })
    .catch(error => {
        // Handle the error
        console.error('Error:', error);
    });
});
