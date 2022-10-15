/* 2.3 En base al ejercicio anterior crea dinamicamente un elemento  por cada petición 
a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
EJ: El nombre Pepe tiene un 22 porciento de ser de ET y un 6 porciento de ser 
de MZ. */

const ul = document.createElement('ul')
document.body.appendChild(ul)

const printData = async (text) => {
  const data = await getData(text)
  const { name, country } = data

  for (let countryInfo of country) {
    const { country_id, probability } = countryInfo
    const li = `
    <li class='ul-item'>
      <p>El nombre ${name} tiene un ${probability} de ser de ${country_id}</p>
      <button class='delete-btn'>x</button>
    </li>`
    ul.innerHTML += li
  }}