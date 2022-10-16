/* 2.1 Convierte la siguiente promesa para esperar a ejecutar el console usando 
async-await. */
const runTimeOut = () => {
    const promise = new Promise((resolve) => {
        setTimeout(function () {
            resolve();
        }, 2000);
    })

    promise.then(() => {console.log('Time out!')})
};

runTimeOut(); 


const runAsync = async()=>{
await new Promise((resolve) => {
    setTimeout(function () {
        resolve();
    }, 2000);
})
console.log('Time out!')
}
runAsync()



/* 2.2 Convierte la siguiente función con un fetch utilizando async-await. 
Recuerda que para usar .fetch() tendrás que probar el ejercicio en el navegador; */
 function getCharacters () {
    fetch('https://rickandmortyapi.com/api/character')
    .then(res => res.json())
    .then(characters => console.log(characters));
}
getCharacters(); 



const getData1 = async ()=>{
    try {
        const data = await fetch('https://rickandmortyapi.com/api/character');
        const dataJSON = await data.json();
        console.log(dataJSON)
      } catch (error) {
        console.log("Error:", error);
      }
     
    }
    
    getData1()