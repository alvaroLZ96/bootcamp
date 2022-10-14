/* **Iteración #6: Función swap**
Crea una función llamada `swap()` que reciba un array y dos parametros 
que sean indices del array. La función deberá intercambiar la posición 
de los valores de los indices que hayamos enviado como parametro. 
Retorna el array resultante.
Sugerencia de array: */

const players =['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']

const swap =(players, firstPlayer,lastPlayer) =>{
    const newArray= []
    for (let player of players){
        if(player !== players[lastPlayer] && player !== players[firstPlayer]){
newArray.push(player)    
        }else if(player==players[firstPlayer]){
            newArray.push(players[lastPlayer])
        }else if (player ==players[lastPlayer]){
            newArray.push(players[firstPlayer])
        }
    }
    return newArray
}
console.log(swap(players, 0,3));