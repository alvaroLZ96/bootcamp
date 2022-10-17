/* **Iteración #5: Función rollDice**

Crea una función llamada **rollDice()** que reciba como parametro el numero de caras que queramos que tenga el dado que deberá 
silumar el codigo dentro de la función. Como hemos dicho, que la función use el parametro para simular una tirada de dado y retornar 
el resultado. Si no se te ocurre como hacer un numero aleatorio no te preocupes! busca información sobre la función de javascript 
**Math.random();** */
const rollDice = (sides) => {
  return Math.floor(Math.random() * sides) + 1;
};
console.log(rollDice(6));
//math.random nos devuelve un valor entre 0 y 1 y por eso tenemos que añadirle al final el Minimo que queremos (en este caso 1)
