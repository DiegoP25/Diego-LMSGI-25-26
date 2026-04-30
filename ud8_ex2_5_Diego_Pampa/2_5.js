/*2.5 Crea una página web que tenga un listado de tipos <ul> con un <li> de muestra.
Introduce un botón en la página que, cuando lo pulses, te muestre un prompt para que
el usuario introduzca un texto.
Una vez cerrado el prompt, el valor se añadirá como un nuevo <li> a la lista creada.
Añade dos botones más con texto “Borrar primer elemento” y “Borrar último elemento”
de modo que cuando pulses el primer botón borre el primer elemento de la lista y cuando
pulses el segundo botón, borre el último elemento de la lista.*/ 

const ul = document.querySelector("ul")

const addElement = document.querySelector(".afegeix-element")
const removeFirstElement = document.querySelector(".EsborraPrimerElement")
const removeLastElement = document.querySelector(".EsborraUltimElemnt")


addElement.addEventListener("click", () => {

  const li = document.createElement("li") //creamos nuevo elemento li, si lo crearamos afuera del evento, al crear un nuevo elemento, se sobreescribiría el mismo elemento.
  const prova = prompt("Introdueix el text per al nou element: ")

   if (!prova){return} //si cancelo o dejo vacío, no se añade nada
  //si le diera cancelar, se añadiria un elemento vacio: null

  li.append(prova) // li.textContent = prova; //otra forma de añadir el texto al elemento li

  ul.appendChild(li) // ul.append(li) //otra forma de añadir el elemento li al ul, pero esta forma no es compatible con Internet Explorer, mientras que appendChild sí lo es.

})


removeFirstElement.addEventListener("click", () => {
  if (ul.firstElementChild) {
    ul.removeChild(ul.firstElementChild) // ul.remove(ul.firstElementChild) //otra forma de eliminar el primer elemento, pero esta forma no es compatible con Internet Explorer, mientras que removeChild sí lo es.
  }
})


removeLastElement.addEventListener("click", () => {
  if(ul.lastElementChild){
    ul.removeChild(ul.lastElementChild) // ul.remove(ul.lastElementChild) //otra forma de eliminar el último elemento, pero esta forma no es compatible con Internet Explorer, mientras que removeChild sí lo es.
  }
})

