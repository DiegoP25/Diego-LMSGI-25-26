const click_here = document.querySelector(".click-here");    
console.log(click_here);

const popup_window = document.querySelector(".popup_window");
console.log(popup_window);

// const aceptar = document.querySelector('section button.aceptar');  
const aceptar = document.querySelector('.aceptar');
console.log(aceptar);  

// const cancelar = document.querySelector('section button.cancelar')
const cancelar = document.querySelector('.cancelar');
console.log(cancelar);

const body = document.querySelector("body");
console.log(body);

// const mensajeConfirmacion = document.querySelector(".mensaje-confirmacion");
// console.log(mensajeConfirmacion);


// Función para cerrar la ventana emergente
function cerrarVentana(){
 click_here.style.display="block";
 popup_window.style.display="none";
 body.style.background="white"; //restauramos el fondo a su estado original
}


click_here.addEventListener("click", ()=> {
  click_here.style.display="none"; //ocultamos el botón
  popup_window.style.display="block"; //mostramos la ventana emergente
  body.style.background="rgba(0,0,0,0.5)"; //hacemos que el fondo se vea más oscuro
})

aceptar.addEventListener("click", ()=> {
 alert("Has aceptado el mensaje."); //mostramos un mensaje de alerta
//  mensajeConfirmacion.textContent = "Has aceptado el mensaje.";  //mostramos un mensaje de confirmación en la página
 cerrarVentana(); //llamamos a la función de cerrar la ventana emergente
})

cancelar.addEventListener("click", ()=> {
 cerrarVentana(); //llamamos a la función de cerrar la ventana emergente
})