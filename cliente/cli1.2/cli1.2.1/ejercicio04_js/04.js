/* Se solicita:

- Número de enlaces de la página
- Dirección a la que enlaza el penúltimo enlace
- Numero de enlaces que enlazan a http://prueba
- Número de enlaces del tercer párrafo

AYUDA: Si queremos acceder al contenido de un atributo de un nodo elemento es suficiente con usar nodo.atributo (ej: p.id accede al contenido del id del nodo almacenado en p) */

//Número de enlaces de la página
let enlaces = document.getElementsByTagName("a");
numeroEnlaces= enlaces.length;

alert("El numero de enlaces de la página es " + numeroEnlaces);

//Dirección a la que enlaza el penúltimo enlace
let penultimoEnlace = enlaces[enlaces.length - 2].href;
alert("El penúltimo enlace apunta a: " + penultimoEnlace);

//Numero de enlaces que enlazan a http://prueba

let numEnlacesPrueba = 0;

for(let i= 0; i<numeroEnlaces;i++){
   let enlaceRecorrido = enlaces[i].href;
   console.log(i);
   if(enlaceRecorrido==="http://prueba"){
      numEnlacesPrueba ++;
   }
}
alert("El numero de enlaces que enlazan a http://prueba es: " + numEnlacesPrueba);
