// Función para validar el CURP
function validarCURP() {
    var curp = document.getElementById("curp").value;
    var curpRepetido = document.getElementById("curpRepetido").value;

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

// Función para el mensaje de mesero registrado exitosamente
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Mesero registrado exitosamente");
});
