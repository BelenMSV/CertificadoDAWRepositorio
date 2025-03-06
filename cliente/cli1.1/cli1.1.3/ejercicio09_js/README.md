# 📝 Ejercicio 09: Contador de Palabras  

## 📌 Descripción  
En este ejercicio, se solicita al usuario que ingrese una frase y el programa determinará cuántas palabras contiene. Se considera una palabra como cualquier conjunto de caracteres separados por un único espacio o varios espacios.  

## 🎯 Objetivos  
- Solicitar al usuario una frase mediante `prompt()`.  
- Ignorar los espacios en blanco al principio de la frase.  
- Contar cuántas palabras hay en la frase sin teniendo en cuenta la posibilidad 
  de que haya varios espacios entre palabras.
- No contabilizar palabras de mas si hay varios espacios  
- Mostrar el número total de palabras mediante `alert()`.  

## 📜 Funcionamiento  
1. El usuario ingresa una frase en un cuadro de diálogo.  
2. El programa ignora los espacios en blanco al inicio.  
3. Se recorren los caracteres de la frase: 
   - Se toma como punto de partida para recorrer la frase la posición en la que finalizan
   los caracteres del principio en caso de que los tenga.
   - Cada vez que se encuentra un **espacio seguido de una letra**, se incrementa el contador de palabras.  
4. Finalmente, se muestra el número total de palabras en la frase.  

## 🛠️ Implementación  
- Se utiliza `prompt()` para capturar la entrada del usuario.  
- Se recorre la cadena con un **bucle `while`** para evitar contar espacios iniciales.  
- Se usa un **bucle `for`** para contar los espacios individuales que separan palabras.  
- Se verifica que no se cuenten espacios en blanco consecutivos como palabras adicionales.  
- Se muestra el resultado final con `alert()`.  

## 📌 Ejemplo de Uso  
**Entrada del usuario:**  
'      Prueba    de conteo     de palabras    '
**Salida esperada:**  
5