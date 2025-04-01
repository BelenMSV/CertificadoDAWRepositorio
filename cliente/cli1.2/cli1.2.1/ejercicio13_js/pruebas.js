let caja = [0, 0, 0, 1, 4, 0, 3, 5, 4, 0, 1, 1, 2, 3, 1, 159.47];
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
let importeD = Number((pago[pago.length - 1] - precio).toFixed(2));
let pos = buscar(importeD); //5
if (caja[pos] * posiciones[pos] >= importeD) { //0*10 >= 10.20
    console.log("Si puedo dar billetes de " + posiciones[pos]);
} else {
    console.log("No puedo dar ningun billete de " + posiciones[pos]);
}
pos++;
if (caja[pos] * posiciones[pos] >= importeD) { //2*5 >= 10.20
    console.log("Si puedo dar billetes de " + posiciones[pos]);
    let cantidadB = parseInt(importeD) / posiciones[pos];//2
    if (cantidadB <= caja[pos]) {//2<=3 -> Tengo billetes para devolver 10
        devolucion[pos] = cantidadB;
        caja[pos] -= cantidadB;
        importeD -= cantidadB * posiciones[pos];
        importeD = Number(importeD.toFixed(2));
        pos = buscar(importeD); //10
        console.log("Caja después: " + caja);
        console.log("Devolucion: " + devolucion);
        console.log("Importe a devolver: " + importeD);
        console.log("Pos: " + pos);
        if (caja[pos] * posiciones[pos] >= importeD) {//1*0.20 >= 0.20
            let cantidadM = importeD / posiciones[pos];//1
            devolucion[pos] = cantidadM;
            caja[pos] -= cantidadM;
            importeD -= cantidadM * posiciones[pos];
            importeD = Number(importeD.toFixed(2));
            console.log("Caja después: " + caja);
            console.log("Devolucion: " + devolucion);
            console.log("Importe a devolver: " + importeD);
        }

    }
} else {
    console.log("No puedo dar ningun billete de " + posiciones[pos]);
}
//console.log()