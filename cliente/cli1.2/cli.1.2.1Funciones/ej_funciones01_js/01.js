function ej1() {
   let numA = parseInt(prompt('Inserta un número entero A: '));
   let numB = parseInt(prompt('Inserta un otro número entero B: '));
   let numC = parseInt(prompt('Inserta el último número entero C: '));

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

function ej2(){
   //Solicita al usuario una frase y una letra y muestra la cantidad de veces que aparece la letra en la frase.

let frase;
let letra;
let letraMayuscula;
let letraMinuscula;
let cantidadVeces = 0;

do {
   frase = window.prompt("Introduce la frase: ");
 } while (frase.length<1);//Evito que el usuario introduzca una cadena de caracteres vacía.
 
do{
   letra = window.prompt("Introduce un caracter: ");
   //Si es una letra mayúscula la almacenamos como tal en la variable letraMayuscula
   if (letra.match(/[A-ZÑ]/)) {
      letraMayuscula = letra;
   //Si es una letra minuscula la almacenamos en la variable letraMinuscula
   }else if(letra.match(/[a-zñ]/)){
      letraMinuscula = letra;
   }
} while (letra.length!==1)//Me aseguro que el usuario introduce un único caracter.
                          //La variable letra permitirá almacenar otros caracteres para poder 
                          //contabilizarlos también en la frase

//Si es una letra mayúscula obtenemos su correspondiente letra minuscula
if (letra.match(/[A-ZÑ]/)) {
  switch (letra) {
    case "A":
      letraMinuscula = "a";
      break;
    case "B":
      letraMinuscula = "b";
      break;
    case "C":
      letraMinuscula = "c";
      break;
    case "D":
      letraMinuscula = "d";
      break;
    case "E":
      letraMinuscula = "e";
      break;
    case "F":
      letraMinuscula = "f";
      break;
    case "G":
      letraMinuscula = "g";
      break;
    case "H":
      letraMinuscula = "h";
      break;
    case "I":
      letraMinuscula = "i";
      break;
    case "J":
      letraMinuscula = "j";
      break;
    case "K":
      letraMinuscula = "k";
      break;
    case "L":
      letraMinuscula = "l";
      break;
    case "M":
      letraMinuscula = "m";
      break;
    case "N":
      letraMinuscula = "n";
      break;
    case "Ñ":
      letraMinuscula = "ñ";
      break;
    case "O":
      letraMinuscula = "o";
      break;
    case "P":
      letraMinuscula = "p";
      break;
    case "Q":
      letraMinuscula = "q";
      break;
    case "R":
      letraMinuscula = "r";
      break;
    case "S":
      letraMinuscula = "s";
      break;
    case "T":
      letraMinuscula = "t";
      break;
    case "U":
      letraMinuscula = "u";
      break;
    case "V":
      letraMinuscula = "v";
      break;
    case "W":
      letraMinuscula = "w";
      break;
    case "X":
      letraMinuscula = "x";
      break;
    case "Y":
      letraMinuscula = "y";
      break;
    case "Z":
      letraMinuscula = "z";
      break;
   default:
      //No debería entrar nunca aqui ya que se han contemplado todas las opciones posibles en el if
      console.log("Resultado inesperado en la conversión a minúsculas");
  }
}
//Si es una letra minuscula obtenemos su correspondiente letra mayuscula
if (letra.match(/[a-zñ]/)) {
   switch (letra) {
     case "a":
       letraMayuscula = "A";
       break;
     case "b":
       letraMayuscula = "B";
       break;
     case "c":
       letraMayuscula = "C";
       break;
     case "d":
       letraMayuscula = "D";
       break;
     case "e":
       letraMayuscula = "E";
       break;
     case "f":
       letraMayuscula = "F";
       break;
     case "g":
       letraMayuscula = "G";
       break;
     case "h":
       letraMayuscula = "H";
       break;
     case "i":
       letraMayuscula = "I";
       break;
     case "j":
       letraMayuscula = "J";
       break;
     case "k":
       letraMayuscula = "K";
       break;
     case "l":
       letraMayuscula = "L";
       break;
     case "m":
       letraMayuscula = "M";
       break;
     case "n":
       letraMayuscula = "N";
       break;
     case "ñ":
       letraMayuscula = "Ñ";
       break;
     case "o":
       letraMayuscula = "O";
       break;
     case "p":
       letraMayuscula = "P";
       break;
     case "q":
       letraMayuscula = "Q";
       break;
     case "r":
       letraMayuscula = "R";
       break;
     case "s":
       letraMayuscula = "S";
       break;
     case "t":
       letraMayuscula = "T";
       break;
     case "u":
       letraMayuscula = "U";
       break;
     case "v":
       letraMayuscula = "V";
       break;
     case "w":
       letraMayuscula = "W";
       break;
     case "x":
       letraMayuscula = "X";
       break;
     case "y":
       letraMayuscula = "Y";
       break;
     case "z":
       letraMayuscula = "Z";
       break;
     default:
       //No debería entrar nunca aqui ya que se han contemplado todas las opciones posibles en el if
       console.log("Resultado inesperado en la conversión a mayúsculas");
   }
 }

 //Contabilizamos la aparición de la letra independientemente de si es mayúscula o minúscula
for (let i = 0; i < frase.length; i++) {
    if (frase[i] === letraMayuscula) {
      cantidadVeces++;
    } else if (frase[i] === letraMinuscula) {
      cantidadVeces++;
   //Aqui entrarían el resto de caracteres que no sean ni letras mayusculas ni minusculas
   //Contabilizaría caracteres como puntos, comas, y otros simbolos & % $ si los pasamos como caracter.
    } else if (frase[i] === letra) {
      cantidadVeces++;
    }
}

return(
   `La letra: ${letra} se ha  repetido ${cantidadVeces} veces.`
 );
}

function ej3(){
   //Suma o resta (según elija el usuario) dos números reales
let numA;
let numB;
let operacion;
let resultado;
let salida;

do {
  numA = parseFloat(window.prompt("Introduce el número A: "));
  if(isNaN(numA)){
   window.alert("Debes introducir un número real")
  }
} while (isNaN(numA));

do {
   numB = parseFloat(window.prompt("Introduce el número B: "));
   if(isNaN(numB)){
      window.alert("Debes introducir un número real")
     }
} while (isNaN(numB));

do {
   if(operacion!=="-"&&operacion!=="+"){
      window.alert("Debes marcar '+' o '-'");
     }
   operacion = window.prompt("Introduce la operacion + o - : ");
 } while (operacion!=="-"&&operacion!=="+");

switch (operacion){
   case "+":
   resultado = numA + numB;
   salida =(
      "El resultado de sumar " + numA + " mas " + numB + " es " + resultado + "."
    );
    break;
   case "-":
   resultado = numA - numB;
   salida =(
      "Si a " + numA + " le restamos " + numB + " el resultado es " + resultado + "."
    );
    break;
  /*   default:
      //Puesto que el bucle do-while se repite hasta que el usuario teclea una de las cuatro opciones
      //que establecimos, nunca debería entrar en el default, a no ser que el usuario altere el valor
      //de la variable introduciendo un valor no permitido
      //document.write("No has seleccionado una opción válida"); 
       */
   }

   return salida;
}

function ej4() {
  const NOMBRE_USU = "Belen";
  const CONTRASENYA = "1234";

  let nombreIntroducido;
  let contrasenyaIntroducida;
  let intentos = 0;

  do {
    nombreIntroducido = window.prompt("Introduce el nombre de usuario : ");
    contrasenyaIntroducida = window.prompt("Introduce la contraseña : ");
    if (
      nombreIntroducido !== NOMBRE_USU ||
      contrasenyaIntroducida !== CONTRASENYA
    ) {
      window.alert("Usuario y/o contraseña incorrectos");
      intentos++;
    }
  } while (
    intentos < 3 &&
    (nombreIntroducido !== NOMBRE_USU || contrasenyaIntroducida !== CONTRASENYA)
  );

  if (
    nombreIntroducido !== NOMBRE_USU ||
    contrasenyaIntroducida !== CONTRASENYA
  ) {
    return "El usuario o la contraseña introducidos son incorrectos, número de intentos agotado.";
  } else {
    return "Usuario y contraseña correctos.";
  }
}

function ej5() {
  let letraIntroducida;
  let resultado;
  do {
    letraIntroducida = window.prompt("Introduce la letra: ");
    if (!letraIntroducida.match(/[A-ZÑa-zñ]/)) {
      window.alert("Debe introducir una letra");
    }
  } while (!letraIntroducida.match(/[A-ZÑa-zñ]/));
  switch (letraIntroducida) {
    case "a":
      resultado = "7";
      break;
    case "b":
      resultado = "9";
      break;
    case "c":
      resultado = "101";
      break;
    default:
      resultado = "letra errónea";
  }
  return resultado;
}

function ej6(){
   let arrayPalabras = ["maceta", "piscina", "manzana", "lapicero", "anillo", "loro", "castillo"];

//Este algoritmo es similar a dibujar un triangulo con bucles for
/*En la primera iteración comienza comparando la posición 1 con la posición 0 del array  
hasta que recorre todo el array.
A medida que comparamos uno por uno los elementos del array vamos desplazando hacia el final 
aquel que alfabeticamente se encuentre en posiciones finales.
En la segunda iteración como ya sabemos que la ultima palabra de todo el array esa ultima palabra no es necesario recorrerla de nuevo, es por eso que en la siguiente iteracion restamos i, ya que en cada iteración las ultimas palabras se irán quedando al final de forma que no es necesario compararlas de nuevo*/
//En la primera iteración colocamos la ultima, en la segunda iteración la penultima, en la tercera iteración la antepenultima y asi sucesivamente hasta ordenar todo el array.
for (let i = 0; i < arrayPalabras.length; i++) {
  for (let j = 1; j < arrayPalabras.length - i; j++) {
   if(arrayPalabras[j]<arrayPalabras[j-1]){
      let auxiliar = arrayPalabras[j-1];
      arrayPalabras[j-1]=arrayPalabras[j];
      arrayPalabras[j]= auxiliar;
   }
  }
}

return(arrayPalabras);
}

function ej7() {
  let frase = prompt("Inserte una frase");
  let cont = 1;
  let pos = 0;

  //Ignorar espacios al principio: Esto se hace con un while
  while (frase[pos] == " ") {
    pos++;
  }
  console.log("Valor de la i: " + pos);
  console.log("Letra que hay en frase[i]: " + frase[pos]);

  //Contar espacios individuales entre palabras
  for (let i = pos; i < frase.length; i++) {
    if (i + 1 < frase.length) {
      if (frase[i] == " " && frase[i + 1] != " ") {
        cont++;
      }
    }
  }

  return "Número de palabras: " + cont;
}

function ej8() {
  let letra;
  let letraContar;
  let ArrayLetras = new Array();
  let continua = true;
  let contador = 0;
  do {
    letra = window.prompt("Introduce una letra: ");
    if (letra.length != 1) {
      window.alert("Debe introducir una única letra para que sea valido");
      continua = window.confirm(
        "Ha introducido una letra no valida, si cancela el proceso de introducir letras finalizará."
      );
    } else {
      ArrayLetras.push(letra);
      continua = window.confirm(
        "Ha introducido una letra valida, pulse cancelar si no quiere seguir introduciendo mas letras."
      );
    }
  } while (continua == true);

  console.log(ArrayLetras);
  if (ArrayLetras.length > 0) {
    do {
      letraContar = window.prompt(
        "Introduce una letra que quiere contabilizar en el array de letras: "
      );
      if (letraContar.length != 1) {
        window.alert("Debe introducir una única letra para que sea valido");
      }
    } while (letraContar.length != 1);

    for (let i = 0; i < ArrayLetras.length; i++) {
      if (ArrayLetras[i] == letraContar) {
        contador++;
      }
    }

    return(
      `El array de letras contiene la letra ${letraContar} ${contador} veces.`
    );
  }
  return(
    `No ha introducido ninguna letra, las letras no se contabilizarán.`
  );
}

function ej9() {
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

  while (numero / DIVISOR != 0) {
    let resto = 0;
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
    numero = parseInt(numero / DIVISOR);

    console.log("numero");
    console.log(numero);

    //En cada iteracion del while el numero invertido se multiplica por 10
    //Asi deja paso al numero Auxiliar que hemos almacenado tras calcular el resto del numero recorrido
    numeroInvertido = numeroInvertido * MULTIPLICADOR + resto;

    console.log("numeroInvertido");
    console.log(numeroInvertido);
  }

  return numeroInvertido;
}

function ej10() {
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
      return("El factorial de un número negativo no existe");
    }
  } while (isNaN(numero));

  let factorial = 1;

  for (let i = numero; i > 0; i--) {
    factorial = factorial * i;
  }

  return factorial;
}