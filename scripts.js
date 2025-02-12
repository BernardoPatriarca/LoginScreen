function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (username === 'admin' && password === 'admin') {
        window.location.href = 'home.html';
    } else {
        errorMessage.textContent = 'invalid username or password.';
    }
}

function logout() {
    window.location.href = 'index.html';
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        login();
    }
});

document.addEventListener('mousemove', function (event) {
    const moveIntensity = 30;
    const x = (event.clientX / window.innerWidth - 0.5) * moveIntensity;
    const y = (event.clientY / window.innerHeight - 0.5) * moveIntensity;
    document.body.style.backgroundPosition = `${50 + x}% ${50 + y}%`;
});