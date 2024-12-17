document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.querySelector('input[type="password"]');
    const showPasswordCheckbox = document.querySelector('input[type="checkbox"]');

    showPasswordCheckbox.addEventListener('change', function() {
        if (showPasswordCheckbox.checked) {
            passwordInput.type = 'text'; // Menampilkan password
        } else {
            passwordInput.type = 'password'; // Menyembunyikan password
        }
    });
});