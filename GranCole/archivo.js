lucide.createIcons();

    // Mostrar/ocultar contraseña
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');

    togglePassword.addEventListener('click', () => {
        const type = passwordInput.type === 'password' ? 'text' : 'password';
        passwordInput.type = type;

        // Cambia el icono (opcional)
        togglePassword.setAttribute('data-lucide', type === 'password' ? 'eye' : 'eye-off');
        lucide.createIcons(); // actualiza iconos
    });

