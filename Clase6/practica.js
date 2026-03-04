// Declaración de variables para los días de la semana
const lunes = " Lunes";
const martes = " Martes";
const miercoles = " Miércoles";
const jueves = "Jueves";
const viernes = "Viernes";
const sabado = "Sábado";
const domingo = "Domingo";
// crear una variable llamada "hoy" con el valor del dia de hoy = "miercoles"
const hoy = "hoy es" + miercoles;


true
false

console.log('que dia es hoy?');
console.log(hoy);

// crar los siguientes logs
// ¿Hoy es Lunes?-> false
console.log("¿Hoy es Lunes? -> " + (hoy == "hoy es lunes"));

// ¿Hoy es Miercoles? -> true
console.log("¿Hoy es Miércoles? -> " + (hoy == "hoy es miercoles"));


// ¿Hoy es Martes o miercoles? -> true
console.log('¿Hoy es Martes o Miércoles? -> ' + (hoy == "hoy es martes" || hoy == "hoy es miercoles"));

// ¿Hoy es miercoles y jueves? -> false
console.log('¿Hoy es Miércoles y Jueves? -> ' + (hoy == "hoy es miercoles" && hoy == "hoy es jueves"));
