let frutas = [];

function funcionAnyadir(){
   let fruta = document.getElementById("nombreFruta").value;
   frutas.push(fruta); 
   console.log(frutas);
   alert(frutas);
}

function funcionEliminar(){
   frutas.pop();
   console.log(frutas);
   alert(frutas);
}