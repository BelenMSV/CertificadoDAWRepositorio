//Solicita al usuario letras hasta que decida no insertar más, 
// una vez que termine debes pedirle otra letra y 
// contar las veces que aparece la letra final en las iniciales

// Validación de que admita una sola letra
let letra;
let letras = [];
let cont = 0;
do {
  do {
    letra = prompt('Inserta una letra o 0 para finalizar: ');
    if (letra.length != 1) {
      alert('Debes insertar una sola letra');
    } else {
      if(letra != '0'){
        letras.push(letra);
      }
    }
  } while (letra.length != 1);
} while (letra != '0');


console.log(letras);

if(letras.length > 0){
  do {
    letra = prompt('Letra para contar: ');
    if (letra.length != 1) {
      alert('Debes insertar una sola letra');
    } 
  } while (letra.length != 1);
  
  for (let i = 0; i < letras.length; i++) {
    if(letras[i] == letra){
      cont++;
    }
  }
  
  alert("La "+letra+ " aparece "+cont+" veces.")
}else {
  alert('No has insertado letras, no se puede contar nada.')
}
