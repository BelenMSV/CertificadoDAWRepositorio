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

    let monedaCantidades = [0, 0, 0, 1, 4, 8, 2, 5, 4, 0, 0, 1, 2, 3, 1, 0];
    const ARRAY_MONEDAS = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
    let totalCaja = 0;


    for(i=0;i<ARRAY_MONEDAS.length;i++){
      totalCaja+= ARRAY_MONEDAS[i]*monedaCantidades[i];
    }

    console.log(totalCaja);

    