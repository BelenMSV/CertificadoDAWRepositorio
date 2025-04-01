/*  - Billetes de 500€: 0
    - Billetes de 200€: 0
    - Billetes de 100€: 0
    - Billetes de 50€: 1 
    - Billetes de 20€: 4
    - Billetes de 10€: 8
    - Billetes de 5€: 2
    - Monedas de 2€: 5
    - Monedas de 1€: 4
    - Monedas de 0.50€: 0
    - Monedas de 0.20€: 0
    - Monedas de 0.10€: 1
    - Monedas de 0.05€: 2
    - Monedas de 0.02€: 3
    - Monedas de 0.01€: 1*/

    let caja = [0, 0, 0, 1, 4, 8, 2, 5, 4, 0, 0, 1, 2, 3, 1, 0];
    const posiciones = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
    /*let total = caja[0]*500+caja[1]*200+caja[2]*100+caja[3]*50+caja[4]*20+caja[5]*10
    +caja[6]*5+caja[7]*2+caja[8]+caja[9]*0.5+caja[10]*0.2+caja[11]*0.1+caja[12]*0.05+
    caja[13]*0.02+caja[14]*0.01;*/
    /*funcion que calcula el total de caja, pago o devolucion y lo pone en 
    la última posicion del array*/
    function calcTotal(efectivo) {
        for (let i = 0; i < posiciones.length; i++) {
            efectivo[efectivo.length - 1] += efectivo[i] * posiciones[i];
        }
        efectivo[efectivo.length - 1] = Number(efectivo[efectivo.length - 1].toFixed(2));
        return efectivo;
    }
    //funcion para colocar billetes o monedas en su posicion para la caja o la devolucion
    function actualizar(inicial, efectivo) {
        for (let i = 0; i < inicial.length; i++) {
            inicial[i] += efectivo[i];
        }
        for (let i = 0; i < efectivo.length; i++) {
            efectivo[i] = 0;
        }
        return [inicial, efectivo];
    }
    let precio = 265.73;
    let pago = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let devolucion = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    caja = calcTotal(caja);
    pago = calcTotal(pago);
    console.log("Pago: " + pago);
    console.log("Caja: " + caja);
    if (precio == pago[pago.length - 1]) { //Me lo dan justo
        console.log("No hay que devolver");
        /*for (let i = 0; i < caja.length; i++) {
            caja[i]+=pago[i];
        }
        function actualizar(inicial, efectivo){    
        */
        let resultado = actualizar(caja, pago);
        caja = resultado[0];
        pago = resultado[1];
        console.log("Caja: " + caja);
        console.log("Pago: " + pago);
        console.log("Devolucion: " + devolucion);
    } else {//Hay que devolver
        console.log("Hay que devolver");
        if (caja[caja.length - 1] < (pago[pago.length - 1] - precio)) {//No hay cambio
            console.log("No hay cambio");
            let resultado = actualizar(devolucion, pago);
            devolucion = resultado[0];
            pago = resultado[1];
            console.log("Caja: " + caja);
            console.log("Pago: " + pago);
            console.log("Devolucion: " + devolucion);
        } else {
            let importeD = pago[pago.length - 1] - precio;
            importeD = Number(importeD.toFixed(2));
            console.log("Importe a devolver: " + (importeD))
            if (caja[caja.length - 1] == importeD) {//Doy todo el cambio que hay en la caja
                console.log("Tengo que dar todo lo que tengo en la caja");
                devolucion = actualizar(devolucion, caja)[0];
                console.log("Devolucion: " + devolucion);
                caja = actualizar(caja, pago)[0];
                console.log("Nueva Caja: " + caja);
            }
        }
    }
    