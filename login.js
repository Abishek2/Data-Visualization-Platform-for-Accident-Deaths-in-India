document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Validate username and password
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // Perform validation
    if (username.trim() === '' || password.trim() === '') {
        alert('Please enter both username and password.');
        return;
    }

    // If validation passes, redirect to chart screen (replace this with actual logic)
    window.location.href = 'chart.html';
});
