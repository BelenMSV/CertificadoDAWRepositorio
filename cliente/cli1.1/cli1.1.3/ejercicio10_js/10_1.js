/* Solicita al usuario letras hasta que decida no insertar más, una vez que termine debes pedirle otra letra y contar las veces que aparece la letra final en las iniciales */

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

  window.alert(
    `El array de letras contiene la letra ${letraContar} ${contador} veces.`
  );
}
window.alert(
  `No ha introducido ninguna letra, las letras no se contabilizarán.`
);
