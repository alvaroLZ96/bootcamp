//2.1 Inserta dinamicamente en un html un div vacio con javascript.
const empty = document.createElement("div")
document.body.appendChild(empty);
console.log(empty);

//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const container1 = document.createElement("div");
const container2 = document.createElement("p");
container1.appendChild(container2);
console.log(container1);
document.body.appendChild(container1)

//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const container3 = document.createElement("div");
document.body.appendChild(container3);
for (let index = 0; index < 6; index++) {
container3.innerHTML = container3.innerHTML  + `<p> ${index+1} Párrafo </p>`
} 
console.log(container3)
//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
const newP = document.createElement("p");
document.body.appendChild(newP)
const newText = document.createTextNode('Soy dinámico!');
newP.appendChild(newText)
console.log(newP) 

//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const secondLevel = document.querySelector("h2.fn-insert-here");
const newText2 = document.createTextNode ("Wubba Lubba dub dub")
document.body.appendChild(secondLevel) 
secondLevel.appendChild(newText2)
console.log(secondLevel)
//2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const newUl = document.createElement("ul");
document.body.appendChild(newUl);
for (const iterator of apps) {
	newUl.innerHTML = newUl.innerHTML + `<li> ${iterator} </li>`
}
console.log(newUl)
//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const removeTexts = document.querySelectorAll(".fn-remove-me");
for (const iterator of removeTexts) {
	iterator.remove()
}
console.log(removeTexts);

//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
//Recuerda que no solo puedes insertar elementos con .appendChild.
const newDiv1 = document.querySelector("div");
newDiv1.insertAdjacentHTML("afterend", "<p>voy en medio </p>")
console.log(newDiv1)
//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
const allDivs = document.querySelectorAll("div");
for (const div of allDivs) {
	if (div.classList.contains("fn-insert-here")){
div.innerHTML =`<p> Voy dentro!</p>`
	}
}
console.log(allDivs)