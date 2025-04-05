

function crearLista() {
   let matriz = [
      ["Red Telefónica Conmutada (RTC)", "La línea telefónica de toda la vida. Para acceder a Internet es necesario un módem."],
      ["Red Digital de Servicios Integrados (RDSI)", "Una línea telefónica especial. Para acceder a Internet es necesario un módem RDSI."],
      ["Línea de Abonado Digital Asimétrica (ADSL)", "Se basa en la conversión de una línea RTC en una línea de alta velocidad. Para acceder a Internet es necesario un módem ADSL."],
      ["Fibra Óptica", "Una línea de fibra óptica. Normalmente la fibra óptica no llega hasta el usuario final, por lo que el término más apropiado es Fibra híbrida coaxial."]
   ];
   let etiqueta_dl = document.createElement("dl");
   document.body.appendChild(etiqueta_dl);
   crearDefiniciones(etiqueta_dl, matriz);
}

function crearDefiniciones(dl, datos) {

   for (let i = 0; i < datos.length; i++) {

      dl.appendChild(crearElemento("dt", datos[i][0]));
      dl.appendChild(crearElemento("dd", datos[i][1]));

   }
}

function crearElemento(tipo, texto) {
   let etiqueta = document.createElement(tipo);
   let textoNodo = document.createTextNode(texto);
   etiqueta.appendChild(textoNodo);
   return etiqueta;
   //dl.appendChild(etiqueta);
}