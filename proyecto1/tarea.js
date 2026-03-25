/* 
Escriba un programa que calcule el precio del tiquete de entrada a un museo
El precio de los tiquetes sigues las siguientes reglas:
    1. El precio base sin descuento es de 5000
    2. Niños menores de 12 años entran gratis
    3. Personas mayores de 65 años tienen un 40% de descuento
    4. Personas con un id de estudiantes tienen un 25% de descuento, sin importar la edad
    5. Personas con cupón de descuento, se les puede aplicar el descuento descrito en el cupón.
    6. Solo un descuento se aplica a cada tiquete, el más alto, por lo tanto, para una persona 
    con id de estudiante y con un cupón de 30% de descuento, solo aplicará uno de los dos descuentos.
*/

const age = 35;
const hasCoupon = false;
const couponDiscount = 70;
const hasStudentId = false;

// Escriba su código aquí calculando el price

// Resultado final con el price calculado:
//console.log('El precio de su tiquete es: ', price);

// Ejemplos:

// ----- 1 ------
// age = 30;
// hasCoupon = false;
// couponDiscount = 0;
// hasStudentId = false;
// El precio de su tiquete es: 5000

// ----- 2 ------
// age = 25;
// hasCoupon = true;
// couponDiscount = 10;
// hasStudentId = true;
// El precio de su tiquete es: 3750

// ----- 2 ------
// age = 11;
// hasCoupon = false;
// couponDiscount = 0;
// hasStudentId = true;
// El precio de su tiquete es: 0

// ----- 3 ------
// age = 15;
// hasCoupon = true;
// couponDiscount = 70;
// hasStudentId = true;
// El precio de su tiquete es: 1500

//1 definimos el precio base
const basePrice = 5000;

//2 evaluamos cada regla y guardamos el descuento más alto
        let finalDiscount = 0; // Porcentaje de descuento (ej: 0.40 para 40%) 

        if (age <= 12) {
            finalDiscount = 100; // 100% de descuento (Gratis)
        } else {
            // Si no es niño, buscamos el mayor entre las otras opciones:
            // Opción A: Adulto Mayor (40%)
            if (age >= 65) {
                if (40 > finalDiscount) {finalDiscount = 40;}
            }  
            // Opción B: Estudiante (25%)
            if (hasStudentId) {
                if (25 > finalDiscount) {finalDiscount = 25;}
            }
            // Opción C: Cupón (Variable)
            if (hasCoupon) {
                if (couponDiscount > finalDiscount) {finalDiscount = couponDiscount;}   
            }
            }  
            // aplicamos el descuento más alto al precio base
            const discountAmount = (basePrice * finalDiscount) / 100;

            const price = basePrice - discountAmount;

            // calculamos el precio final
            console.log('El precio de su tiquete es: ', price);
            