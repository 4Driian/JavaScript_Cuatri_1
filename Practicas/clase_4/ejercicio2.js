const tamano = 20;
let i = 6;
const filas = [2,5,10,24,46]

while (i < tamano) {
  let linea = '';
  let contadorLinea = 1;
  while(contadorLinea <= i){
    linea += '* ';
    if(filas.indexOf(i) !== -1){
      contadorLinea += Math.ceil(i/2);
    } else{
      contadorLinea++;
    }
  }
  console.log(linea);
  i++
}