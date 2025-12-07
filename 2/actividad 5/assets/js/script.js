// Función 1: Verificar que los campos no estén vacíos
function validarCamposVacios(nombre, correo, edad) {
    if (nombre.trim() === '' || correo.trim() === '' || edad.trim() === '') {
        return false;
    }
    return true;
}

// Función 2: Verificar que la edad sea un número mayor a 18
function validarEdad(edad) {
    const edadNumero = parseInt(edad, 10);
    if (isNaN(edadNumero) || edadNumero <= 18) {
        return false;
    }
    return true;
}

// Función principal para manejar la validación del formulario
function validarFormulario() {
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const edad = document.getElementById('edad').value;
    
    const mensajeArea = document.getElementById('mensajeArea');
    let errores = [];
    
    if (!validarCamposVacios(nombre, correo, edad)) {
        errores.push("Todos los campos (Nombre, Correo, Edad) son obligatorios.");
    }
    
    if (!validarEdad(edad)) {
        errores.push("La Edad debe ser un número y mayor a 18 años.");
    }
    
    mensajeArea.style.display = 'block';
    
    if (errores.length > 0) {
        mensajeArea.className = 'mt-3 p-3 rounded alert alert-danger';
        mensajeArea.innerHTML = `
            <strong>🚨 Error de Validación:</strong>
            <ul>
                ${errores.map(error => `<li>${error}</li>`).join('')}
            </ul>
        `;
    } else {
        mensajeArea.className = 'mt-3 p-3 rounded alert alert-success';
        mensajeArea.innerHTML = `
            <strong>✅ Validación Exitosa:</strong> Datos listos para el envío al servidor.
            <br>
            <small>Nombre: ${nombre}, Correo: ${correo}, Edad: ${edad}</small>
        `;        
    }
}