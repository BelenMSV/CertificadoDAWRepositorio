/* - Una función que devuelva la diferencia en días entre dos fechas del mismo año (sólo tenemos en cuenta dia y mes) */

function diasMes(mes){
   let diasMaxMes = 0;
  switch (mes) {
    case 1:
      diasMaxMes = 31;
      break;
    case 2:
      diasMaxMes = 28;
      break;
    case 3:
      diasMaxMes = 31;
      break;
    case 4:
      diasMaxMes = 30;
      break;
    case 5:
      diasMaxMes = 31;
      break;
    case 6:
      diasMaxMes = 30;
      break;
    case 7:
      diasMaxMes = 31;
      break;
    case 8:
      diasMaxMes = 31;
      break;
    case 9:
      diasMaxMes = 30;
      break;
    case 10:
      diasMaxMes = 31;
      break;
    case 11:
      diasMaxMes = 30;
      break;
    case 12:
      diasMaxMes = 31;
      break;
  }
  return diasMaxMes;
}

function ej6() {
  let diaFecha1;
  let mesFecha1;
  let diasMaxFecha1;

  let diaFecha2;
  let mesFecha2;
  let diasMaxFecha2;

  let diferenciaDias = 0;

  //------- PRIMERA FECHA ------//
  do {
    mesFecha1 = parseInt(prompt("Inserta el mes de la primera fecha: "));
    if (isNaN(mesFecha1) || mesFecha1 < 1 || mesFecha1 > 12) {
      alert("Debe insertar un numero comprendido entre 1 y 12");
    }
  } while (isNaN(mesFecha1) || mesFecha1 < 1 || mesFecha1 > 12);

  diasMaxFecha1 = diasMes(mesFecha1);

  do {
    diaFecha1 = parseInt(prompt("Inserta el dia de la primera fecha: "));

    if (isNaN(diaFecha1) || diaFecha1 < 1 || diaFecha1 > diasMaxFecha1) {
      alert("Debe insertar un numero comprendido entre 1 y " + diasMaxFecha1);
    }
  } while (isNaN(diaFecha1) || diaFecha1 < 1 || diaFecha1 > diasMaxFecha1);

  //------- SEGUNDA FECHA ------//
  do {
    mesFecha2 = parseInt(prompt("Inserta el mes de la primera fecha: "));
    if (isNaN(mesFecha2) || mesFecha2 < 1 || mesFecha2 > 12) {
      alert("Debe insertar un numero comprendido entre 1 y 12");
    }
  } while (isNaN(mesFecha2) || mesFecha2 < 1 || mesFecha2 > 12);

  diasMaxFecha2 = diasMes(mesFecha2);

  do {
    diaFecha2 = parseInt(prompt("Inserta el dia de la primera fecha: "));

    if (isNaN(diaFecha2) || diaFecha2 < 1 || diaFecha2 > diasMaxFecha2) {
      alert("Debe insertar un numero comprendido entre 1 y " + diasMaxFecha2);
    }
  } while (isNaN(diaFecha2) || diaFecha2 < 1 || diaFecha2 > diasMaxFecha2);

//------- CALCULO DE DIFERENCIA DE DIAS ENTRE FECHAS ------//
  if (mesFecha1 * 100 + diaFecha1 < mesFecha2 * 100 + diaFecha2) {
    if (mesFecha1 < mesFecha2) {
      diferenciaDias = diasMes(mesFecha1) - diaFecha1;
      console.log(diferenciaDias);

      for (let i = mesFecha1 + 1; i < mesFecha2; i++) {
        diferenciaDias = diferenciaDias + diasMes(i);
        console.log(diasMes(i));
        console.log(diferenciaDias);
      }
      diferenciaDias = diferenciaDias + diaFecha2;
      console.log(diferenciaDias);
    }else{
      diferenciaDias= diaFecha2 - diaFecha1;
    }

  } else {
   if (mesFecha2 < mesFecha1) {
      diferenciaDias = diasMes(mesFecha2) - diaFecha2;
      console.log(diferenciaDias);

      for (let i = mesFecha2 + 1; i < mesFecha1; i++) {
        diferenciaDias = diferenciaDias + diasMes(i);
        console.log(diasMes(i));
        console.log(diferenciaDias);
      }
      diferenciaDias = diferenciaDias + diaFecha1;
      console.log(diferenciaDias);
    }else{
      diferenciaDias= diaFecha1 - diaFecha2;
    }
  }

  return diferenciaDias;
}
