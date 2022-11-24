//Adrián Zúñiga Pérez
let numero = parseInt(process.argv.slice(2));
let NumeroPrimo = true;

/*
Ejercicio 1:
Escriba un programa que solicite un número al usuario e imprima en la consola si el
número es primo (solo divisible entre 1 y él mismo) o no.
*/
function numerosPrimos() {
  if (numero == 1 || numero == 0) {
    NumeroPrimo = false;
  } else {
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
        NumeroPrimo = false;
      }
    }
  }
  if (NumeroPrimo) {
    console.log("Ejercicio 1: ", numero, "Es un número primo");
  } else {
    console.log("Ejercicio 1: ", numero, "No es un número primo");
  }
}
numerosPrimos();

/*
Ejercicio 3:
Escriba un programa que imprima todos los números del 1 al 100, uno por línea. 
*/
function hastaCien() {
  console.log("Ejercicio 3: ");
  for (let i = 0; i <= 100; i++) {
    console.log(i);
  }
}
hastaCien();

/*
Ejercicio 4:
Modifique el programa anterior para que sólo imprima los números pares.
*/
function hastaCienPares() {
  console.log("Ejercicio 4: ");
  for (let i = 0; i <= 98; ) {
    i += 2;
    console.log(i);
  }
}
hastaCienPares();

/*
Ejercicio 5:
Modifique el programa del ejercicio 4 para que imprima 10 números por línea,
separados por
un espacio. La primera línea tendrá los números del 1 al 10, la segunda del 11 al 20,
la tercera
del 21 al 30 y así hasta llegar a 100.
*/

function hastaCienSecciones() {
  console.log("Ejercicio 5: ");
  for (let i = 0; i <= 10; i++) {
    console.log("");
    console.log(i);
    if (i == 10) {
      for (let i = 11; i <= 20; i++) {
        console.log("");
        console.log(i);
        if (i == 20) {
          for (let i = 21; i <= 30; i++) {
            console.log("");
            console.log(i);
            if (i == 30) {
              for (let i = 31; i <= 40; i++) {
                console.log("");
                console.log(i);
                if (i == 40) {
                  for (let i = 41; i <= 50; i++) {
                    console.log("");
                    console.log(i);
                    if (i == 50) {
                      for (let i = 51; i <= 60; i++) {
                        console.log("");
                        console.log(i);
                        if (i == 60) {
                          for (let i = 61; i <= 70; i++) {
                            console.log("");
                            console.log(i);
                            if (i == 70) {
                              for (let i = 71; i <= 80; i++) {
                                console.log("");
                                console.log(i);
                                if (i == 80) {
                                  for (let i = 81; i <= 90; i++) {
                                    console.log("");
                                    console.log(i);
                                    if (i == 90) {
                                      for (let i = 91; i <= 100; i++) {
                                        console.log("");
                                        console.log(i);
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

hastaCienSecciones();
