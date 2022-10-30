const tamano = 7;

for (let i = 0; i < tamano; i++){
  let linea = '';
  for(let contadoerLinea = 1; contadoerLinea <= i; contadoerLinea++){
    linea += '* ';
  }
  console.log(linea);
}