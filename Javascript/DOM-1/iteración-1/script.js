
//1.1 Usa querySelector para mostrar por consola el botón con la clase .**showme**
const showMe = document.querySelector(".showme")
console.log(showMe);
//1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
const showMe2 = document.querySelector("h1#pillado")
console.log(showMe2);
//1.3 Usa querySelector para mostrar por consola todos los p
const showMe3 = document.querySelectorAll("p")
console.log(showMe3);
//1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
const pokemon = document.querySelectorAll(".pokemon")
console.log(pokemon);
//1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo 
//data-function="testMe".
const testMe1 = document.querySelectorAll('span[data-function = "testMe"]')
console.log(testMe1);
//1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
//data-function="testMe". 
const thirdCharacter = document.querySelectorAll('span[data-function = "testMe"]')
console.log(thirdCharacter[2]);
