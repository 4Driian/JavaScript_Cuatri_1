/*String → number*/ 
let num = parseInt("15");
console.log("String → number", Number(num + 5));

/*Boolean → number*/
console.log("Booleano verdadero → numero", Number(true));
console.log("Booleano falso → numero", Number(false));

/*Number String→*/
let num2 = String(15);
console.log("Number → String", String(num2));

/*Boolean → String*/
console.log("Boolean → String", String(undefined));

/*String → Boolean*/
console.log("String → Boolean", Boolean("Hola"));
console.log("String → Boolean", Boolean(""));

/*Number → Boolean*/
console.log("Number → Boolean", Boolean(10));

function obtenerCiudad() {
  return "Vivo en Alajuela";
}
console.log(obtenerCiudad());
let result = obtenerCiudad();
console.log(result);

let arr = ['pedro','pepe','maria','ana']
for(var i = 0; i < 4; i++ ){
  if(arr[i] === 'pepe'){
    continue;
  }
  console.log(arr[i])
}

let arr1 = ['pedro','pepe','maria','ana']
for(var i = 0; i < 4; i++ ){
  if(arr1[i] === 'pepe'){
    break;
  }
  console.log('Se detiene en =',arr1[i])
}

function imprimirNombre(nombre){
  if (nombre === ' '){
    throw new Error('Error, nombre invalido')
  }
  console.log('hola '+ nombre + '!')
}

var ejemplo = 'talvez';
if (ejemplo === 'si'){
  console.log('Ejemplo es si');
} else if (ejemplo === 'no') {
  console.log('Ejemplo es no');
} else {
  console.log('Ejemplo es:', ejemplo )
}

/*String → number*/
let numero = parseInt('15');
console.log('String → number', Number(num + 5));

/*Boolean → number*/
console.log('Booleano verdadero → numero', Number(true));
console.log('Booleano falso → numero', Number(false));

/*Number → String*/
let num4 = String(15);
console.log('Number → String', String(num2));

/*Boolean → String*/
console.log('Boolean → String', String(undefined));

/*String → Boolean*/
console.log('String → Boolean', Boolean('hola'));
console.log('String → Boolean', Boolean('String'));

/*Number → Boolean*/
console.log('Number → Boolean',Boolean(10))

/*---------------------Ciclos-------------------------*/

/* For */
for (let i = 1; i <= 15; i++) {
  i += 3;
  console.log(i)
}
  console.log('Fin del ciclo for')

/* For in */
const obj = { 
  nombre: 'adrian',
  edad: 19,
  ciudad: 'San Jose',
  distrito: 'Desamparados'
};
for (let key in obj) {
  console.log(obj[key]);
}

/* While */
let cicloWhile = 0;
while(cicloWhile <= 20){
  console.log(cicloWhile)
  cicloWhile += 4;
}
console.log('fin del ciclo While')

/* Do While */
let doWhile = 0;
do {
  console.log(doWhile);
  doWhile += 2;
} while (doWhile <= 20);
console.log('fin del ciclo do while')