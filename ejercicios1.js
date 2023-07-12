// 1. Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), en caso de contestar sí, responder “Ciertamente”, en caso de contestar no, responder: “No te creo”.
// SOLUCION 1
// let respuesta = prompt("Eres bellísimo/a? Responde con si o no")

// if(respuesta === "si"){
//     alert("Ciertamente!")
// } else if(respuesta === "no"){
//     alert("No te creo!")
// } else{
//     alert(`Responde con 'si' o 'no'`)
// }

// SOLUCION 2
// const r1 = "si"
// const r2 = "no"

// while(true){
//     let userInput = prompt("Eres bellísimo/a? Responde con si o no");
//     if(userInput === r1){
//         alert("Ciertamente!")
//         break;
//     } else if(userInput === r2){
//         alert("No te creo!")
//         break;
//     } else{
//         alert(`Responde con 'si' o 'no'`)
//     }
// }



// // 2. Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x núm no es divisible entre 2”.
// let numero = prompt("Ingresa un número para saber si es divisible entre 2");

// if(numero % 2 === 0){
//     alert(`${numero} es divisible entre 2!`)
// } else{
//     alert(`${numero} no es divisible entre 2`)
// }



// 3. Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en un Alert.
// let esPar = prompt("Ingresa un número para saber si es par o impar");

// if(esPar % 2 === 0){
//     alert(`${esPar} es un número par!`)
// }else{
//     alert(`${esPar} no es un número par!`)
// }


 
// 4. Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir 'Ganaste un premio', en caso contrario mostrar el número y el mensaje “Lo sentimos, sigue participando”.
// let numCliente = prompt("Ingresa tu número de cliente");

// if(numCliente === '1000'){
//     alert("Ganaste un premio!")
// } else{
//     alert("Lo sentimos, sigue participando")
// }



// 5. Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. No considerar el caso en que ambos números son iguales.
// let numA = prompt("Ingresa un número")
// let numB = prompt("Ingresa otro número")

// if(numA > numB){
//     alert(`${numB} es menor que ${numA}`)
// } else if(numA < numB){
//     alert(`${numA} es menor que ${numB}`)
// } else{
//     alert("Los dos números son iguales")
// }



// 6. Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. Considerar el caso en que 2 números sean iguales.
// let numA = prompt("Ingresa un número")
// let numB = prompt("Ingresa otro número")
// let numC = prompt("Ingresa un último número")

// if(numA > numB && numA > numC){
//     alert(`${numA} es mayor que ${numB} y ${numC}`)
// } else if(numB > numA && numB < numC){
//     alert(`${numC} es mayor que ${numA} y ${numB}`)
// } else if(numB > numA && numB > numC){
//     alert(`${numB} es mayor que ${numA} y ${numC}`)
// } else if(numA == numB && numB == numC){
//     alert(`Los tres números son iguales`)
// } else if(numA == numB || numB == numC || numA == numC){
//     alert(`Dos números son iguales`)
// }


// 7. Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo. Si el día ingresado no es ninguno de esos, imprimir otro mensaje.
// let dia = prompt("Ingresa un día")

// if(dia === 'lunes'){
//     alert("Buen lunes!");
// } else if(dia === 'viernes'){
//     alert("Ya es viernes!");
// } else if(dia === 'sabado' || dia === 'domingo'){
//     alert("Disfruta el fin de semana")
// } else if(dia === 'martes' || dia === 'miercoles' || dia === 'jueves'){
//     alert("Bonito día")
// } else{
//     alert("Ingresa un día de la semana")
// }



// 8. Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que el número efectivamente esté en ese rango, si no lo está imprima un mensaje de error. Si lo está, imprima “reprobado” si la calificación es inferior a 6, “regular” si está entre 6 y 8, “bien” si es 9, y por último, “excelente” si es 10.
// let calif = prompt("Ingresa tu calificación entre 1 y 10")

// if(calif == 10){
//     alert("Excelente")
// } else if(calif == 9){
//     alert("Bien")
// } else if(calif >= 6 && calif <= 8){
//     alert("Regular")
// } else if(calif > 0 && calif < 6){
//     alert("Reprobado")
// } else{
//     alert("Error, ingresa un valor entre 1 y 10");
// }



// 9. Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rápida cuánto le costará en función del topping que elija.El helado sin topping cuesta 50 MXN.El topping de oreo cuesta 10 MXN.El topping de KitKat cuesta 15 MXN.El topping de brownie cuesta 20 MXN.En caso de no disponer del topping solicitado por el usuario, el programa le indicará “no tenemos este topping, lo sentimos.” y a continuación le informará el precio del helado sin ningún topping.
// let menu = prompt(`Bienvenido! Elige tu helado + topping
// a) Helado sin topping $50mxn
// b) Topping Oreo $10mxn
// c) Topping KitKat $15mxn
// d) Topping Brownie $20mxn`)

// if(menu === 'a'){
//     alert('Helado sin topping! Tu total es de $50mxn')
// } else if(menu === 'b'){
//     alert('Helado con topping de Oreo! Tu total es de $60mxn')
// } else if(menu === 'c'){
//     alert('Helado con topping de KitKat! Tu total es de $65mxn')
// } else if(menu === 'd'){
//     alert('Helado con topping de Brownie! Tu total es de $70mxn')
// } else{
//     alert('No tenemos ese topping, lo sentimos')
//     alert('Helado sin topping! Tu total es de $50mxn')
// }



// 10. Un conocido portal de educación en tecnología está ofreciendo programas para aprender a desarrollar aplicaciones. Escribe un programa que le indique a la persona interesada cuánto deberá pagar mensualmente de acuerdo a la opción elegida.El programa educativo contempla 3 diferentes niveles, cada uno con su costo mensual: Course: $4999 MXNCarrera $3999 MXNMaster: $2999 MXNAdicionalmente preguntar si cuenta con alguna beca y aplicar el descuento correspondiente al precio final.Beca Facebook: 20% de descuento.Beca Google: 15% de descuento.Beca Jesua: 50% de descuento.Finalmente, además del precio mensual con descuento, indicar al usuario cuánto gastaría en total por el curso elegido, tomando en cuenta las siguientes duraciones:Course: 2 mesesCarrera 6 mesesMaster: 12 meses
// let programa = prompt(`Cuál programa te interesa?
// a) Course
// b) Carrera
// c) Master`)

// if(programa == 'a'){
//     alert("El costo del Course es de  4999")
// } else if(programa == 'b'){
//     alert("El costo de la Carrera es de $3,999")
// } else if(programa == 'c'){
//     alert("El costo del Máster es de $2,999")
// } else{
//     alert("Elige una de las 3 opciones")
// }

// let beca = prompt("Tienes beca? a) Facebook, b) Google, c) Jesua")
// if(programa == 'a' && beca == 'a'){
//     alert('El costo del Course con beca Facebook es de $3,999 mensuales con 20%, un total de $7,998')
// } else if(programa == 'a' && beca == 'b'){
//     alert('El costo del Course con beca Google es de $4,249 mensuales con 15%, un total de $8,498')
// } else if(programa == 'a' && beca == 'c'){
//     alert('El costo del Course con beca Jesua es de $2,499 mensuales con 15%, un total de $4,999')
// } else if(programa == 'b' && beca == 'a'){
//     alert('El costo de la Carrera con beca Facebook es de $3,199 mensuales con 20%, un total de $19,194')
// } else if(programa == 'b' && beca == 'b'){
//     alert('El costo de la Carrera con beca Google es de $3,399 mensuales con 15%, un total de $20,394')
// } else if(programa == 'b' && beca == 'c'){
//     alert('El costo de la Carrera con beca Jesua es de $1,999 mensuales con 15%, un total de $11,997')
// } else if(programa == 'c' && beca == 'a'){
//     alert('El costo del Máster con beca Facebook es de $2,399 mensuales con 20%, un total de $28,788')
// } else if(programa == 'c' && beca == 'b'){
//     alert('El costo del Máster con beca Google es de $2,549 mensuales con 15%, un total de $30,589')
// } else if(programa == 'c' && beca == 'c'){
//     alert('El costo del Máster con beca Jesua es de $1,499 mensuales con 15%, un total de $17,994')
// }


// 11. Realizar un programa que ayude a calcular el total a pagar de acuerdo a la distancia recorrida por un vehículo con cargo extra por los litros consumidos, tomando en consideración lo siguiente:Si el vehículo es “coche”, el precio kilometro ha de ser 0.20, si es “moto” ha de ser 0.10 y si es “autobús” 0.5.Si los litros consumidos están entre 0 y 100 se ha de añadir 5 al costo total, si es mayor la cantidad de litros consumidos se ha de añadir 10 al total. Considere qué:total a pagar = (precio kilometro x kms recorridos) + extra por litros consumidos.
// let vehiculo = prompt("Ingresa tu vehículo: a) Coche, b) Moto, c) Autobús")
// let km = prompt("Ingresa cuántos km recorriste")

// if(km > 0 && km < 100){
//     alert("Se te agregarán 5 al costo total")
// } else if(km > 100){
//     alert("Se te agregarán 10 al total")
// }

// if(vehiculo == 'a' && km < 100){
//     alert("Tu total a pagar es de: " + (0.20 * km + 5))
// } else if(vehiculo == 'a' && km > 100)
//     alert("Tu total a pagar es de: " + (0.20 * km + 10))
// else if(vehiculo == 'b' && km < 100){
//     alert("Tu total a pagar es de " + (0.10 * km + 5))
// } else if(vehiculo == 'b' && km > 100){
//     alert("Tu total a pagar es de " + (0.10 * km + 10))
// } else if(vehiculo == "c" && km < 100){
//     alert("Tu total a pagar es de " + (0.5 * km + 5))
// } else if(vehiculo == "c" && km > 100){
//     alert("Tu total a pagar es de " + (0.5 * km + 10))
// }

