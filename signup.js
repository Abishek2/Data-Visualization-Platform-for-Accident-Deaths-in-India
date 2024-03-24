document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Validate username and password
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // Perform validation
    if (username.trim() === '' || password.trim() === '') {
        alert('Please enter both username and password.');
        return;
    }

    // If validation passes, show success message and redirect to login page
    alert('Signup successful! Please login with your credentials.');
    window.location.href = 'login.html';
});
