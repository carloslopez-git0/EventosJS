let formulario = document.getElementById("formTaller5");
let resultado = document.getElementById("resultado");

formulario.addEventListener("submit", calcular);

function calcular(event) {
    event.preventDefault();

    let n1Input = document.getElementById("primero").value;
    let n2Input = document.getElementById("segundo").value;
    let operacion = document.getElementById("operacion").value;

    if (n1Input === "" || n2Input === "") {
        resultado.innerText = "Escribe los dos números.";
        resultado.className = "error";
        return;
    }

    let n1 = parseFloat(n1Input);
    let n2 = parseFloat(n2Input);

    if (isNaN(n1) || isNaN(n2)) {
        resultado.innerText = "Escribe los dos números.";
        resultado.className = "error";
        return;
    }

    if (operacion === "") {
        resultado.innerText = "Selecciona una operación.";
        resultado.className = "error";
        return;
    }

    if (operacion === "division" && n2 === 0) {
        resultado.innerText = "No es posible dividir entre cero.";
        resultado.className = "error";
        return;
    }

    let res;
    let simbolo;

    switch (operacion) {
        case "suma":
            res = n1 + n2;
            simbolo = "+";
            break;
        case "resta":
            res = n1 - n2;
            simbolo = "-";
            break;
        case "multiplicacion":
            res = n1 * n2;
            simbolo = "x";
            break;
        case "division":
            res = n1 / n2;
            simbolo = "/";
            break;
        default:
            return;
    }

    resultado.innerText = `${n1} ${simbolo} ${n2} = ${res}`;
    resultado.className = "exito";
}
