//Adrián Zúñiga Pérez  -  Ejecutar código / node proyecto1.js 10 50 15

/*1. El programa debe de recibir tres parámetros.
a. El tamaño que va a poseer la matriz.
b. La cantidad de células vivas.
c. La cantidad de turnos que se van a ejecutar.*/

let tamannoMatriz = parseInt(process.argv.slice(2));
let celulasVivas = parseInt(process.argv.slice(3));
let catidadTurnos = parseInt(process.argv.slice(4));
let celulas2 = 0;
let arr1 = [];
let arr2 = [];
let cantidadTurnos = 1;

/*
Impresión de los turnos:
a. Cada turno debe de imprimirse mostrando su número y debe de mostrar la
matriz correspondiente para ese turno. 
*/
function Resultados(cantidad) {
  tablaVacia(tamannoMatriz, arr1, arr2);
  crearTabla(tamannoMatriz, arr1);
  console.table(arr1);
  while (cantidadTurnos <= cantidad) {
    console.log("---- Turno #" + cantidadTurnos + " ----");
    console.log("-------------------");
    acomodoCelulasVivas(arr1, arr2, tamannoMatriz);
    limpiarTablas(arr1, arr2);
    cantidadTurnos++;
  }
}

/*
3. Validaciones:
a. El primer parámetro debe de ser un número mayor a cero.
b. El segundo parámetro debe de ser un número mayor a cero y menor que el
límite creado por el primer parámetro Ej. si el primer parámetro es 10, el
número mayor será 100 (10x10).
c. El tercer parámetro debe de ser un número mayor a cero.
*/
function Validaciones(tamaño, celulas, cantidad) {
  if (tamaño > 0 && celulas > 0 && celulas <= cantidad * cantidad && cantidad > 0) {
    Resultados(catidadTurnos);
  } else {
    console.log("Ingrese valores válidos");
  }
}

function tablaVacia(tamaño, tablaUno, tablaDos) {
  for (let i = 0; i < tamaño; i++) {
    let fila = [];
    for (let j = 0; j < tamaño; j++) {
      fila.push("-");
    }
    tablaUno.push(fila);
  }
  for (let i = 0; i < tamaño; i++) {
    let fila = [];
    for (let j = 0; j < tamaño; j++) {
      fila.push("-");
    }
    tablaDos.push(fila);
  }
}

/*
4. Generación de la matriz:
a. La matriz debe colocar la cantidad de células vivas según el segundo
parámetro insertado en lugares al azar.
*/
function crearTabla(tamaño, tablaUno) {
  var valorMinimo = 0;
  var valorMaximo = tamaño - 1;
  var columnas = Math.floor(Math.random() * (valorMaximo - valorMinimo + 1) + valorMinimo
  );
  var filas = Math.floor(Math.random() * (valorMaximo - valorMinimo + 1) +valorMinimo);
  for (let i = 0; i < celulasVivas; i++) {
    if (tablaUno[filas][columnas] == "-") {
      tablaUno[filas][columnas] = "X";
    } else {
      i--;
    }
    filas = Math.floor(Math.random() * (valorMaximo - valorMinimo + 1) + valorMinimo);
    columnas = Math.floor(Math.random() * (valorMaximo - valorMinimo + 1) + valorMinimo);
  }
}
''
function acomodoCelulasVivas(tablaUno, tablaDos) {
  for (let i = 0; i < tablaUno.length; i++) {
    for (let j = 0; j < tablaUno.length; j++) {
      if (i == 0) {
        if (j == tablaUno.length - 1) {
          if (tablaUno[i][j - 1] == "X") {
            celulas2++;
          }
          if (tablaUno[i + 1][j - 1] == "X") {
            celulas2++;
          }
          if (tablaUno[i + 1][j] == "X") {
            celulas2++;
          }
        } else {
          if (tablaUno[i][j - 1] == "X") {
            celulas2++;
          }
          if (tablaUno[i][j + 1] == "X") {
            celulas2++;
          }
          if (tablaUno[i + 1][j - 1] == "X") {
            celulas2++;
          }
          if (tablaUno[i + 1][j] == "X") {
            celulas2++;
          }
          if (tablaUno[i + 1][j + 1] == "X") {
            celulas2++;
          }
        }
      } else if (i == tablaUno.length - 1) {
        if (j == tablaUno.length - 1) {
          if (tablaUno[i - 1][j - 1] == "X") {
            celulas2++;
          }
          if (tablaUno[i - 1][j] == "X") {
            celulas2++;
          }
          if (tablaUno[i][j - 1] == "X") {
            celulas2++;
          }
        } else {
          if (tablaUno[i - 1][j - 1] == "X") {
            celulas2++;
          }
          if (tablaUno[i - 1][j] == "X") {
            celulas2++;
          }
          if (tablaUno[i][j - 1] == "X") {
            celulas2++;
          }
          if (tablaUno[i][j + 1] == "X") {
            celulas2++;
          }
        }
      } else if (j == tablaUno.length - 1) {
        if (i != 0 && i != tablaUno.length - 1) {
          if (tablaUno[i - 1][j - 1] == "X") {
            celulas2++;
          }
          if (tablaUno[i - 1][j] == "X") {
            celulas2++;
          }
          if (tablaUno[i][j - 1] == "X") {
            celulas2++;
          }
          if (tablaUno[i + 1][j - 1] == "X") {
            celulas2++;
          }
          if (tablaUno[i + 1][j] == "X") {
            celulas2++;
          }
        }
      } else {
        if (tablaUno[i - 1][j - 1] == "X") {
          celulas2++;
        }
        if (tablaUno[i - 1][j] == "X") {
          celulas2++;
        }
        if (tablaUno[i - 1][j + 1] == "X") {
          celulas2++;
        }
        if (tablaUno[i][j - 1] == "X") {
          celulas2++;
        }
        if (tablaUno[i][j + 1] == "X") {
          celulas2++;
        }
        if (tablaUno[i + 1][j - 1] == "X") {
          celulas2++;
        }
        if (tablaUno[i + 1][j] == "X") {
          celulas2++;
        }
      }
      if (tablaUno[i][j] == "-" && celulas2 == 3) {
        tablaDos[i][j] = "X";
      } else if (tablaUno[i][j] == "X" && (celulas2 < 2 || celulas2 > 3)) {
        tablaDos[i][j] = "-";
      } else if (tablaUno[i][j] == "X" && celulas2 >= 2 && celulas2 <= 3) {
        tablaDos[i][j] = "X";
      }
      celulas2 = 0;
    }
  }
  console.table(tablaDos);
}

function limpiarTablas(tablaUno, tablaDos) {
  for (let i = 0; i < tablaUno.length; i++) {
    for (let j = 0; j < tablaDos.length; j++) {
      if (tablaDos[i][j] == "X") {
        tablaUno[i][j] = "X";
      } else {
        tablaUno[i][j] = "-";
      }
    }
  }
}

Validaciones(tamannoMatriz, celulasVivas, catidadTurnos);