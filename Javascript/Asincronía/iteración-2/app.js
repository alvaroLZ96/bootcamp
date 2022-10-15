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