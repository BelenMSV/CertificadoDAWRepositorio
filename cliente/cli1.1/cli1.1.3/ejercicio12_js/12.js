/* Calcula el factorial de un número, teniendo en cuenta que:
El factorial de 5, por ejemplo, se calcula de la siguiente manera: factorial(5) = 5*4*3*2*1
El factorial de 1 es 1
El factorial de 0 es 1
El factorial de un número negativo no existe */

let numero;

do {
  numero = parseInt(prompt("Introduce un número:"));
  if (isNaN(numero)) {
    alert("Debe introducir un número entero");
  } else if (numero < 0) {
    alert("El factorial de un número negativo no existe");
  }
} while (isNaN(numero));

let factorial = 1;

for(let i = numero; i>0;i-- ){
factorial= factorial * i;
}

alert(factorial);