const age = 33;
var number = 10;

var numberFloat = 3.14;
console.log(numberFloat);

let numberwithoutzero = 15.60;
console.log(numberwithoutzero);

let name = "Roy";

true;
false;

//numeros +,-,*, /

const sum = 3 *((40+20)*2);
console.log(suma);

//strings
let name = "Roy";
let lastName = "Rojas";
let fullName = name + " " + lastName;
console.log(fullName);


const strings = "hola";
const strings2 = "mundo";
const result = strings + " " + strings2;
console.log(result);

try {
    console.log(age < 18 );
    throw new Error("eres menor de edad");
} catch (error) {
    console.error(error.message);
}finally {
    console.log("este bloque se ejecuta siempre");
}


