// // La empresa perfumes latinos premiará a su empleado del mes (quien más dinero recaude en ventas) con una comisión y requiere un programa que almacene y muestre:

// // - Qué cantidad de cada productos vendió cada vendedor.
// // - La suma total de dinero recolectada por cada vendedor.
// // - Nombre del empleado del mes, en caso de haber vendido lo mismo indicar que fue un empate.

// // La empresa actualmente cuenta con los siguientes 4 productos que tienen los siguientes nombres y precios:

// // - Aqua: 200 usd.
// // - Emoción: 180 usd.
// // - Alegría: 160 usd.
// // - Frescura: 150 usd.

// // Y dos vendedores Juana y Pedro.
let juanaAqua = [];
let juanaEmocion = [];
let juanaAlegria = [];
let juanaFrescura = [];

for(var i = 0; i < 1; i++){
   juanaAqua.push(prompt("Ingresa cuantos acua vendiste"));
   juanaEmocion.push(prompt("Ingresa cuantos emoción vendiste"));
   juanaAlegria.push(prompt("Ingresa cuantos alegria vendiste"));
   juanaFrescura.push(prompt("Ingresa cuantos frescura vendiste"));
   console.log(juanaAqua)
   console.log(juanaEmocion)
   console.log(juanaAlegria)
   console.log(juanaFrescura)
   console.log(`Juana vendió ${juanaAqua} Aqua, ${juanaEmocion} Emoción, ${juanaAlegria} Alegría y ${juanaFrescura} Frescura.`)
}


// - Los resultados deben visualizarse en consola y deben activarse a través de botones.
// - El programa debe validar y mostrar un mensaje de error si no se ingresa un valor numérico.(Opcional).
// - Debe hacer uso de funciones, arrays y estructuras de control para resolver el ejercicio.

// Realizar el ejercicio por medio de cualquiera de los métodos de salidas en JS (console, alert o document).