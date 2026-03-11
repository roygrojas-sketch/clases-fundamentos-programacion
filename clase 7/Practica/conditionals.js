if (5== 5 && (4 > 10 || 3 != 7)){
console.log('Es verdadero');
} else {
console.log('Es falso');
}

//crear estas variables:
const userName = "roy1213";//cualquier string
const password = "12345678";//cualquier string
const savedPassword = "12345678";//cualquier string
const userAnswer = "ray";//cualquier string
const savedAnswer = "roy";//no cambia

//1. Si el userName no es igual a "roy1213" 
//--> "Usuario no encontrado"
//2. Si el userName es correcto y el password es igual a savedPassword
//--> "Bienvenido"
//3. Si el password es incorrecto pero el userName es correcto, entonces se le pregunta al usuario "¿Cuál es tu nombre de mascota?" y si la respuesta es igual a savedAnswer
//--> "Bienvenido"
//4. Si el password es incorrecto y la respuesta a la pregunta de seguridad es incorrecta, entonces se le dice al usuario "Contraseña incorrecta, intente de nuevo" 

if (userName != "roy1213"){
    console.log("Usuario no encontrado");
}  else if (password === savedPassword){
    console.log("Bienvenido");
}  else if (userName === "roy1213" && password != savedPassword && userAnswer === savedAnswer){
    console.log("Contraseña incorrecta, intente de nuevo");
} else if (userName === "roy1213" && password != savedPassword && userAnswer != savedAnswer){ 
    console.log("Contraseña incorrecta, intente de nuevo");
}