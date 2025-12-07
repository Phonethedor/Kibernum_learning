document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    if (!form) return;

    function isValidEmail(email) {
        return /^\S+@\S+\.\S+$/.test(email);
    }

    function isValidPhone(phone) {
        // mínimo 7 dígitos (acepta espacios, guiones y +)
        const digits = phone.replace(/[^\d]/g, '');
        return digits.length >= 7;
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const nombre = (document.getElementById('nombre') || {}).value || '';
        const telefono = (document.getElementById('telefono') || {}).value || '';
        const email = (document.getElementById('email') || {}).value || '';
        const mensaje = (document.getElementById('mensaje') || {}).value || '';

        const faltantes = [];
        if (!nombre.trim()) faltantes.push('Nombre');
        if (!telefono.trim()) faltantes.push('Teléfono');
        if (!email.trim()) faltantes.push('Correo');

        if (faltantes.length) {
            alert('Por favor completa los siguientes campos: ' + faltantes.join(', '));
            return;
        }

        if (!isValidEmail(email.trim())) {
            alert('Por favor ingresa un correo electrónico válido.');
            return;
        }

        if (!isValidPhone(telefono.trim())) {
            alert('Por favor ingresa un teléfono válido (mínimo 7 dígitos).');
            return;
        }

        // Éxito
        alert(`Gracias ${nombre.trim()}. Nos comunicaremos pronto al teléfono ${telefono.trim()} o al correo ${email.trim()}.`);
        form.reset();
    });
});