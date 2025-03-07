//Solicita al usuario tres números enteros e indícale cuál es el menor.

function numeroMenor() {
   let numA = parseInt(document.getElementById("inputNumero1").value);
   let numB = parseInt(document.getElementById("inputNumero2").value);
   let numC = parseInt(document.getElementById("inputNumero3").value);

console.log(numA);
console.log(numB);
console.log(numC);

if (isNaN(numA) || isNaN(numB) || isNaN(numC)) {
    salida = "Por favor, introduce números válidos en todos los campos.";
  } else if (numA < numB && numA < numC) {
    salida = "El número A es el menor: " + numA;
  } else if (numB < numA && numB < numC) {
    salida = "El número B es el menor: " + numB;
  } else if (numC < numA && numC < numB) {
    salida = "El número C es el menor: " + numC;
  } else if (numA === numB && numA === numC) {
    salida = "No hay un número menor que otro, todos son iguales.";
  } else if (numA === numB) {
    salida = "El número A y el número B valen lo mismo y son los menores: " + numA;
  } else if (numA === numC) {
    salida = "El número A y el número C valen lo mismo y son los menores: " + numA;
  } else {
    salida = "El número B y el número C valen lo mismo y son los menores: " + numB;
  }

  return salida;
}
