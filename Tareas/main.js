/* Variables */
let suma;
let contador;
let resultadoPalabra = '';
let letras;

function main() {
  console.log('Ejercicio 1 - ' + identificador(9) + ' Y ' + divisible(9));
  console.log('Ejercicio 2 - ' + 'La suma de todos los numeros es: ' + sumaNumeros(10))
  console.log('Ejercicio 3 - ' + 'hola → ' + invPalabra('hola'));
  console.log('Ejercicio 4 - ' + rempLetras('esta es la entrada'));
  console.log('Ejercicio 5 - ' + orAlfabetico('hola'));
}

/* Ejercicio 1:
Escriba un programa que solicite un número al usuario e indique si es:
● Par o impar
● Divisible entre 3
● Divisible entre 5 */

function identificador(num){
  if(num % 5 == 0 || num % 3 === 0) {
    return 'El número es par'
  } else {
    return 'El número es impar'
  }
}
function divisible(num2) { 
  if(num2 % 3 == 0){
    return 'divisible entre 3.'
  }else if(num2 % 5 == 0){
    return 'divisible entre 5.'
  }else{
    return 'NO es divisible entre 3 o 5.';
  }
}

/* Ejercicio 2:
Escriba un programa que solicite al usuario un número e imprima la suma de todos
los números desde 1 hasta ese número. */

function sumaNumeros(num3) {
  suma = num3 * (num3 + 1) / 2
  return suma
}

/* Ejercicio 3:
Escribe un programa que reciba un string y retorne el mismo string invertido. Utilice
un while para resolver este ejercicio. hola → aloh */

function invPalabra(palabra1) {
  contador = palabra1.length;
  while (contador >= 0) {
    resultadoPalabra = resultadoPalabra + palabra1.charAt(contador);
    contador--;
  }
  return resultadoPalabra;
}

/* Ejercicio 4:
Escriba un programa que reciba una frase y este debe de intercambiar las vocales
por la ‘i’. Ej, “esta es la entrada” → “isti is li intridi”. */

function rempLetras(letras) {
  letras = letras.replace(/[ae]/g, 'i')
  return letras
}



/* Ejercicio 5:
Escriba un programa que reciba una palabra y reordene sus letras en orden
alfabético. Ej. hola → ahlo */
function orAlfabetico(palabra2) { 
return [...palabra2].sort((a,b) => a.localeCompare(b)).join('')
}
main();