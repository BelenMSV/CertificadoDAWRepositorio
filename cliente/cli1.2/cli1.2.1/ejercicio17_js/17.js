/* Solicita una cadena al usuario e indica la cantidad de veces que aparece la a en las palabras impares
Solicita una cadena al usuario y devuélvela invertida Ej: "Hola, ¿qué tal estás?" -> estás? tal ¿qué Hola, */

let cadena = new String(prompt("Introduce una cadena"));
console.log(typeof cadena);

let divisiones = cadena.split(" ");

let contador = 0;
let palabraImpar;
for (let i = 0; i < divisiones.length; i++) {
  if (i % 2 == 0 || i == 0) {
    palabraImpar = divisiones[i];
    console.log(palabraImpar);
    for (j = 0; j < palabraImpar.length; j++) {
      if (palabraImpar.charAt(j) == "a") {
        contador++;
      }
    }
  }
}
alert(`La cadena de texto contiene ${contador} veces la letra a en sus palabras impares`);

//Solicita una cadena al usuario y devuélvela invertida Ej: "Hola, ¿qué tal estás?"

let cadena2 = new String(prompt("Introduce una cadena"));
let divisiones2 = cadena.split(" ");
let cadenaInvertida = new String("");
for(let i = divisiones2.length-1; i>=0; i--){
   cadenaInvertida.concat(" ", divisiones2[i]);
   console.log(cadenaInvertida);
}
alert(cadenaInvertida);