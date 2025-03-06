//Solicita al usuario letras hasta que decida no insertar más,
// una vez que termine debes pedirle otra letra y
// contar las veces que aparece la letra final en las iniciales

// Validación de que admita una sola letra
let letra;
let letras = [];
let continuar;
let letraContar;
let contador = 0;
do {
  do {
    letra = prompt("Inserta una letra: ");
    if (letra.length != 1) {
      alert("Debes insertar una sola letra");
    } else {
      letras.push(letra);
    }
  } while (letra.length != 1);

  do {
    continuar = prompt("¿Quieres insertar otra letra (s/n)?: ");
    if (continuar !== "n" && continuar !== "s") {
      window.alert("Debe marcar s o n");
    }
  } while (continuar !== "n" && continuar !== "s");

} while (continuar == "s");

console.log(letras);

do {
   letraContar = window.prompt("Introduce una letra que quiere contabilizar en el array de letras: ");
   if (letraContar.length != 1) {
     window.alert("Debe introducir una única letra para que sea valido");
   }
 } while (letraContar.length != 1);
 
 for(let i= 0; i<letras.length;i++){
   if (letras[i]==letraContar){
    contador++;
   }
 }
 
 window.alert(`El array de letras contiene la letra ${letraContar} ${contador} veces.`);
