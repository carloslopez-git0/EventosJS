let formulario = document.getElementById("formTaller4");
let resultado = document.getElementById("resultado");

formulario.addEventListener("submit", validarRegistro);

function validarRegistro(event) {
    event.preventDefault();

    let nombre = document.getElementById("nombre").value.trim();
    let edadInput = document.getElementById("edad").value.trim();
    let correo = document.getElementById("correo").value.trim();
    let clave = document.getElementById("clave").value.trim();
    let confirmar = document.getElementById("confirmar").value.trim();

    if (nombre === "") {
        resultado.innerText = "Escribe tu nombre.";
        resultado.className = "error";
        return;
    }

    if (edadInput === "") {
        resultado.innerText = "Escribe tu edad.";
        resultado.className = "error";
        return;
    }

    let edad = parseFloat(edadInput);
    if (isNaN(edad) || edad % 1 !== 0 || edad < 18 || edad > 100) {
        resultado.innerText = "La edad debe ser un número entero entre 18 y 100.";
        resultado.className = "error";
        return;
    }

    if (!correo.includes("@") || !correo.includes(".")) {
        resultado.innerText = "Escribe un correo válido.";
        resultado.className = "error";
        return;
    }

    if (clave !== confirmar) {
        resultado.innerText = "Las contraseñas no coinciden.";
        resultado.className = "error";
        return;
    }

    resultado.innerText = `«Registro exitoso. Bienvenido(a), ${nombre}.»`;
    resultado.className = "exito";
}
