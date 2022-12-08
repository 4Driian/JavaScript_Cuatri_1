let arr1 = [3,2,4].sort((a, b) => a - b);
let arr2 = [2,5,4].sort((a, b) => a - b);
let n = arr1.length;

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


function matrizX(matriz) {
  let matrices = [];
  for (let i= 0; i < matriz; i++) {
    let fila = []
    for (let j = 0; j < matriz; j++) {
      if (i == j) {
        fila.push('*');
      }else {
        fila.push('')
      }
    }
    matrices.push(fila)
}
return matrices;
}
console.log(matrizX(6))