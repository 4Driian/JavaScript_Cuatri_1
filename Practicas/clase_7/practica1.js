/* Stephannie Garro - Ignacio Marin - Adrián Zúñiga */


/*Ejercicio 1 */
function iterativa(numero) {
  if (numero < 0) 
  return -1;
  if (numero == 0) 
  return 1;
  else {
    return numero * iterativa(numero - 1);
  }
}
console.log(iterativa(5));


/*Ejercicio 2*/
function recursiva(numero2) {
  let resultado = numero2;
  if(numero2 === 0 || numero2 == 1)
  return 1;
  for(var i = numero2 -1; i >= 1; i--){
    resultado *= i;}
    return resultado;
  }
  console.log(recursiva(5));


  /*Ejercicio 3*/
function recursiva2(numero3){
  if(numero3 < 0) {
    numero3 = Math.abs(numero3)
  }
  if(numero3 == 0){
    return 'Es par'
  }
  if(numero3 == 1){
    return 'No es impar'
  } else {
  return recursiva2(numero3 - 2)
  }
}

console.log(recursiva2(1));