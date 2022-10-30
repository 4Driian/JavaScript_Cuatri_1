

//Para ejecutar el código puede usar el siguiente comando "node tareaAdrian1.js 2022 2050 F 20 9 40 50 90"


/* Haga un programa que reciba como entrada la edad actual de Elena, y debe
imprimir la edad de Lucía dentro de siete años, siendo que la edad de Lucía
es la tercera parte de la de Elena */
let edadElena = 60;
let edadLucia = edadElena / 3;
console.log('Ejercicio 1:','La edad de lucía es de:',edadLucia,'años')
console.log('---------------------');//Separador


/* Cree un programa que calcule la posible edad de una persona en un año
específico. El usuario debe ingresar el año en que se encuentra y el año con
el que desea hacer el cálculo, este segundo parámetro no puede ser menor
al año actual del usuario. Ejemplo: Si el usuario está en el año 2022 no puede
ingresar un valor menor a dicho año para hacer el cálculo de la edad. */
let anno1 = parseInt(process.argv.slice(2));
let anno2 = parseInt(process.argv.slice(3));
let edad = anno2 - anno1;

if (anno2 > 2022) {
  console.log('Ejercicio 2: La edad es:',edad,'años')
} else {
  console.log('Ejercicio 2:','No se admiten estos valores');
}
console.log('---------------------');//Separador


/* Haga un programa que reciba como entrada el año de matrimonio del abuelo
de Alberto. Encontrar la edad de la abuela de Alberto a hoy, si es 7 años
menor que el abuelo de Alberto, y en el año del matrimonio, el abuelo tenía
25 años.Debe imprimir la edad de la abuela de Alberto. */
let matrimonio = 1965;
let presente = 2022; 
let edadAbuela = (presente - matrimonio) + (25) - 7;
console.log('Ejercicio 3:','La edad de la abuela es:', edadAbuela,'años')
console.log('---------------------');//Separador

/* Cree un programa que le permita al usuario convertir grados Fahrenheit a
Celsius o viceversa. El programa debe recibir el tipo de conversión que se
desea realizar, siendo la letra “F” para Fahrenheit y “C” para Celsiu, y el valor
a convertir. El programa no recibirá el valor a convertir hasta que se haya
ingresado correctamente el tipo de conversión que se desea realizar. Debe
imprimir mostrando el resultado de la conversión: N°C/F = N°C/F. Si el tipo de
conversión no es válido debe imprimir: “Tipo de conversión no reconocido”
Fórmula Celsius a Fahrenheit
(n°C × 9/5) + 32
Fórmula Fahrenheit a Celsius
((n°F - 32) × 5) / 9*/

let celsius = 19;
let fahrenheit = 120;

switch(String(celsius || fahrenheit)){
  case 'F':
   console.log(('Ejercicio 4:',fahrenheit * 9/5) + 32)
    break;
  case 'C':
   console.log(('Ejercicio 4:',celsius * 9/5) + 32)
    break;
}

/*Ejercicio 5*/
let cantidad = parseInt(process.argv.slice(6))
let producto = "Rollos de canela";
let precio = 650;
let subtotal = precio * cantidad;
let descuento1 = (precio * 0.10)*cantidad;
let descuento2 = (precio * 0.20)*cantidad ;

if (cantidad == 3) {
  console.log('---------------------');//Separador
  console.log('Ejercicio 5:');
  console.log('Producto:',producto,);
  console.log('Cantidad:',cantidad);
  console.log('subtotal',subtotal );
  console.log('Descuento a aplicar', descuento1);
  console.log('Precio Final', subtotal - descuento1);
  console.log('---------------------');//Separador
} else if (cantidad >= 5){
    console.log('---------------------');//Separador
    console.log('Ejercicio 5:');
    console.log('Producto:',producto,);
    console.log('Cantidad:',cantidad);
    console.log('subtotal',subtotal );
    console.log('Descuento a aplicar', descuento2);
    console.log('Precio Final', subtotal - descuento2);
    console.log('---------------------');//Separador
}


/*Ejercicio 6*/
let nota1 = parseFloat(process.argv.slice(7))
let nota2 = parseFloat(process.argv.slice(8))
let nota3 = parseFloat(process.argv.slice(9))
let resultado1;
let resultado2;
let resultado3;
let resultadoFinal;

resultado1 = nota1 * (25/100)
resultado2 = nota2 * (35/100)
resultado3 = nota3 * (40/100)
resultadoFinal = resultado1 + resultado2 + resultado3

if (resultadoFinal >= 70) {
  console.log('Ejercicio 6:','Su nota es de:', resultadoFinal,'aprobó el curso');
} else if (resultadoFinal < 70 && resultadoFinal >= 59 ){
  console.log('Ejercicio 6:','Su nota es de:',resultadoFinal,'Deberá ir a ampliación');
} else {
  console.log('Ejercicio 6:','Su nota es de:',resultadoFinal,'Reprobó el curso');
}
console.log('---------------------');//Separador