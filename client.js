$(document).ready(function () {
  window.addEventListener("message", recibirImagen, false);
  crearIframe();
});

/**
 * Función para crear el iframe dinámicamente
 */
function crearIframe() {
  $("body").append(
    "<iframe id='anunciante' src='http://danigayo.info/HTML5/postmessage/ad_server.html' width='0' height='0' style='display: none;' onload='enviarTimestamp()'></iframe>"
  );
}

/**
 * Función para eliminar el iframe
 */
function eliminarIframe() {
  var iframe = document.getElementById("anunciante");
  iframe.parentNode.removeChild(iframe);
}

/**
 * Función para enviar el timestamp actual al servidor mediante postMessage
 */
function enviarTimestamp() {
  //Enviar el timestamp a través de la ventana del iframe
  document.getElementById("anunciante").contentWindow.postMessage(Date.now(),"http://danigayo.info");
}

/**
 * Función para recibir del servidor la ruta de la imagen
 * @param {object} e objeto que se recibe como respuesta del postMessage
 */
function recibirImagen(e) {
  var rutaImagen = e.data;
  //Actualizar imagen
  document.getElementById("anuncio").src = rutaImagen;
  //Eliminar iframe
  eliminarIframe();
}