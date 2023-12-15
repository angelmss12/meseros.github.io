// Función para validar el CURP
function validarCURP() {
    var curp = document.getElementById("curp").value;
    var curpRepetido = document.getElementById("curpRepetido").value;

    // Verificar que el CURP tenga al menos 16 caracteres
    if (curp.length < 16) {
        alert("El CURP debe tener al menos 16 caracteres");
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
    var fechaNacimiento = new Date(document.getElementById("fechaNacimiento").value);
    var hoy = new Date();
    var edad = hoy.getFullYear() - fechaNacimiento.getFullYear();

    if (hoy.getMonth() < fechaNacimiento.getMonth() ||
        (hoy.getMonth() === fechaNacimiento.getMonth() && hoy.getDate() < fechaNacimiento.getDate())) {
        edad--;
    }

    if (edad < 18) {
        alert("Debe ser mayor de 18 años para registrarse como mesero");
        document.getElementById("edad").value = "";
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
