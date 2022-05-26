/**
 * Wordle.
 * Lenguajes de Marcas y Sistemas de Gestión de la Información
 * @authorJorgePerezTorres
 * 
 * Nota: El script palabra.js tiene que llamarse antes desde el HTML. 
 * Así podemos acceder a "palabra_del_dia"
 * 
 * Completa en este archivo tu código JavaScript
 * 
 */

//DECLARACION VARIABLES
var btnComprobar = document.getElementById('boton-comprobar');
var enterTeclado = document.getElementById('palabra');
var numeroIntentos = 0;
var info = document.getElementById('texto-informativo');
var fin_juego = false;

btnComprobar.onclick = comprobar;
enterTeclado.onkeydown = function (e) {
    if (e.keyCode == 13) {
        comprobar();
    }
}

function comprobar() {
    let letra;
    let palabra = document.getElementById('palabra').value.toUpperCase();

    if (palabra.length == 5) {
        info.innerHTML = "<p></p>";
        info.classList.remove('informacion');
        for (let i = 0; i < palabra_del_dia.length; i++) {
            letra = document.getElementById('letra-' + i + '-' + numeroIntentos);
            letra.textContent = palabra[i];

            if (palabra[i] == palabra_del_dia[i]) {
                letra.classList.add('siEstasiLugar');
            }
            else if (palabra_del_dia.includes(palabra[i])) {
                letra.classList.add('siEstanoLugar');
            }
            else if (!palabra_del_dia.includes(palabra[i])) {
                letra.classList.add('noEsta');
            }
            if (palabra == palabra_del_dia) {
                fin_juego = true;
                info.innerHTML = "<p>Enhorabuena, lo has acertado en " + (numeroIntentos + 1) + " intentos</p>";
                info.classList.add('informacion');
            }
        }
        if (numeroIntentos == 5) {
            fin_juego = true;
            info.innerHTML = "<p>Has agotado todos los intentos</p>";
            info.classList.add('informacion');
        }
        if(fin_juego){
            btnComprobar.onclick = desactiva;
            enterTeclado.onkeydown = desactiva;
        }
        numeroIntentos++;
        console.log('Usuario lleva ' + numeroIntentos + ' intento/s');
    } else {
        info.innerHTML = "<p>La palabra no tiene 5 letras!</p>";
        info.classList.add('informacion');
    }
}

function desactiva(){
    btnComprobar = document.getElementById('boton-comprobar').disabled = true;
    enterTeclado = document.getElementById('palabra').disabled = true;
}

