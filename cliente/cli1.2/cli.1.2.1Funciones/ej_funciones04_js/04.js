/* - Una función que permita mostrar la secuencia (se debe construir la cadena de uno en uno):
 *+_*+_*+_*+_ */
function ej4() {
   const NUM_CARACTERES = 12;
   let cadena = "";
   for (let i = 0; i < NUM_CARACTERES; i++) {
     let resto = i % 3;
     if (resto == 0) {
       cadena += "*";
     } else if (resto == 1) {
       cadena += "+";
     } else if (resto == 2) {
       cadena += "_";
     }
   }
   return cadena;
 }