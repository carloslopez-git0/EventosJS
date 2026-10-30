let formulario = document.getElementById("formTaller2");
let resultado = document.getElementById("resultado");

formulario.addEventListener("submit", clasificarNota);

function clasificarNota(event) {
    event.preventDefault();

    let notaInput = document.getElementById("nota").value;
    let nota = parseFloat(notaInput);

    if (notaInput === "" || isNaN(nota)) {
        resultado.textContent = "Escribe la nota.";
        resultado.className = "error";
        return;
    }

    if (nota < 0 || nota > 5) {
        resultado.textContent = "La nota debe estar entre 0.0 y 5.0.";
        resultado.className = "error";
        return;
    }

    let desempeno;
    let estado;

    if (nota >= 4.5 && nota <= 5.0) {
        desempeno = "Excelente";
        estado = "Aprobado";
    } else if (nota >= 4.0 && nota <= 4.4) {
        desempeno = "Bueno";
        estado = "Aprobado";
    } else if (nota >= 3.0 && nota <= 3.9) {
        desempeno = "Aceptable";
        estado = "Aprobado";
    } else {
        desempeno = "Insuficiente";
        estado = "No aprobado";
    }

    resultado.textContent = `«Nota ${nota}: ${desempeno}. ${estado}.»`;
    resultado.className = "exito";
}
