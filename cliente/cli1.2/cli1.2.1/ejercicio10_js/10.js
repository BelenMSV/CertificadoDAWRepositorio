
/* let etiqueta = document.createElement("p");
let textoNodo = document.createTextNode(salida);
etiqueta.appendChild(textoNodo);
document.getElementById("ej_09").appendChild(etiqueta); */

/* A partir del siguiente código de ejemplo, crea la lista desde JS (usando herramientas de DOM) con un HTML vacío, sólo debe incluir la etiqueta script correspondiente y lo que consideres necesario para que se cree la lista, en ningún caso etiquetas ni contenidos de la lista de definición. */



function crearLista() {
   let matriz =[
      ["Red Telefónica Conmutada (RTC)","La línea telefónica de toda la vida. Para acceder a Internet es necesario un módem."],
      ["Red Digital de Servicios Integrados (RDSI)","Una línea telefónica especial. Para acceder a Internet es necesario un módem RDSI."],
      ["Línea de Abonado Digital Asimétrica (ADSL)","Se basa en la conversión de una línea RTC en una línea de alta velocidad. Para acceder a Internet es necesario un módem ADSL."],
      ["Fibra Óptica","Una línea de fibra óptica. Normalmente la fibra óptica no llega hasta el usuario final, por lo que el término más apropiado es Fibra híbrida coaxial."]
      ];
      
   let etiqueta_dl = document.createElement("dl");
   document.body.appendChild(etiqueta_dl);

   for (let i = 0; i < matriz.length; i++) {
      let etiqueta_dt = document.createElement("dt");
      let textoNodo_dt = document.createTextNode(matriz[i][0]);
      etiqueta_dt.appendChild(textoNodo_dt);
      etiqueta_dl.appendChild(etiqueta_dt);

      let etiqueta_dd = document.createElement("dd");
      let textoNodo_dd = document.createTextNode(matriz[i][1]);
      etiqueta_dd.appendChild(textoNodo_dd);
      etiqueta_dl.appendChild(etiqueta_dd);
   }
}

/* Modifica el ejercicio anterior de manera que el usuario pueda insertar definiciones o borrarlas, según decida en la lista y desde JS. */