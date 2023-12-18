// Función para validar el número telefónico
function validarTelefono() {
    var telefono = document.getElementById("telefono").value;
    var confirmarTelefono = document.getElementById("confirmarTelefono").value;

    // Verificar que el número telefónico contenga solo números y tenga exactamente 10 dígitos
    var telefonoRegex = /^\d{10}$/;
    if (!telefonoRegex.test(telefono) || !telefonoRegex.test(confirmarTelefono)) {
        alert("Ingrese un número telefónico válido de 10 dígitos (solo números)");
        return;
    }

    // Verificar que los números telefónicos sean iguales
    if (telefono === confirmarTelefono) {
        alert("Números telefónicos validados correctamente");
    } else {
        alert("Los números telefónicos no coinciden. Por favor, ingréselos correctamente.");
    }
}

// Función para validar el correo electrónico
function validarCorreo() {
    var correoElectronico = document.getElementById("correoElectronico").value;
    var confirmarCorreo = document.getElementById("confirmarCorreo").value;

    // Verificar que el correo electrónico contenga el símbolo @ y termine con "ejemplo.com"
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correoElectronico) || !emailRegex.test(confirmarCorreo)) {
        alert("Ingrese un correo electrónico válido en el formato ejemplo@dominio.com");
        return;
    }

    // Verificar que los correos electrónicos sean iguales
    if (correoElectronico === confirmarCorreo) {
        alert("Correos electrónicos validados correctamente");
    } else {
        alert("Los correos electrónicos no coinciden. Por favor, ingréselos correctamente.");
    }
}
// Función para validar el CURP
function validarCURP() {
    var curp = document.getElementById("curp").value;
    var curpRepetido = document.getElementById("curpRepetido").value;

    // Verificar que el CURP tenga al menos 18 caracteres
    if (curp.length < 18) {
        alert("El CURP debe tener al menos 18 caracteres");
        return;
    }

    if (curp === curpRepetido) {
        alert("CURP validado correctamente");
    } else {
        alert("Los CURP no coinciden. Por favor, ingréselos correctamente.");
    }
}

// Función para validar la edad mayor de 18 años
function validarEdad() {
    var edadInput = document.getElementById("edad");
    var edad = edadInput.value;

    // Verificar que la edad contenga solo números
    var edadRegex = /^\d+$/;
    if (!edadRegex.test(edad)) {
        alert("Ingrese un valor numérico para la edad");
        edadInput.value = "";  // Limpiar el campo en caso de caracteres no numéricos
        return;
    }

    // Convertir la edad a número
    var edadNumerica = parseInt(edad, 10);

    // Verificar que la edad sea mayor de 18 años
    if (edadNumerica < 18) {
        alert("Debe ser mayor de 18 años para registrarse como mesero");
        edadInput.value = "";
    }
}
// Función para limpiar el formulario
function limpiarFormulario() {
    // Obtener todos los elementos de formulario
    var formElements = document.querySelectorAll('form input, form select');

    // Limpiar el valor de cada elemento
    formElements.forEach(function (element) {
        if (element.type !== "submit" && element.type !== "button") {
            element.value = "";
        }
    });

    // También puedes añadir lógica específica para reiniciar elementos adicionales si es necesario
}

// Función para el mensaje de mesero registrado exitosamente
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Mesero registrado exitosamente");
});
