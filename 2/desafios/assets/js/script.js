let numero1 = Number(prompt("Ingrese el primer número:"));
let numero2 = Number(prompt("Ingrese el segundo número:"));

let suma = numero1 + numero2;
alert("La suma es: " + suma);

let resta = numero1 - numero2;
alert("La resta es: " + resta);

let multiplicacion = numero1 * numero2;
alert("La multiplicación es: " + multiplicacion);

let division = numero1 / numero2;
alert("La división es: " + division);

if (numero2 !== 0) {
    let modulo = numero1 % numero2;
    alert("El módulo es: " + modulo);
} else if (numero2 === 0) {
    alert("No se puede calcular el módulo con divisor cero.");
}else {
    alert("Error inesperado al calcular el módulo.");
}
