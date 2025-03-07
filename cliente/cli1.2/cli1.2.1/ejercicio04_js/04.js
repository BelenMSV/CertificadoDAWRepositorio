//Almacena en dos variables datos de validación (usuario y contraseña) correctos y permite que el usuario valide (dispone de 3 intentos)

const NOMBRE_USU = "Belen";
const CONTRASENYA = "1234";

let nombreIntroducido;
let contrasenyaIntroducida;
let intentos = 0;
let resultadoDevuelto;

function ej4() {
  do {
    nombreIntroducido = window.prompt("Introduce el nombre de usuario : ");
    contrasenyaIntroducida = window.prompt("Introduce la contraseña : ");
    if (
      nombreIntroducido !== NOMBRE_USU ||
      contrasenyaIntroducida !== CONTRASENYA
    ) {
      window.alert("Usuario y/o contraseña incorrectos");
      intentos++;
    }
  } while (
    intentos < 3 &&
    (nombreIntroducido !== NOMBRE_USU || contrasenyaIntroducida !== CONTRASENYA)
  );

  if (
    nombreIntroducido !== NOMBRE_USU ||
    contrasenyaIntroducida !== CONTRASENYA
  ) {
    resultadoDevuelto=(
      "El usuario o la contraseña introducidos son incorrectos, número de intentos agotado."
    );
  } else {
   resultadoDevuelto=("Usuario y contraseña correctos.");
  }
  return resultadoDevuelto;
}
