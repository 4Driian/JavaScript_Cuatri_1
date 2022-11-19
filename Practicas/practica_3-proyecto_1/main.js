
let arrayTexto = [];
let solucion = Math.floor(Math.random() * 100) + 1; // numero aleatorio
let contador = 6; // numero de intentos
let numeroUsuario = parseInt(process.argv.slice(2));


function main(){
  console.log('Ejercicio 1 - '+'El número factorial es: ',numRecursiva(5));
  /*Ejercicio 2 - */annoBisiesto(1900);
  console.log('Ejercicio 3 - En el texto: "A Edgar Silva le gusta el café", la letra "A", se repite: ', letrasRepetidas('A Edgar Silva le gusta el café','a' ), ' Veces');
  console.log('Ejercicio 4 - ', adivinarNumero());
  console.log('Ejercicio 5 - ');
  
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

function letrasRepetidas(texto, contarCaracter){
  for(var i = 0; i < texto.length; i++) {
    if (texto[i].toLowerCase() === contarCaracter) {
      arrayTexto.push(i);
    }
  }
	return arrayTexto.length;
}

function adivinarNumero() {
  while (contador > 1){
    if (numeroUsuario < solucion) {
      console.log(`El número secreto es mayor que ${numeroUsuario}`);

    } else if(numeroUsuario > solucion) {
      console.log(`El número secreto es menor que ${numeroUsuario}`);

    } else {
      console.log('¡Bravo, has acertado!');
      break;
    }

    contador--
 }
 if (contador == 1) console.log('Ohhhhhhhh el número era ' + solucion);
}
  main()

