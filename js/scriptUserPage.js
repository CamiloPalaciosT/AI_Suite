//---- clase Activa ---//
var claseChat = document.getElementsByClassName("claseChat");

var claseChat = document.getElementsByClassName("claseChat");
var boton = document.getElementById("miBoton");

function ClaseActiva() {
  Array.from(claseChat).forEach(function(element) {
    element.classList.toggle("active");
  });
}

boton.addEventListener("click", ClaseActiva);

// chatGPT
const btnAgregarCodigo = document.getElementById("btnAgregarCodigo");
const contenedorCodigo = document.getElementById("contenedorCodigo");
const ContadorChatGPT = document.getElementById("contadorChatGPT");
let contador = 0;
function agregarCodigoHTML() {
contador ++;
const codigoHTML = '<button id="btnAgregarCodigo">Agregar Código HTML</button><div id="contenedorCodigo"></div>';
contenedorCodigo.innerHTML += codigoHTML;
ContadorChatGPT.innerHTML = contador + " chats";
}

btnAgregarCodigo.addEventListener("click", agregarCodigoHTML);

//BARD
const btnAgregarCodigoDos = document.getElementById("btnAgregarCodigoDos");
const contenedorCodigoDos = document.getElementById("contenedorCodigoDos");
const contadorBard = document.getElementById("contadorBard");
let contadorDos = 0;
function agregarCodigoHTMLDos() {
contadorDos ++;
const codigoHTMLDos = '<button id="btnAgregarCodigo">Agregar Código HTML</button><div id="contenedorCodigo"></div>';
contenedorCodigoDos.innerHTML += codigoHTMLDos;
contadorBard.innerHTML = contadorDos + " chats";
}

btnAgregarCodigoDos.addEventListener("click", agregarCodigoHTMLDos);

//AIChat
const btnAgregarCodigoTres = document.getElementById("btnAgregarCodigoTres");
const contenedorCodigoTres = document.getElementById("contenedorCodigoTres");
const contadorAIChat = document.getElementById("contadorAIChat");
let contadorTres = 0;
function agregarCodigoHTMLTres() {
contadorTres ++;
const codigoHTMLTres = '<button id="btnAgregarCodigo">Agregar Código HTML</button><div id="contenedorCodigo"></div>';
contenedorCodigoTres.innerHTML += codigoHTMLTres;
contadorAIChat.innerHTML = contadorTres + " chats";
}

btnAgregarCodigoTres.addEventListener("click", agregarCodigoHTMLTres);

//QuizCat
const btnAgregarCodigoCuatro = document.getElementById("btnAgregarCodigoCuatro");
const contenedorCodigoCuatro = document.getElementById("contenedorCodigoCuatro");
const contadorQuizCat = document.getElementById("contadorQuizCat");
let contadorCuatro = 0;
function agregarCodigoHTMLCuatro() {
contadorCuatro ++;
const codigoHTMLCuatro = '<button id="btnAgregarCodigo">Agregar Código HTML</button><div id="contenedorCodigo"></div>';
contenedorCodigoCuatro.innerHTML += codigoHTMLCuatro;
contadorQuizCat.innerHTML = contadorCuatro + " chats";
}

btnAgregarCodigoCuatro.addEventListener("click", agregarCodigoHTMLCuatro);

//Silky
const btnAgregarCodigoCinco = document.getElementById("btnAgregarCodigoCinco");
const contenedorCodigoCinco = document.getElementById("contenedorCodigoCinco");
const contadorSilky = document.getElementById("contadorSilky");
let contadorCinco = 0;
function agregarCodigoHTMLCinco() {
contadorCinco ++;
const codigoHTMLCinco = '<button id="btnAgregarCodigo">Agregar Código HTML</button><div id="contenedorCodigo"></div>';
contenedorCodigoCinco.innerHTML += codigoHTMLCinco;
contadorSilky.innerHTML = contadorCinco + " chats";
}

btnAgregarCodigoCinco.addEventListener("click", agregarCodigoHTMLCinco);

//respuesta de chatGPT
const zonaChat = document.getElementsByClassName("zonaChat")[0];

function enviarMensaje() {
    var mensaje = document.getElementById("mensajeInput").value;
    procesarMensaje(mensaje);
    document.getElementById("mensajeInput").value = ""; // Agregado: borrar el valor del campo de entrada
}

function procesarMensaje(mensaje) {
    zonaChat.innerHTML += `<div class="contenedorResultadoUsuario">
    <div id="resultadoChat">
        <div class="cuadroResultadoUsuario">` +
        mensaje +
        `</div>
    </div>
</div>
<div class="contenedorResultadoChat">
                        <div id="resultadoChat">
                            <div class="cuadroResultadoChat">
                                Lo siento aun no puedo entenderte, me encuentro en fase Beta. 
                            </div>
                        </div>
                    </div>`;
    console.log("Mensaje recibido: " + mensaje);
    zonaChat.scrollTop = zonaChat.scrollHeight;
}
/*------Enviar con Enter -----*/
var mensajeInput = document.getElementById("mensajeInput");

mensajeInput.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
    enviarMensaje();
    }
});
/*-------scroll zona chat -------*/

window.addEventListener("DOMContentLoaded", scrollAlFinal);
