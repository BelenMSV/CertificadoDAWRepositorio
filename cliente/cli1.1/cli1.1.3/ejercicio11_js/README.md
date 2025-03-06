# 🔄 Ejercicio: Inversión de un Número Entero  

## 📌 Enunciado  
Dado un número entero ingresado por el usuario, el programa debe invertir el número y mostrarlo como resultado.  

### ⚠️ Restricciones  
- No se puede tratar el número como una cadena de caracteres.  
- No se pueden usar funciones avanzadas que no se hayan visto en clase.  
- Se debe resolver el ejercicio utilizando **matemáticas, arrays y estructuras de control de flujo**.  

## 🎯 Objetivos  
- Solicitar un número entero al usuario mediante `prompt()`.  
- Validar que la entrada sea un número entero válido.  
- Invertir el número utilizando **operaciones matemáticas** (división y módulo).  
- Construir el número invertido procesándolo **de derecha a izquierda**.  
- Mostrar el número invertido mediante `alert()`.  

## 🔄 Ejemplo de Caso de Uso

### Para darle la vuelta vamos procesando el número de derecha a izquierda

---

### Número a procesar: `1234`
1234 lo dividimos entre `10`  
- El **resto** de dividir `1234` entre `10` es **4**  
- El **resultado** de dividir `1234` entre `10` sin decimales es **123**  
  _(este será nuestro número a procesar en la siguiente iteración del bucle)_

✏️ **El RESTO `4` será el primer número del número invertido**  
📌 `numeroInvertido = 0 * 10 + 4;`  
👉 En la primera iteración no hay ninguna cifra previa, por eso `numeroInvertido` se multiplica por `0`.  

---

### Número a procesar: `123`
123 lo dividimos entre `10`  
- El **resto** de dividir `123` entre `10` es **3**  
- El **resultado** de dividir `123` entre `10` sin decimales es **12**  
  _(este será nuestro número a procesar en la siguiente iteración del bucle)_

✏️ **El RESTO `3` será el segundo número del número invertido**  
📌 `numeroInvertido = 4 * 10 + 3;`  
👉 En la segunda iteración hay una cifra previa (`4`), que para ser desplazada a la izquierda será multiplicada por `10`:  
`40 + 3 = 43`  
✅ Ahora `numeroInvertido` vale `43`  

Siguiente número a procesar: `12`

---

### Número a procesar: `12`
12 lo dividimos entre `10`  
- El **resto** de dividir `12` entre `10` es **2**  
- El **resultado** de dividir `12` entre `10` sin decimales es **1**  
  _(este será nuestro número a procesar en la siguiente iteración del bucle)_

✏️ **El RESTO `2` será el tercer número del número invertido**  
📌 `numeroInvertido = 43 * 10 + 2;`  
👉 En la tercera iteración hay dos cifras previas (`43`), que para ser desplazadas a la izquierda serán multiplicadas por `10`:  
`430 + 2 = 432`  
✅ Ahora `numeroInvertido` vale `432`  

Siguiente número a procesar: `1`

---

### Número a procesar: `1`
1 lo dividimos entre `10`  
- El **resto** de dividir `1` entre `10` es **1**  
- El **resultado** de dividir `1` entre `10` sin decimales es **0**  
  _(al valer `0`, ya no entrará en la siguiente iteración del bucle)_

✏️ **El RESTO `1` será el cuarto número del número invertido**  
📌 `numeroInvertido = 432 * 10 + 1;`  
👉 En la cuarta iteración hay tres cifras previas (`432`), que para ser desplazadas a la izquierda serán multiplicadas por `10`:  
`4320 + 1 = 4321`  
✅ Ahora `numeroInvertido` vale `4321`  

Ya no volvería a entrar en el bucle, ya que el siguiente número a procesar es `0`.  

---