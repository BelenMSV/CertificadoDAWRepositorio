# 🔡 Ejercicio 10: Contador de Letras en una Secuencia

## 📝 Enunciado  
El objetivo de este ejercicio es solicitar al usuario que ingrese una secuencia de letras de forma interactiva hasta que decida no agregar más. Posteriormente, se le pedirá que introduzca una letra específica y el programa contará cuántas veces aparece esa letra en la secuencia original.  

### ✨ **Ejemplo de ejecución**  
```txt
Secuencia de letras insertada por el usuario: A b a c a r z z a t s e i o o z  
Letra para contar: a  
Resultado: La a aparece 3 veces  

Secuencia de letras insertada por el usuario: A b a c a r z z a t s e i o o z  
Letra para contar: z  
Resultado: La z aparece 2 veces  

Secuencia de letras insertada por el usuario: A b a c a r z z a t s e i o o z  
Letra para contar: y  
Resultado: La y aparece 0 veces  

✅ Variante 10.1: Uso de confirmaciones y alertas

    Se utiliza window.prompt() para capturar letras una por una.
    El usuario puede seguir introduciendo letras hasta cancelar el proceso.
    Se valida que cada entrada sea de una única letra.
    Se almacena la secuencia en un array.
    Se solicita una letra final y se cuenta su frecuencia en la secuencia.
    Se usa window.alert() para mostrar el resultado.

✅ Variante 10.2: Validación con entrada "s/n"

    Similar a la variante anterior, pero el usuario debe confirmar si quiere seguir con "s" o "n".
    Se valida cada entrada de letra para asegurarse de que solo se introduce un carácter.
    Se recorre el array con un bucle for para contar la letra elegida.
    Se muestra el resultado con un alert().

✅ Variante 10.3: Uso de "0" como señal de finalización

    En lugar de confirmaciones, el usuario puede ingresar "0" para detener la captura de letras.
    Se almacena la secuencia en un array y se imprime en consola.
    Se solicita la letra a contar y se recorre el array para contar coincidencias.
    Se muestra el resultado final al usuario.

✅ Variante 10.4: Validación estricta de caracteres alfabéticos

    Se introduce una verificación adicional para asegurarse de que solo se ingresen letras del alfabeto (incluyendo "Ñ" y "ñ").
    Se utilizan condiciones compuestas para evitar caracteres inválidos.
    El proceso de conteo es similar a las versiones anteriores.

✅ Variante 10.5: Uso de una cadena en lugar de un array

    En lugar de almacenar las letras en un array, se concatenan en una cadena de texto.
    Se usa un bucle para recorrer la cadena y contar la frecuencia de la letra elegida.
    Se mantiene la validación de una sola letra por entrada.