//Solicita al usuario tres números enteros e indícale cuál es el menor.
let numA;
let numB;
let numC;

do {
  numA = parseInt(window.prompt("Introduce el número A: "));
} while (isNaN(numA));

do {
   numB = parseInt(window.prompt("Introduce el número B: "));
} while (isNaN(numB));

 do {
   numC = parseInt(window.prompt("Introduce el número C: "));
} while (isNaN(numC));

if(numA<numB && numA<numC){
   document.write("El número A es el menor: " + numA);
} else if(numB<numA && numB<numC){
   document.write("El número B es el menor: " + numB);
} else if(numC<numB && numC< numA){
   document.write("El número C es el menor: " + numC);
} else if(numA===numB && numC===numA){
   document.write("No hay un número menor que otro, todos son iguales");
} else if (numA===numB){
   document.write("El número A y el numero B valen lo mismo y son los números menores:");
} else if (numA===numC){
   document.write("El número A y el numero C valen lo mismo y son los números menores:");
} else{
   document.write("El número B y el numero C valen lo mismo y son los números menores:");
}