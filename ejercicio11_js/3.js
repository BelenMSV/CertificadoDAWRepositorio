//Suma o resta (según elija el usuario) dos números reales
let numA;
let numB;
let operacion;
let resultado;

do {
  numA = parseFloat(window.prompt("Introduce el número A: "));
} while (isNaN(numA));

do {
   numB = parseFloat(window.prompt("Introduce el número B: "));
} while (isNaN(numB));

do {
   operacion = window.prompt("Introduce la operacion + o - : ");
 } while (operacion!=="-"&&operacion!=="+");

switch (operacion){
   case "+":
   resultado = numA + numB;
   document.write(
      "El resultado de sumar " + numA + " mas " + numB + " es " + resultado + "."
    );
    break;
   case "-":
   resultado = numA - numB;
   document.write(
      "Si a " + numA + " le restamos " + numB + " el resultado es " + resultado + "."
    );
    break;
    default:
      /*Puesto que el bucle do-while se repite hasta que el usuario teclea una de las cuatro opciones
      que establecimos, nunca debería entrar en el default, a no ser que el usuario altere el valor
      de la variable introduciendo un valor no permitido*/
       document.write("No has seleccionado una opción válida");
   }
