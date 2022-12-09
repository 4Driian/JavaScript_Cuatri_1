//Adrián Zúñiga Pérez - ejecutar el programa - node main.js 6

let arr1 = [3,2,4].sort((a, b) => a - b);
let arr2 = [2,5,4].sort((a, b) => a - b);
let n = arr1.length;
let cantidadDeEspacios = parseInt(process.argv.slice(2))
let arrays = []


function arrayDistintos() {
  for (let i = 0; i < n; i++) {
    if (arr1[i] === arr2[i]) {
      console.log('Los arreglos son iguales en:', arr1[i]);
      console.log('Los arreglos son iguales en:', arr2[i]);
    } else if (arr1[i] !== arr2[i]){
      console.log("El número:", arr1[i], "es distinto");
      console.log("El número:", arr2[i], "es distinto");
    }
  }
}
arrayDistintos();

for (let i = 0; i < cantidadDeEspacios; i++) {
  let equis = []
  for (let j = 0; j < cantidadDeEspacios; j++) {
    if (i === j) {
      equis.push("*")
    } else if (j + 1 === cantidadDeEspacios - i) {//revisar
      equis.push("*")
    } else {
      equis.push(0)
    }
  }
  arrays.push(equis)
}
console.log('Matriz en Equis ', arrays)