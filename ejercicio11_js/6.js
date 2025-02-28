//Ordena alfabéticamente un array con 7 palabras puedes usar el algoritmo de la burbuja

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

console.log(arrayPalabras);