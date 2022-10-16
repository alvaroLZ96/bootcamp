/* 1.1 Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para 
hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un 
console.log(). Para ello, es necesario que crees un .html y un .js. */
const getData1 = async ()=>{
try {
    const data = await fetch('https://api.agify.io?name=michael');
    const dataJSON = await data.json();
  console.log(dataJSON)
  } catch (error) {
    console.log("Error:", error);
  }
 
}

getData1()

/* 2.1 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando 
fetch() para hacer una consulta a la api cuando se haga click en el botón, 
pasando como parametro de la api, el valor del input.*/
const baseUrl = 'https://api.nationalize.io'

const getData = async (name) => {
  const data = await fetch(`https://api.nationalize.io?name=${name}`)
  const dataJson = await data.json()
  console.log(dataJson)
  return dataJson
}

const clickEvent =()=>{
    const button = document.querySelector('button')
    button.addEventListener ('click', () => {
      const input = document.querySelector('input').value
      getData(input)
    })
}
clickEvent()

/* 2.3 En base al ejercicio anterior crea dinamicamente un elemento  por cada petición 
a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
EJ: El nombre Pepe tiene un 22 porciento de ser de ET y un 6 porciento de ser 
de MZ. */

const ul = document.createElement('ul')
document.body.appendChild(ul)

const printData = async (nick) => {
  const data = await getData(nick)
  const { name, country } = data;
  const { country_id, probability } = countryData

  for (let probability of country) {
  const li = `
    <li class='person'>
      <p>El nombre ${name} tiene un ${probability} de ser de ${country_id}</p>
      <button class='me-inmolo'>x</button>
    </li>`
    ul.innerHTML += li
}}
 
  /* 2.4 En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno 
de los p que hayas insertado y que si el usuario hace click en este botón 
eliminemos el parrafo asociado. */

const btnsToRemove = document.querySelectorAll(".me-inmolo")
for (let element of btnsToRemove){
btnsToRemove.addEventListener("click",()=>
  btnsToRemove.parentElement.remove()
 )}
console.log(btnsToRemove)


