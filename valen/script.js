document.querySelectorAll('.key').forEach(button => {
    button.addEventListener('click', function() {
        const passwordInput = document.getElementById('password');
        const message = document.getElementById('message');

        if (this.id === 'clear') {
            passwordInput.value = '';
            message.textContent = '';
        } else if (this.id === 'submit') {
            if (passwordInput.value === '') {
                message.textContent = 'Password tidak boleh kosong!';
            } else if (passwordInput.value === '2708') {
                window.location.href = "love.html";
                // Di sini Anda bisa menambahkan logika untuk memproses password
            } else {
                message.textContent = 'Password salah, tebak yang benar dong ;(';
            }
        } else {
            passwordInput.value += this.dataset.value;
        }
    });
});