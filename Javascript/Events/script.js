//1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
//evento click que ejecute un console log con la información del evento del click
const button = document.querySelector("#btnToClick")
button.addEventListener("click", (event)=>{
    console.log(event)
} )
/* button.addEventLister("click", (ev) => {
    printEvento(ev);
  });
  
  const printEvento = (evento) => {
    console.log(evento);
  };
 */

//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const newFocus = document.createElement("input")
document.body.appendChild(newFocus);
newFocus.addEventListener("focus",(event)=>{
    console.log(newFocus.value)
})

//1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
const newInput = document.querySelector("value");
newInput.addEventListener("input",(ev)=>{
    console.log(newInput.value);
})