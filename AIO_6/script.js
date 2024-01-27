

// DOM
let personaje = document.getElementById("personajes");
let resultado = document.getElementById("resultado");
let boton = document.getElementById("btn");
let imagen = document.getElementById("imagen_potato1");
let intento = document.getElementById("intentos");
let ventanaFin = document.getElementById("ventanaFin");
// Variables
let listaPersonajes = [
    "Woody",
    "Buzz Lightyear",
    "Jessie",
    "Rex",
    "Hamm",
    "Mr. Potato Head",
    "Bo Peep",
    "Slinky Dog",
    "Aliens",
];
let cont=0;
let intentos = 0;
let quedan = 10;
let vida = 5;
let listaEncontrados = [null,null,null,null,null,null,null,null,null];

// Función para comprobar si existe o no el personaje en el array
function comprobar() {
    // Obtengo el valor introducido por el usuario
    let personajeIngresado = personaje.value;

    let encontrado = false;

    // Comprueba si el valor coincide con alguno del array y luego si se ha repetido o no
    for (let i = 0; i < listaPersonajes.length; i++) {
        if (personajeIngresado === listaPersonajes[i]) {
            encontrado = true;
            imagen = document.getElementById("imagen_potato" + (i+1));
            
            //Si el personaje no esta en la listaEncontrados muestra una imagen
            if (listaEncontrados[i] === null) {
                 resultado.textContent = "Sí existe: " + personajeIngresado;
                 let alien = document.getElementById("alien");
                 alien.src = "img_potato/alien_sorprendido.png";
                 imagen.style.opacity = "1"; // Muestra la imagen cuando acierta
                 listaEncontrados[i] = personajeIngresado;//lo meto en la lista
                 cont++;
                 console.log( listaEncontrados+ cont);
                 

                 
            } else {
                resultado.textContent = "Sí existe pero ya lo has dicho" ;
                alien.src = "img_potato/alien_triste.png";
            }
        }
    }

    // Imprime si no existe el nombre en el array y cambia el alien a triste
    if (encontrado===false) {
        resultado.textContent = "No existe: " + personajeIngresado;
        vida--;
        document.getElementById("vida").textContent = "Vida: " + vida;
        alien.src = "img_potato/alien_triste.png";
    }

    intentos++;
    intento.textContent = "Intentos: " + intentos;
}


// Función para ver si quedan más intentos, si no hay, no funciona
function intentarAdivinar() {
    if ( vida > 0 ) {
        comprobar();
    } else if(vida===0){
        resultado.textContent = "Se acabaron los intentos";
    } 
    if(cont>=9){
        resultado.textContent = "Has ganado";
        ventanaFin.style.opacity="1";
        lanzarConfeti();
    }
}

// Adjunto la acción al botón de adivinar
boton.addEventListener("click", intentarAdivinar);

function lanzarConfeti() {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }
