const numeros = [1,2,3,6,9,8]
let numeroMayor = numeros[0];
let numeroMenor = numeros[0];
let numeroPromedio = 0;
let numMedio = 0 
let numEnMedio = 0;

function resultados() {
  console.log('El numero mayor es: ', numMayor());
  console.log('El número menor es: ', numMenor());
  console.log('El promedio de los números es: ', numPromedio());
  console.log('------------------------------------');
  console.log('En los números: ', numeros);
  console.log('La mediana es ', mediana());
}

/* Numero Mayor */
  function numMayor() {
    for (let i = 0; i < numeros.length; i++) {
      if (numeros[i] > numeroMayor) {
        numeroMayor = numeros[i];
      }
    }
  return numeroMayor 
  }

/* Numero Menor */
  function numMenor() {
    for (let i = 0; i < numeros.length; i++) {
      if (numeros[i] < numeroMenor) {
        numeroMenor = numeros[i];
      }
    }
  return numeroMenor
  }
resultados()

