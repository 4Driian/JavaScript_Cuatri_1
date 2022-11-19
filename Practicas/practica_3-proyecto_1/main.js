/*Adrian Zuñiga Perez */

let arrayTexto = [];
let numeroSecreto = 60;
let contador;
let numIngresado = parseInt(process.argv.slice(2));

function main(){
  console.log('Ejercicio 1 - '+'El número factorial es: ',numRecursiva(5));
  /*Ejercicio 2 - */annoBisiesto(1900);
  console.log('Ejercicio 3 - En el texto: "A Edgar Silva le gusta el café", la letra "A", se repite: ', letrasRepetidas('A Edgar Silva le gusta el café','a' ), ' Veces');
  console.log('Ejercicio 4 - ','El numero obtenido es :', numIngresado,'', adivinarNumero());
  console.log('Ejercicio 5 - ',eliminarEspacios());
  
}

/*
Ejercicio 1:
Escriba un programa que calcule el factorial de un número de manera recursiva.
*/
function numRecursiva(numero2) {
  var resultado = numero2;
  if(numero2 === 0 || numero2 == 1)
  return 1;
  for(var i = numero2 -1; i >= 1; i--){
    resultado *= i;
  }
  return resultado ;
}

/*
Ejercicio 2:
Un año es bisiesto si es divisible entre 4 pero no entre 100, excepto si es divisible entre
400. Por ejemplo, 1996 es bisiesto (divisible entre 4), 1900 no lo es (divisible entre 100)
y 2000 sí lo es (divisible entre 400).
*/
function annoBisiesto(anno) {
  if ((anno % 4 == 0) && ((anno % 100 != 0))){
    console.log('Ejercicio 2 - ' + 'El año: ',anno, ' es bisiesto ');
  } else if (anno % 400 == 0) {
    console.log('Ejercicio 2 - ' + 'El año: ',anno, ' es bisiesto ');
  }else {
      console.log('Ejercicio 2 - ' + 'El año: ',anno, ' no es bisiesto ');
    }
} 

/*Ejercicio 3:
Escriba un programa que solicite al usuario un texto y un carácter y le indique al
usuario cuántas veces aparece en el texto ese carácter. */

function letrasRepetidas(texto, contarLetra){
  for(var i = 0; i < texto.length; i++) {
    if (texto[i].toLowerCase() === contarLetra) {
      arrayTexto.push(i);
    }
  }
	return arrayTexto.length;
}

/*
Ejercicio 4:
Escriba un programa que le solicite al usuario adivinar un número “secreto” del 1 al
100. El programa debe continuar preguntando por nuevos números al usuario hasta
que lo adivine o ingrese un cero para salir. El programa debe indicar, cada vez que el
usuario falle, si el número ingresado es mayor o menor que el número a adivinar.
*/
function adivinarNumero() {
  while(numIngresado != numeroSecreto && --contador > 0);
  if (numIngresado == numeroSecreto){
    return 'Has adivinado!';
  } else if (numIngresado === 0){
    return 'has salido del juego';
  }else if (numIngresado < numeroSecreto){
    return 'Intenta con un numero Mayor';
  } else if (numIngresado > numeroSecreto){
    return 'Intenta con un numero Menor';
  } 
}

/*
Ejercicio 5:
Escriba un programa que solicite un texto y lo imprima en la consola con todos los
espacios en blanco removidos. Por ejemplo, si el usuario introduce “May the force be
with you”, el programa debe retornar “Maytheforcebewithyou”.
*/

function eliminarEspacios(){
  var texto = 'May the force be with you'.replace(/ /g,"")
  return texto
}

  main()
