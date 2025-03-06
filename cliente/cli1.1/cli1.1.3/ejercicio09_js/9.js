let frase = prompt("Inserte una frase"); 
let cont = 1;
let pos = 0;

//Ignorar espacios al principio: Esto se hace con un while
while (frase[pos] == " ") {
  pos++;
}
console.log("Valor de la i: " + pos);
console.log("Letra que hay en frase[i]: " + frase[pos]);

//Contar espacios individuales entre palabras
for (let i = pos; i < frase.length; i++) {
  if (i + 1 < frase.length) {
    if (frase[i] == " " && frase[i + 1] != " ") {
      cont++;
    }
  }
}

alert("Número de palabras: " + cont);
