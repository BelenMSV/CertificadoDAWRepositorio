/* Ejercicio: Dado un array con palabras, mostrar la posición de una palabra que elija el usuario o indicar que la palabra no se encuentra en el array */

const ARRAY_PALABRAS = ["piña", "arbol", "gato", "manzana", "sandia"];

encontrado = false;
let i = 0;
let palabra = prompt("Introduce la palabra a buscar: ");
let posicion;
while (!encontrado && i < ARRAY_PALABRAS.length) {
  if (ARRAY_PALABRAS[i] == palabra) {
    posicion = i;
    encontrado = true;
  }
  i++;
}

if(posicion){
   alert("Se ha encontrado la palabra en la posición: " + posicion);
}else{
   alert("No se ha encontrado la palabra");
}