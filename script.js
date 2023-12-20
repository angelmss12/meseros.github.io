// Función para validar el número telefónico
function validarTelefono() {
    var telefono = document.getElementById("telefono").value;
    var confirmarTelefono = document.getElementById("confirmarTelefono").value;

    // Verificar que el número telefónico contenga solo números y tenga exactamente 10 dígitos
    var telefonoRegex = /^\d{10}$/;
    if (!telefonoRegex.test(telefono) || !telefonoRegex.test(confirmarTelefono)) {
        alert("Ingrese un número telefónico válido de 10 dígitos (solo números)");
        // Limpiar el campo de teléfono
        document.getElementById("telefono").value = "";
        document.getElementById("confirmarTelefono").value = "";
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

    // Verificar que ambos campos de CURP y Repetir CURP tengan al menos 18 caracteres
    if (curp.length >= 18 && curpRepetido.length >= 18) {
        // Realizar la validación solo si ambos campos tienen al menos 18 caracteres
        if (curp === curpRepetido) {
            alert("Los CURP coinciden. CURP validado correctamente");
        } else {
            alert("Los CURP no coinciden. Por favor, ingréselos correctamente.");
        }
    }
}

// Función para calcular la edad a partir de la fecha de nacimiento
function calcularEdad() {
    var fechaNacimiento = document.getElementById("fechaNacimiento").value;
    var fechaNacimientoDate = new Date(fechaNacimiento);
    var hoy = new Date();
    var edad = hoy.getFullYear() - fechaNacimientoDate.getFullYear();

    // Ajustar la edad si el cumpleaños aún no ha pasado este año
    if (hoy.getMonth() < fechaNacimientoDate.getMonth() || (hoy.getMonth() === fechaNacimientoDate.getMonth() && hoy.getDate() < fechaNacimientoDate.getDate())) {
        edad--;
    }

    // Mostrar la edad en el campo correspondiente
    var edadInput = document.getElementById("edad");
    edadInput.value = edad;

    // Validar la edad y reiniciar el campo si no es mayor de 18 años
    validarEdad();
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

// Función para validar el CURP automáticamente al ingresar datos
document.getElementById("curp").addEventListener("input", function () {
    validarCURP();
});

// Función para convertir a mayúsculas automáticamente (excepto en los campos de correo electrónico y sexo)
document.querySelectorAll('form input').forEach(function (input) {
    if (input.type !== "email" && input.id !== "sexo") {
        input.addEventListener('input', function () {
            this.value = this.value.toUpperCase();
        });
    }
});

// Función para calcular la edad automáticamente al cambiar la fecha de nacimiento
document.getElementById("fechaNacimiento").addEventListener("change", function () {
    calcularEdad();
});
