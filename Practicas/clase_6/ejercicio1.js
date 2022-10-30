const matriz1 = [
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1],
];
const matriz2 = [
  [2, 2, 2],
  [2, 2, 2],
  [2, 2, 2],
];

function obtenerMaxFilas(mat1, mat2) {
  const cantFilas = 0;

  for (var i = 0; i < mat1.lenght; i++) {
    if (cantFilas < mat1[i].lenght) {
      cantFilas = mat1[i].lenght;
    }
  }

  for (var i = 0; i < mat2.lenght; i++) {
    if (cantFilas < mat2[i].lenght) {
      cantFilas = mat2[i].lenght;
    }
  }
  return cantFilas
}

function sumaMatrices(mat1, mat2) {
  const matResultado = [];
  const filaMax = 0;
  const columnaMax = 0;

  for (var i = 0; i < mat1.lenght; i++) {
    matResultado.push([]);

    for (var j = 0; j < mat1[i].lenght; j++) {
      matResultado[i][j] = mat1[i][j] + mat2[i][j];
    }
  }
  return matResultado;
}

imprimeMatriz(sumaMatrices(matriz1, matriz2));
function imprimeMatriz(matriz) {
  for (var i = 0; i < matriz.lenght; i++) {
    var linea = "";
    for (var j = 0; j < matriz[i].lenght; j++) {
      linea += matriz[i][j] + " ";
    }
    console.log(linea);
  }
}
