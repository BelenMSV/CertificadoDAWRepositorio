function crearLista() {
   let terminos = ["Red Telefónica Conmutada (RTC)",
      "Red Digital de Servicios Integrados (RDSI)",
      "Línea de Abonado Digital Asimétrica (ADSL)",
      "Fibra Óptica"
   ];
   let definiciones = ["La línea telefónica de toda la vida. Para acceder a Internet es necesario un módem.",
      "Una línea telefónica especial. Para acceder a Internet es necesario un módem RDSI.",
      "Se basa en la conversión de una línea RTC en una línea de alta velocidad. Para acceder a Internet es necesario un módem ADSL.",
      "Una línea de fibra óptica. Normalmente la fibra óptica no llega hasta el usuario final, por lo que el término más apropiado es Fibra híbrida coaxial."
   ]
   let etiqueta_dl = document.createElement("dl");
   document.body.appendChild(etiqueta_dl);
   crearDefiniciones(etiqueta_dl, terminos, definiciones);
   crearBoton("Crear Nueva Definición", "crearNueva()");
   crearBoton("Eliminar Definición", "eliminar()");
}

function crearDefiniciones(dl, terminos, definiciones) {
   for (let i = 0; i < terminos.length; i++) {
      dl.appendChild(crearElemento("dt", terminos[i]));
      dl.appendChild(crearElemento("dd", definiciones[i]));
   }
}

function crearElemento(tipo, texto) {
   let etiqueta = document.createElement(tipo);
   let textoNodo = document.createTextNode(texto);
   etiqueta.appendChild(textoNodo);
   return etiqueta;
}

function crearBoton(texto, funcion) {
   let input = document.createElement("input");
   input.type = "button";
   input.setAttribute("value", texto);
   input.setAttribute("onclick", funcion);
   document.body.appendChild(input);
}

function crearNueva() {
   let dl = document.getElementsByTagName('dl')[0];
   let termino = prompt("Inserta un término");
   let definicion = prompt("Inserta la definición del término anterior");
   dl.appendChild(crearElemento("dt", termino));
   dl.appendChild(crearElemento("dd", definicion));
}

function eliminar() {
   let elemento = prompt("¿Qué definición quieres eliminar?");
   let dts = document.getElementsByTagName("dt");
   let pos = buscar(dts, elemento.toLowerCase());
   if (pos != -1) {
      let dl = document.getElementsByTagName("dl")[0];
      eliminarUno(dl, "dd", pos);
      eliminarUno(dl, "dt", pos);
      crearP("Se ha eliminado la definición del término: "+elemento);
   } else {
      crearP("La definición de "+elemento +" no existe");
   }

}

function eliminarUno(dl, tipo, pos) {
   let elementos = document.getElementsByTagName(tipo);
   let elemento = elementos[pos];
   //console.log(elemento.innerText);
   dl.removeChild(elemento);
}

const buscar = (array, elemento) => {
   let encontrado = false; //antes de empezar no he encontrado
   let pos = -1;
   let i = 0;
   while (!encontrado && i < array.length) {
      if (array[i].innerText.toLowerCase() == elemento) {
         pos = i;
         encontrado = true;
      }
      i++;
   }
   return pos;
}
function crearP(texto){
   let p = document.createElement("p");
   let textoP = document.createTextNode(texto)
   p.appendChild(textoP);
   document.body.appendChild(p);
}