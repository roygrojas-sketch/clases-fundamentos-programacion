
// 1. Crear una variable "number" entre 0 y 100
let number = 15; 

// 2 y 3. Calcular si está en el rango 10-20 O en el rango 40-60
let result = (number >= 10 && number <= 20) || (number >= 40 && number <= 60);

// 4. Mostrar el resultado
console.log(`El cálculo de rangos para el número ${number} es: ${result}`);

// --- PUNTOS EXTRA ---

// 1. Crear una variable "dogAge"
let dogAge = 9; 

// 2. Calcular la edad humana
// Los primeros 2 años valen 10 cada uno (20). El resto valen 4.
let humanAge = 20 + (dogAge - 2) * 4;

// 3. Mostrar el resultado
console.log(`El perrito de ${dogAge} años tendría ${humanAge} años si fuera humano`);