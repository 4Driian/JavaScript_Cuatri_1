// const matriz1 = [[1,1,1],[1,1,1],[1,1,1]];
// const matriz2 = [[2,2,2],[2,2,2],[2,2,2]];

const array1 = [2,6,3,4,8,7];
const palabra1 = 'anitalavalatina';
const matriz1Tarea = [ [1,0,0], [0,0,1], [0,0,0] ];
function main() {
    console.log('Ejercicio 1: El mayor es: ' + ejercicio1(array1));
    console.log('Ejercicio 2: ' + ejercicio2(palabra1));
    console.log('Ejercicio 3: Cantidad de ceros: ' + ejercicio3(matriz1Tarea));
    console.log('Ejercicio 4: ' + ejercicio4(array1));
}

main();

// // 1. Cree un programa que reciba como parámetro un array de números, y verifique 
// // la lista de manera que retorne el número mayor. (Valor: 5pts)


function ejercicio1(array) {
    let mayor = array[0];
    for (var i = 0; i < array.length; i++) {
        if (array[i] > mayor) {
            mayor = array[i];
        }
    }
    return mayor;
}


// // 2. Cree un programa que reciba como parámetro una palabra y verifique si dicha palabra
// // es palíndromo, es decir, la palabra se lee igual de izquierda a derecha o de derecha a
// // izquierda, o no. Para la resolución de dicho problema debe utilizar ciclo for . (Valor: 5pts)

function ejercicio2(palabra) {
    //anitalavalatina = 15
    //i 0   1   2   3   4 ... 14
    //j 14  13  12  11  10... 0
    for (var i = 0; i < palabra.length; i++) {
        if (palabra[i] !== palabra[palabra.length - 1 - i]) {
            return palabra + " - No es palindromo";
        }
    } 
    return palabra + " - Es palindromo";
}

// // 3. Dada la siguiente matriz [ [1,0,0], [0,1,1], [0,1,0] ], haga un programa que cuente e
// // imprima la cantidad de ceros totales en dicha matriz. Debe utilizar ciclos for (Valor: 10pts)

/*
[
    [1,0,0],
    [0,1,1],
    [0,1,0]
]
*/
function ejercicio3(matriz) {
    let contador = 0;
    for(var i = 0; i < matriz.length; i++) {
        for(var j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] === 0) {
                contador++;
            }
        }
    }
    return contador;
}

// // 4. Cree un programa que reciba un array de números, verifique cuáles números están repetidos
// // y retorne un array con dichos números (los que estan duplicados), si no hay números repetidos
// // en el array debe retornar el siguiente mensaje: “No se encontraron números repetidos en la
// // lista de números recibida”. Debe usar un ciclo for. (Valor: 10pts)

function revisarRepetidos(revisados, numero) {
    for(var i = 0; i < revisados.length; i++) {
        if (revisados[i] === numero) {
            return true;
        }
    }
    return false;
}

function ejercicio4(array) {
    let arrayResultado = [];
    let arrayRevisados = [];
    for(var i = 0; i < array.length; i++) {
        const esRepetido = revisarRepetidos(arrayRevisados, array[i]);
        if (esRepetido) {
            arrayResultado.push(array[i]);
        }
        arrayRevisados.push(array[i]);
    }
    if (arrayResultado.length > 0) {
        return arrayResultado;
    } else {
        return 'No hay repetidos';
    }
}


//Ejercicio de suma de matrices

const matriz1 = [[1,1,1,1],[1,3,1,2],[1,1,1,3]];
const matriz2 = [[2,5,2],[2,2,2,3,3],[2,2,2],[2,2,2,1]];


function obtenerMaxFilas(mat1, mat2) {
    let cantFilas = 0;
    const obtenerMaxFila = (mat) => {
        for (var i = 0; i < mat.length; i++) {
            if (cantFilas < mat[i].length) {
                cantFilas = mat[i].length;
            }
        }
    }
    obtenerMaxFila(mat1);
    obtenerMaxFila(mat2);

    return cantFilas;
}

function obtenerMaxColumna(mat1, mat2) {
    if (mat1.length >= mat2.length) {
        return mat1.length;
    }
    return mat2.length;
}

function sumaMatrices(mat1, mat2) {
    const matResultado = [];
    const filaMax = obtenerMaxFilas(mat1, mat2);
    const columnaMax = obtenerMaxColumna(mat1, mat2);

    /*
    [1,1,1,1]      [2,5,2]          [3,6,3,1]
    [1,3,1,2] +    [2,2,2,3,3] =    [3,5,3,5,3]
    [1,1,1,3]      [2,2,2]          [3,3,3,3]
                   [2,2,2,1]        [2,2,2,1]
    */
    for (var i = 0; i < columnaMax; i++) {
        matResultado.push([]);
        for (var j = 0; j < filaMax; j++) {
            let suma1 = 0;
            let suma2 = 0;

            if (mat1[i] !== undefined && mat1[i][j] !== undefined) {
                suma1 = mat1[i][j];
            }

            if (mat2[i] !== undefined && mat2[i][j] !== undefined) {
                suma2 = mat2[i][j];
            }
            matResultado[i][j] = suma1 + suma2;
        }
    }
    return matResultado;
}

imprimeMatriz(sumaMatrices(matriz1, matriz2));

function imprimeMatriz(matriz) {
    for (var i = 0; i < matriz.length; i++) {
        var linea = '';
        for (var j = 0; j < matriz[i].length; j++) {
            linea += matriz[i][j] + ' ';
        }
        console.log(linea);
    }
}