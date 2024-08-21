document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Predefined credentials (for demonstration purposes)
    const validUsername = 'admin';
    const validPassword = 'password123';

    if (username === validUsername && password === validPassword) {
        // Successful authentication
        alert('Login successful!');
        // Redirect to dashboard or another page
        window.location.href = '../dashboard/dasboard.html';
    } else {
        // Failed authentication
        document.getElementById('errorMessage').style.display = 'block';
    }
});