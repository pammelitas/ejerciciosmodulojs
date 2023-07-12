// El semáforo deberá cambiar de luz de Verde a Amarilla y de Amarilla a Roja y luego de nuevo a Verde.

// Puedes mostrar la imagen del semáforo cambiando, hacer el cambio con console.log o con alert.

// Se debe respetar el orden de los colores:

// - De rojo pasa a Verde.
// - De amarillo puede pasar a Rojo.
// - De Verde pasa a Amarillo.

function semaforo(){
    let green = document.getElementById("green")
    let yellow = document.getElementById("yellow")
    let red = document.getElementById("red")

    green.style.opacity=1;
    setTimeout(() => { // luz verde prendida
        green.style.opacity = 1;
        red.style.opacity = .3
        yellow.style.opacity = .3
    }, 5000);

    setTimeout(() => { // luz amarilla prendida
        green.style.opacity = .3;
        red.style.opacity = .3;
        yellow.style.opacity = 1;
    }, 7000);

    setTimeout(() => { // luz roja prendida
        green.style.opacity = .3;
        red.style.opacity = 1;
        yellow.style.opacity = .3;
    }, 12000);
}

let timer = setInterval(function(){
    semaforo()
}, 12000)

semaforo()



