const valores = [1,2,3,4,5];

let i = 0;
let len = valores.length;
let suma = 0;

for (; i < len; i++){
    suma += valores[i];
}
console.log(suma);

const valores2 = [1,2,3,4,5,6]
for(valor of valores2){
  console.log(valor)
}
