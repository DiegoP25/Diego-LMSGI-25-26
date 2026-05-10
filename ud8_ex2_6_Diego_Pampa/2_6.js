const text = document.querySelector("#text");
const button = document.querySelector("#button");
const llista_tasques = document.querySelector("#llista-tasques");
const select = document.querySelector("#select");


button.addEventListener("click", () => {
  const valor = text.value.trim();

  if (valor === "") return;

  const li = document.createElement("li"); // Crear un nuevo elemento LI
  li.textContent = valor; // Asignar el texto del input al li

  // creamos un Botón de eliminar
  const btnBorrar = document.createElement("button");
  btnBorrar.textContent = "Eliminar"; //le damos un texto al botón
  btnBorrar.classList.add("btn-eliminar"); //le añadimos una clase para luego identificarlo

  li.appendChild(btnBorrar); //añadimos el botón al li
  llista_tasques.appendChild(li); //añadimos el li a la lista de tareas

  text.value = ""; //limpiamos el input después de añadir la tarea
});


llista_tasques.addEventListener("click", (e) => { //
  const elemento = e.target; // Obtenemos el elemento que se ha clicado

  // Si se hace click en el botón eliminar
  if (elemento.classList.contains("btn-eliminar")) {
    elemento.parentElement.remove(); // Eliminamos el li padre del botón
    return; // Salimos de la función para evitar que se ejecute el código de marcar/desmarcar
  }

  
  if (elemento.tagName === "LI") { // Si el elemento clicado es un li (la tarea)
    elemento.classList.toggle("completed"); // Alternamos la clase "completed" para marcar o desmarcar la tarea como completada
  }//togle --> si la clase "completed" no está presente, la añade, si ya está presente, la elimina.
});

//change --> se ejecuta cuando se cambia el valor del select
select.addEventListener("change", () => { // Cuando se cambia la opción del select
  const tareas = llista_tasques.querySelectorAll("li"); // Obtenemos todas las li de la lista

  tareas.forEach((li) => { // Recorremos cada li
    const completada = li.classList.contains("completed");// Comprobamos si la tarea está marcada como completada

    if (select.value === "totes") { // Si se selecciona "totes", mostramos todas las tareas
      li.style.display = "flex"; // Mostramos el li, puede ser "block" o "flex" dependiendo del diseño, use "flex"
    }

    if (select.value === "completades") { // Si se selecciona "completades", mostramos solo las tareas completadas
      li.style.display = completada ? "flex" : "none"; // Si la tarea está completada, la mostramos, si no, la ocultamos(usando operador ternario)
    }

    if (select.value === "pendents") { // Si se selecciona "pendents", mostramos solo las tareas pendientes
      li.style.display = completada ? "none" : "flex"; // Si la tarea está completada, la ocultamos, si no, la mostramos (usando operador ternario)
    }
  });
});
