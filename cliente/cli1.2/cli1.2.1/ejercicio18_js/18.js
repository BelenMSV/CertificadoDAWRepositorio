/* Crea un array de dos dimensiones (matriz) que contenga números y cadenas solicitados al usuario, muestra por pantalla los elementos cadena que se encuentren en posiciones fila par y columna impar */

/* let matrizSolicitada = new Array;

do{
let continua = true;
let dato = prompt("Introduce un dato");

}while(continua) */

   /*
1       Hola      3
Adiós   3         2   -> Muestra Hola y Manzana
4       Manzana   5

*/

let matriz = [
   [1, "Hola", 3],
   ["Adiós", 3, 2],
   [4, "Manzana", 5]
]

let a = [1, "Hola", 3];
let filtrado = a.filter(e => typeof(e)=="string");
console.log(a);
a.forEach((e, pos)=>console.log(`El elemento de la posicion ${pos}`))

matriz.forEach((fila, i) => {
   fila.forEach((elemento, j) => {
      console.log(`El elemento en la fila [${i+1}]y columna [${j+1}] es: ${elemento}`);
   });
});
//Las filas y las columnas comienzan por 1
console.log("muestra por pantalla los elementos cadena que se encuentren en posiciones fila par y columna impar");
matriz.forEach((fila, i) => {
   fila.forEach((elemento, j) => {
      if (i % 2 != 0 && j % 2 == 0) {
        console.log(
          `El elemento en la fila [${i + 1}]y columna [${
            j + 1
          }] es: ${elemento}`
        );
      }
   });
});

/* Crea un array a partir de las siguientes instrucciones:
El tamaño es solicitado al usuario
Elemento1: 1
Elemento2: 1
ElementoN: ElementoN-1 + ElementoN-2 */