

//let numeros = [1,2,3,4,4,5,6]

let numeros = process.argv.slice(2)
let numeroMayor = numeros[0];
let numeroMenor = numeros[0];
let resultado;
let numeroPromedio = 0;
let numMedio = 0 
let numEnMedio = 0;

function resultados() {
  console.log('El promedio de los números es: ', Number(numPromedio()));
  console.log('La mediana es ', Number(mediana()));
  console.log('El número menor es: ', Number(numMenor()));
  console.log('El numero mayor es: ',  Number(numMayor()));
}

/* Numero promedio */
function numPromedio() { 
  for (i = 0; i < numeros.length;i++) {
    numeroPromedio += numeros[i];
  }
  resultado = numeroPromedio / numeros.length;
  return resultado;
}

/* Mediana */
function mediana () {
  numEnMedio = Math.floor(numeros.length / 2)
    if (numeros.length % 2 == 0) {
      numMedio = (numeros[numEnMedio - 1 ] + numeros[numEnMedio]) / 2;
    }else {
      numMedio = numeros[Math.floor(numEnMedio)];
    }
  return numMedio
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

/* Numero Mayor */
  function numMayor() {
    for (let i = 0; i < numeros.length; i++) {
      if (numeros[i] > numeroMayor) {
        numeroMayor = numeros[i];
      }
    }
  return numeroMayor 
  }
resultados()

