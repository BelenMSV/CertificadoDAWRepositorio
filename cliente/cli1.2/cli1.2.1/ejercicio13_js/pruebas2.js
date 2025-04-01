let caja = [0, 0, 0, 1, 4, 0, 1, 5, 4, 0, 1, 1, 2, 3, 1, 159.47];
const posiciones = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
let precio = 19.80;//devolver = pago[pago.length-1]-precio = 10.20
let pago = [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30];
console.log("Caja antes: " + caja);

let devolucion = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const buscar = (importeD) => {
    let encontrado = false; //antes de empezar no he encontrado
    let pos = -1;
    let i = 0;
    while (!encontrado && i < posiciones.length) {
        if (posiciones[i] <= importeD) {
            pos = i;
            encontrado = true;
        }
        i++;
    }
    return pos;
}
let importeD = Number((pago[pago.length - 1] - precio).toFixed(2));//10.20
let i = buscar(importeD); //5;
while (importeD != 0 && i < caja.length - 1) {
    let cantidad;
    if(i<=8){//Si es un billete o una moneda completa cojo la parte entera 
        cantidad = parseInt(importeD/posiciones[i]);//2
    }else{//Si es una moneda redondeo a dos decimales
        cantidad = Number((importeD/posiciones[i]).toFixed(2));
    }
    if (caja[i] > 0) { //1 > 0
        console.log("Si puedo dar de " + posiciones[i]); //5.20
        if (cantidad <= caja[i]) {//2<=5 -> Tengo mas o los justos billetes para devolver 
            devolucion[i] = cantidad;
            caja[i] -= cantidad;
            importeD -= cantidad * posiciones[i];
            importeD = Number(importeD.toFixed(2));
            i = buscar(importeD); //10
            console.log("Caja después 1: " + caja);
            console.log("Devolucion 1: " + devolucion);
            console.log("Importe a devolver 1: " + importeD);
            console.log("Pos 1: " + i);
        } else { //Si no tengo billetes suficientes, doy los que hay en la caja
            devolucion[i] = caja[i];
            importeD -= caja[i] * posiciones[i];
            caja[i] -= caja[i];
            importeD = Number(importeD.toFixed(2));
            i = buscar(importeD); //10
            console.log("Caja después 2: " + caja);
            console.log("Devolucion 2: " + devolucion);
            console.log("Importe a devolver 2: " + importeD);
            console.log("Pos 2: " + i);
        }
    } else {
        console.log("No puedo dar ninguno de " + posiciones[i]);
        i++;
    }
    
}