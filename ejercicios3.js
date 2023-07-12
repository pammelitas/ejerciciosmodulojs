// 1. Crea un programa que pregunte al usuario un número. Mostrar los números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario.
// let num = prompt("Ingresa un número")
// for(let i = 0; i <= num; i += 5){
//     console.log(i)
// }



// 2. Crea un programa que solicite al usuario 2 números entre 1 y 50. Posteriormente mostrar en consola los números del 1 hasta el 50, pero añadir el mensaje “¡Lotería!” solo al mostrar los números indicados por el usuario.
// let numA = prompt("Ingresa un número del 1 al 50")
// let numB = prompt("Ingresa otro número del 1 al 50")

// for(let i = 0; i <= 50; i++){
//     console.log(i)
//     if(i == numA || i == numB){
//         console.log("Lotería")
//     }
// }



// 3. Crea un programa que solicite al usuario números, si lo que este introduce es un número guardarlo en un arreglo. Para terminar el capturar el usuario debe ingresar el número 0. Finalmente mostrar la lista de números capturados en pantalla o en la consola.
// let userInput;
// let arr = [];

// while(!(userInput == "0")){
//     userInput = parseInt(prompt("Ingresa números, cuando termines presiona 0"))
//     arr.push(userInput);
//     console.log(arr)
// }



// 4. Crea un programa que solicite al usuario letras o palabras, si es así guardar el resultado. Para terminar de capturar el usuario no debe escribir valor alguno. Al terminar de capturar, mostrar en pantalla la concatenación de todas las palabras capturadas.
// let datos;
// let arr = [];

// while(!(datos == "")){
//     datos = String(prompt("Ingresa letras o palabras"));
//     arr.push(datos)
//     console.log(arr)
//     console.log(arr.join(" "));
//     // console.log(datos)
// }



// 5. Crea un programa que solicite al usuario un día de la semana (ej: lunes, jueves, domingo, etc). El programa mostrará un mensaje personalizado para cada día de la semana por medio de un alert. Y seguirá pidiendo al usuario introducir otro día. En caso de que el día introducido sea domingo mostrar al usuario el mensaje “Ve a descansar” y terminar la captura de información.
// let dia;

// while(!(dia == "domingo")){
//     dia = prompt("Ingresa un día de la semana");
//     if(dia == "lunes" ){
//         alert("Bonito lunes!")
//     }else if(dia == "martes"){
//         alert("Bonito martes!")
//     } else if(dia == "miercoles"){
//         alert("Bonito miércoles!")
//     } else if(dia == "jueves"){
//         alert("Bonito jueves!")
//     } else if(dia == "viernes"){
//         alert("Bonito viernes!")
//     } else if(dia == "sabado"){
//         alert("Bonito sábado!")
//     } else if(dia == "domingo"){
//         alert("Ve a descansar")
//     } else{
//         alert("Ingresa un día válido")
//     }
// }