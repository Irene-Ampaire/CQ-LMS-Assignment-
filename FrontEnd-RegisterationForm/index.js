document.getElementById('registrationForm').addEventListener('submit', function(event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const terms = document.getElementById('terms').checked;

    if (!terms) {
        alert('You must agree to the terms of service');
        event.preventDefault();
        return;
    }

    if (password.length <= 6) {
        alert('Password must be more than 6 characters');
        event.preventDefault();
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        event.preventDefault();
    }
});

