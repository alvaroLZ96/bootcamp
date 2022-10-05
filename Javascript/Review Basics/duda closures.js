function outer() {
    var nombre = "Nombre oculto en contexto local";
    function inner() {
      console.log('Accediendo al contexto local y recuperando el nombre oculto: ' + nombre);
    }
    return inner; 
  
  }
  
  var miFunc = outer();
  miFunc(); // No sabe nada del nombre interno del clousure