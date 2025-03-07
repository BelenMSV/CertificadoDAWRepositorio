//Solicita al usuario una frase y una letra y muestra la cantidad de veces que aparece la letra en la frase.

let frase;
let letra;
let letraMayuscula;
let letraMinuscula;
let cantidadVeces = 0;

function ej2() {
  do {
    frase = window.prompt("Introduce la frase: ");
  } while (frase.length < 1); //Evito que el usuario introduzca una cadena de caracteres vacía.

  do {
    letra = window.prompt("Introduce un caracter: ");
    //Si es una letra mayúscula la almacenamos como tal en la variable letraMayuscula
    if (letra.match(/[A-ZÑ]/)) {
      letraMayuscula = letra;
      //Si es una letra minuscula la almacenamos en la variable letraMinuscula
    } else if (letra.match(/[a-zñ]/)) {
      letraMinuscula = letra;
    }
  } while (letra.length !== 1); //Me aseguro que el usuario introduce un único caracter.
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

  return`La letra: ${letra} se ha  repetido ${cantidadVeces} veces.`;
}


