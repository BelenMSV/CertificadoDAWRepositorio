/* Dado un número entero, invertir el número y mostrarlo como resultado (no se puede tratar el número como cadena de caracteres, ni usar funciones que no hemos visto, se trata de un ejercicio de algoritmia inicial que se debe hacer con lo que hemos visto, usando matemáticas, arrays y las estructuras de control de flujo vistas en clase) */

let numero = new Number();
let numeroInvertido = 0;

const DIVISOR = 10;
const MULTIPLICADOR = 10;

do {
  numero = parseInt(prompt("Introduce un número:"));
  if (isNaN(numero)) {
    alert("Debe introducir un número entero");
  }
} while (isNaN(numero));

while(numero/DIVISOR!=0 && numero%DIVISOR!=0){

   let resto;
   //_________________________________________________________________________
   //Para darle la vuelta vamos procesando el número de derecha a izquierda
   //-------------------------------------------------------------------------
   //Numero a procesar: 1234
   //1234 dividimos entre 10
   //     el resto de dividir 1234 entre 10 es -.4.-
   //     el resultado de dividir 1234 entre 10 sin decimales es -.123.-
   //                                  (este sera nuestro numero aprocesar
   //                                   en la siguiente iteración del bucle)

   // El RESTO 4 será el primer numero del numero invertido
   // numeroInvertido = 0 * 10 + 4;
   // en la primera iteracion no  hay ninguna cifra previa por eso se multiplica por cero el numeroInvertido
   //--------------------------------------------------------------------------
   //Numero a procesar: 123
   //123 lo dividimos entre 10
   //       el resto de dividir 123 entre 10 es -.3.-
   //       el resultado de dividir 123 entre 10 sin decimales es -.12.-
   //                                  (este sera nuestro numero aprocesar
   //                                   en la siguiente iteración del bucle)
   // El RESTO 3 será el segundo numero del numero invertido
   // numeroInvertido = 4 * 10 + 3;
   // en la segunda iteracion hay una cifra previa el -.4.- que para ser desplazada a la izquierda
   // será multiplicada por 10 -----> 40 + 3
   // Ahora numeroInvertido vale 43
   // Siguiente numero a procesar 12
   //--------------------------------------------------------------------------
   //Numero a procesar: 12
   //12 lo dividimos entre 10
   //       el resto de dividir 12 entre 10 es -.2.-
   //       el resultado de dividir 12 entre 10 sin decimales es -.1.-
   //                                  (este sera nuestro numero aprocesar
   //                                   en la siguiente iteración del bucle)
   // El RESTO 2 será el tercer numero del numero invertido
   // numeroInvertido = 43 * 10 + 2;
   // en la tercera iteracion hay dos cifras previas el -.43.- que para ser desplazada a la izquierda
   // será multiplicada por 10  ----->430 + 2
   // Ahora numeroInvertido vale 432
   // Siguiente numero a procesar 1
   //---------------------------------------------------------------------------
   //Numero a procesar: 1
   //1 lo dividimos entre 10
   //       el resto de dividir 1 entre 10 es -.1.-
   //       el resultado de dividir 1 entre 10 sin decimales es -.0.-
   //                                  (al valer 0 ya no entrará
   //                                   en la siguiente iteración del bucle)
   // El RESTO 1 será el cuarto numero del numero invertido
   // numeroInvertido = 432 * 10 + 1;
   // en la cuarta iteracion hay tres cifras previas el -.432.- que para ser desplazada a la izquierda
   // será multiplicada por 10  ----->4320 + 1
   // Ahora numeroInvertido vale 4321
   // Y no volveria a entrar en el bucle ya que el siguiente numero a procesar = 0
   //____________________________________________________________________________

   //Se almacena en una variable el resto de dividir entre 10
   resto = numero % DIVISOR;

   console.log("resto");
   console.log(resto);

   //Dividimos entre 10 el numero y quitamos los decimales
   numero = parseInt(numero/DIVISOR); 

   console.log("numero");
   console.log(numero);

   //En cada iteracion del while el numero invertido se multiplica por 10 
   //Asi deja paso al numero Auxiliar que hemos almacenado tras calcular el resto del numero recorrido
   numeroInvertido = numeroInvertido * MULTIPLICADOR + resto;

   console.log("numeroInvertido");
   console.log(numeroInvertido);
}

alert(numeroInvertido);