// Obtener referencias a los elementos del DOM
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const resultado = document.getElementById("resultado");

// Agregar eventos a los botones

document.getElementById("btnSumar").addEventListener("click", function() {
  resultado.textContent = "Resultado: " + (sumar(num1, num2));
});

document.getElementById("btnRestar").addEventListener("click", function() {
  resultado.textContent = "Resultado: " + (restar(num1, num2));
});

document.getElementById("btnMultiplicar").addEventListener("click", function() {
  resultado.textContent = "Resultado: " + (multiplicar(num1, num2));
});

document.getElementById("btnDividir").addEventListener("click", function() {
  resultado.textContent = "Resultado: " + (dividir(num1, num2));
});

//funciones de los botones

function sumar(num1, num2) {
  return parseFloat(num1.value) + parseFloat(num2.value);
}

function restar(num1, num2) {
  return parseFloat(num1.value) - parseFloat(num2.value);
}

function multiplicar(num1, num2) {
  return parseFloat(num1.value) * parseFloat(num2.value);
}

function dividir(num1, num2) {
  return parseFloat(num1.value) / parseFloat(num2.value);
}