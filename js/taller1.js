let formulario = document.getElementById("formTaller1");
let resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    let valorInput = document.getElementById("numero").value;
    let numero = parseFloat(valorInput);

    if (valorInput === "" || isNaN(numero)) {
        resultado.innerText = "Escribe un número.";
        resultado.className = "error";
        return;
    }

    if (numero % 1 !== 0) {
        resultado.innerText = "Escribe un número entero.";
        resultado.className = "error";
        return;
    }

    if (numero % 2 === 0) {
        resultado.textContent = "El número es par.";
        resultado.className = "exito";
    } else {
        resultado.textContent = "El número es impar.";
        resultado.className = "exito";
    }
});
