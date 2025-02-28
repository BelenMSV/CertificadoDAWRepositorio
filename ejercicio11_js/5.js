//Solicita al usuario una letra, si inserta una a muestra el número 7, si es una b, el 9, si es una c el 101 y si no es ninguno de los tres, indícale que se ha equivocado de letra

let letraIntroducida;
letraIntroducida = window.prompt("Introduce la letra: ");

switch (letraIntroducida){
   case "a":
      document.write("7");
      break;
   case "b":
      document.write("9");
      break;
   case "c":
      document.write("101");
      break;
   default:
      document.write("letra errónea");
}