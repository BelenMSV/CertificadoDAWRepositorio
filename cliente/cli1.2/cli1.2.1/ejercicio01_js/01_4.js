function ej1(n1, n2, n3) {
   //let n1 = parseInt(prompt('Inserta un número entero: '));
   //let n2 = parseInt(prompt('Inserta un otro número entero: '));
   //let n3 = parseInt(prompt('Inserta el último número entero: '));

   if (n1 <= n2 && n1 <= n3) {
       return n1;
   } else {
       if (n2 <= n1 && n2 <= n3) {
           return n2;
       } else {
           return n3;
       }
   }
}

//alert(ej1(4,-1,3));