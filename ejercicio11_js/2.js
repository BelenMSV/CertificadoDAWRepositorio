//Solicita al usuario una frase y una letra y muestra la cantidad de veces que aparece la letra en la frase.

let frase;
let letra;
let cantidadVeces = 0;

do {
   frase = window.prompt("Introduce la frase: ");
 } while (frase.length<1);//Evito que el usuario introduzca una cadena de caracteres vacía.
 
do{
   letra = window.prompt("Introduce la letra: ");
} while (letra.length!==1)//Me aseguro que el usuario introduce un único caracter.

for (let i = 0; i < frase.length; i++) {
  if (frase[i] === letra) {
    cantidadVeces++;
  }
}

document.write(
   `La letra: ${letra} se ha  repetido ${cantidadVeces} veces.`
 );