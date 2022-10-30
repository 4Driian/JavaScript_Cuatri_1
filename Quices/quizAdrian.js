/*DADO UN ARREGLO DE ENTERSOS 
COMPROBAR EL MAYOR EL MENOR Y EL PROMEDIO DE TODOS*/

/*Ejecutar: node quizAdrian.js */

let arr = [80,30,70];
let menor = arr[1];
let resultado;

console.log('El mayor es',Math.max(...arr));
console.log('El menor es',Math.min(...arr));

resultado = Math.max(...arr) + Math.min(...arr) / 3 /*Pregunta para después: ¿se divide por la cantidad de numeros del arreglo, o solo por el mayor y el menor?*/ 
console.log('El promedio es',resultado);