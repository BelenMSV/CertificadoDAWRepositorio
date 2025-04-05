/* - Una función que permita mostrar un triángulo como el siguiente:

*
**
***
****
***** 

*/

function ej5() {
   const NUM_FILAS = 5;
   let cadena = "";
   for (let i = 1; i <= NUM_FILAS; i++) {
     for (let j = 0; j < i; j++) {
       cadena += "*";
     }
     cadena += "\n";
   }
   return cadena;
 }