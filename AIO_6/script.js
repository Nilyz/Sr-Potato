//dom
let personaje = document.getElementById("personajes");
let resultado = document.getElementById("resultado");
let boton = document.getElementById("btn");
let imagen = document.getElementById("imagen_potato1");
let intento = document.getElementById("intentos");

//variables
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
let cont = 0;
let intentos = 0;
let quedan = 10;
let vida = 5;



//funcion parea comprobar si existe o no el personaje en el array
function comprobar() {
    //primero obtengo el valor introducido por el usuario
    let personajeIngresado = personaje.value;

    let encontrado = false; //es para que no se produzca el error de que se sobrescriba  la variable resultado

    //comprueba si el valor coincide con alguno del array
    for (let i = 0; i < listaPersonajes.length; i++) {

        if (personajeIngresado === listaPersonajes[i]) {
            encontrado = true;
            cont++;
            imagen = document.getElementById("imagen_potato" + cont);
            imagen.style.opacity = "1";
            //aquí los muestra cuando acierta
            listaPersonajes[i]=null;
            
        }
    }
    //imprime si existe o no el nombre en el array y cambia el alien
    if (encontrado) {
        resultado.textContent = "Sí existe " + personajeIngresado;
        let alien = document.getElementById("alien");
        alien.src = "img_potato/alien_sorprendido.png";
    } else {
        resultado.textContent = "No existe " + personajeIngresado;
        vida--;
        document.getElementById("vida").textContent = "Vida: " + vida;
        alien.src = "img_potato/alien_triste.png";

    }
    intentos++;
    intento.textContent = "Intentos: " + intentos;
}

//función para ver si quedan más intentos, si no hay, no funciona
function intentarAdivinar() {
    if (vida > 0) {
        comprobar();
    } else {
        resultado.textContent = "Se acabaron los intento";
    }
}
/*
//resetea el contador de vida y también hay un bucle que hace que todas las imágenes vuelvan a ser invisibles
function otraVez() {
    vida = 5;
    quedan = 10;
    document.getElementById("vida").textContent = "Vida: " + vida;
    for (let i = 1; i <= 9; i++) {
        let imagenInvisible = document.getElementById("imagen_potato" + i);
        imagenInvisible.style.opacity = "0";
    }
}
*/

//adjunto la acción al botón de adivinar
boton.addEventListener("click", intentarAdivinar);

/*
let intentarOtraVez = document.getElementById("intentarOtraVez");
intentarOtraVez.addEventListener("click", otraVez);
*/