//a) Selecciona la sección (section) con un identificador “container” sin utilizar querySelector.
const container1 = document.getElementById("container");
console.log(container1);

//b) Selecciona la sección (section) con un identificador “container” mediante querySelector.
const container2 = document.querySelector("section");
console.log(container2);

//c) Selecciona todos los le con clase "second" dentro de cualquier lista.
const li_second = document.querySelectorAll("li.second");
console.log(li_second);

//d) Selecciona un elemento de la lista con una clase “third”, pero sólo el elemento de la lista ordenada.
const ol = document.querySelectorAll("ol li.third");
console.log(ol);

//e) Añade el texto "¡Hola!" al final de la sección con un identificador de contenedor.
const h4 = document.createElement("h4")
const texto = document.createTextNode("¡Hola!")

h4.appendChild(texto)
const container3 = document.getElementById("container");
container3.appendChild(h4)

//f) Añade la clase “main” al div con una clase “footer”.
const footer = document.querySelector(".footer");
footer.classList.add("main"); //añade nombre de clase

//g) Saca la clase “main” del div con una clase “footer”.
footer.classList.remove("main") //ahora eliminamos este nombre de clase

//h) Crea y añade un nuevo le con el texto "four" en la lista no ordenada.
const li_four = document.createElement("li");
const li_text = document.createTextNode("four")

li_four.appendChild(li_text)

const lista_o = document.querySelector("ol") //seleccionamos la lista ordenada
lista_o.appendChild(li_four)

//i) Pasa por todos los elementos de la lista ordenada y dales un color de fondo de color "verde".
// const lista_ordenada = document.querySelector("ol")
lista_o.style.backgroundColor="green" //

//j) Elimina el div con una clase “footer”.
footer.remove() //-->  "footer" ya esta seleccionando el div con la clase footer: .footer

//k) Inserta un nuevo elemento antes del primer li de la lista no ordenada.
const newElement = document.createElement("section") //creamos elemento section
const newElementContent = document.createTextNode("Texto en el nuevo Elemento") //agregamos texto
newElement.appendChild(newElementContent) //al section recien creado le añadimos el texto recien agregado

const ul = document.querySelector("ul") //seleccionamos el elemento padre, ul
const primer_li = document.querySelector(" ul .first") //seleccionamos el elemento como referencia, el primer li del ul

ul.insertBefore(newElement, primer_li) //elemento padre(ul).insertBefore(nuevoElemento, referencia)

//l) Mueve el último elemento de la lista no ordenada a la lista ordenada.
const lastUlItem = ul.lastElementChild; //seleccionamos el ultimo hijo del ul
lista_o.appendChild(lastUlItem); //agregamos el ultimo hijo del ul a la lista ol, por defecto se añade el elemnto al final


//m) Clona el primer elemento de la lista no ordenada y añádalo al final.
const firstItemClone = ul.firstElementChild.cloneNode(true);// .cloneNode --> clona el elemento
                            
ul.appendChild(firstItemClone);
//si le quitasemos el .cloneNode(true) al elemento original, al agregar al final del ul, el elemento se moveria al final dejando libre el lugar donde estaba






















//