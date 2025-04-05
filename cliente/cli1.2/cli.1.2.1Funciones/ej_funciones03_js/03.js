/* - Una función que muestre al usuario una secuencia de * (se debe construir la cadena de uno en uno), la cantidad de * será solicitada al usuario */
function ej3() {
   let numero;
   let cadena = "";
   do {
     numero = parseInt(prompt("Inserta el número de caracteres que tendrá la cadena de asteriscos: "));
     if (isNaN(numero)) {
       alert("Debe insertar un numero entero");
     }
   } while (isNaN(numero));
 
   for (let i = 0; i < numero; i++) {
     cadena += "*";
   }
 
   return cadena;
 }