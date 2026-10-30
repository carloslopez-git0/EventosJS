let formulario = document.getElementById("formTaller3");
let resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    let v1 = document.getElementById("numero1").value;
    let v2 = document.getElementById("numero2").value;
    let v3 = document.getElementById("numero3").value;

    if (v1 === "" || v2 === "" || v3 === "") {
        resultado.innerText = "Completa los tres números.";
        resultado.className = "error";
        return;
    }

    let n1 = parseFloat(v1);
    let n2 = parseFloat(v2);
    let n3 = parseFloat(v3);

    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        resultado.innerText = "Completa los tres números.";
        resultado.className = "error";
        return;
    }

    if (n1 === n2 && n2 === n3) {
        resultado.innerText = "Los tres números son iguales.";
        resultado.className = "exito";
    } else if (n1 >= n2 && n1 >= n3) {
        resultado.innerText = `El número mayor es ${n1}.`;
        resultado.className = "exito";
    } else if (n2 >= n1 && n2 >= n3) {
        resultado.innerText = `El número mayor es ${n2}.`;
        resultado.className = "exito";
    } else {
        resultado.innerText = `El número mayor es ${n3}.`;
        resultado.className = "exito";
    }
});
