//- Una función que devuelva el número de cifras de un entero solicitado al usuario
function ej2() {
   let numero;
   do {
     numero = parseInt(prompt("Inserta un número entero: "));
     if (isNaN(numero)) {
       alert("Debe insertar un numero entero");
     }
   } while (isNaN(numero));
 
   let aux = numero;
   let cifras = 0;
 
   while (aux != 0) {
     aux = parseInt(aux / 10);
     //aux = Math.floor(aux/10); 9.4 -> 9
     //aux = Math.trunc(aux/10); 9.4 -> 9
     cifras++;
   }
 
   return cifras;
 }