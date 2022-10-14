/* 1.1 Basandote en el array siguiente, crea una lista ul > li 
dinámicamente en el html que imprima cada uno de los paises. */

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const app = document.querySelector("body");
const ul = document.createElement("ul");
app.appendChild(ul);
for(let country of countries){
    ul.innerHTML+= `<li>${country}</li>`
}
/* 1.2 Elimina el elemento que tenga la clase .fn-remove-me. */
const removedElement = document.querySelector(".fn-remove-me");
removedElement.remove();

/* 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
en el div de html con el atributo data-function="printHere".*/

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const selectedClass =document.querySelector("[data-function='printHere']");
const newUl= document.createElement("ul");
selectedClass.appendChild(newUl);
for(let car of cars){
	newUl.innerHTML+= `<li> ${car} </li> `
}

/* 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
h4 para el titulo y otro elemento img para la imagen. */
const newCountries = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];
const divList= document.createElement("ul");
app.appendChild(divList);
for(let element of newCountries){
	divList.innerHTML+=`	
	<li> 
	<div>
		<h2>${element.title}</h2>
		<img src=${element.imgUrl}>
	</div>
	</li> `
}
/*  1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
elemento de la lista. */
const newBtn = document.createElement("button");
app.appendChild(newBtn);
newBtn.addEventListener("click", ()=>
{divList.removeChild(divList.lastChild)})

/* 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
elementos de las listas que elimine ese mismo elemento del html. 
  */

const elements= document.querySelectorAll("li");
 for (let element of elements){
	const btns = document.createElement("button")
	element.appendChild(btns);
	btns.innerText= "hola y adiós"
	btns.addEventListener("click", ()=>btns.parentElement.remove())}


	//PREGUNTAR SI ESTO ES POR EL TEMPLATE QUE NO ME AÑADE EL EVENTO
/* const elements= document.querySelectorAll("li");
 for (let element of elements){
	element.innerHTML+= `<button class="btnToRemove"> remove this </button>`
 }

const btnToRemove = document.getElementsByClassName("btnToRemove");
btnToRemove.addEventListener("click", ()=> elements.remove()) */