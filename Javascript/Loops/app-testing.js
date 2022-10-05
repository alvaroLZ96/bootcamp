const placesToTravel2 = [{id: 5, name: 'Japan'}, 
 {id: 11, name: 'Venecia'}, 
 {id: 23, name: 'Murcia'}, 
 {id: 40, name: 'Santander'}, 
 {id: 44, name: 'Filipinas'}, 
 {id: 59, name: 'Madagascar'}]

 
 for (let country of placesToTravel2){
 if(country.id== 11 || country.id==40){
	placesToTravel2.splice(placesToTravel2.indexOf(country),1)
 }}


console.log(placesToTravel2)