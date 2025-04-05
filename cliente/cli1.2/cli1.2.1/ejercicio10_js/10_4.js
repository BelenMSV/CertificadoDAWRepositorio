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
   crearBoton("Eliminar Última Definición", "eliminarUltima()");
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

function crearBoton(texto, funcion){
   let input = document.createElement("input");
   input.type = "button";
   input.setAttribute("value", texto);
   input.setAttribute("onclick", funcion);
   document.body.appendChild(input);
}

function crearNueva() {
   let dl = document.getElementsByTagName('dl')[0];
   /*if (!dl) {
      alert("La lista aún no existe");
   } else {*/
   let termino = prompt("Inserta un término");
   let definicion = prompt("Inserta la definición del término anterior");
   dl.appendChild(crearElemento("dt", termino));
   dl.appendChild(crearElemento("dd", definicion));
}

function eliminarUltima() {
   let dl = document.getElementsByTagName("dl")[0];
   let dds = document.getElementsByTagName("dd");
   let dd = dds[dds.length-1];
   dl.removeChild(dd);
   let dts = document.getElementsByTagName("dt");
   let dt = dts[dts.length-1];
   dl.removeChild(dt);
}

function eliminarUltima2() {
   let dl = document.getElementsByTagName("dl")[0];
   elementoEliminar(dd,dl);
   elementoEliminar(dt,dl);
}

function elementoEliminar(elemento,raiz){
let arrayElementos = document.getElementsByTagName(elemento);
   let elementoUltimo = arrayElementos[dds.length-1];
   raiz.removeChild(elementoUltimo);
}