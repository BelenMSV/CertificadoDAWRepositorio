/* Crear un script de JS que inserte en el body de HTML un h1, 
a continuación un h2 y por último un p */
const anyadir = (texto) => {
   let titulo1 = document.createElement("h1");
   let titulo2 = document.createElement("h2");
   let parrafo = document.createElement("p");
   let textoP = document.createTextNode(texto);
   parrafo.appendChild(textoP);
   parrafo.setAttribute("class", "hola");// parrado.class="hola"
   console.log(parrafo.class);
   document.body.appendChild(parrafo);
}

