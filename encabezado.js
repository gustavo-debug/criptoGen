// JavaScript source code
/*var ancho = window.innerWidth;
var alto = window.innerHeight;
*/
/*
const entrada = document.querySelector(".sender");
let ancho = window.onresize;
var width = window.innerWidth;

window.addEventListener('resize', function () {
    if (window.innerWidth !== width) {
        width = window.innerWidth;
    }
});
if (width < 1850) {
    entrada.setAttribute("placeholder", "buscador Criptomonedas");
}
else if (width >= 1850) {
    entrada.setAttribute("placeholder", "buscar criptomoneda");
}
 */
/*
if (ancho < 1700) {

    entrada.setAttribute("placeholder", "buscador");
}*/
const boton_enviar = document.querySelector("#boton_enviar");
const entrada = document.querySelector("#input_buscador");
let contador = 0;
let resto = 0;

boton_enviar.addEventListener("click",(e)=>{
    ancho = window.innerWidth;
    contador++;
    
    if( ancho < 550 ){
        resto = contador % 2;
        if( resto == 1){
            entrada.style.display = "block";
        }
        else{
            entrada.style.display = "none";
        }
    }
    else{
        entrada.style.display = "block";
    }
}
);
