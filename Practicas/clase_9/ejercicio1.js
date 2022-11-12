const objs = [
  {nombre:'Adrian', edad: 20},
  {nombre:'Brandy', edad: 30},
  {nombre:'Cristina',edad: 22},
  {nombre:'Daniel',edad: 15}]

const sortFn = (a,b) => {
  console.log('comparando ' + a.nombre + ' Y ' + b.nombre)
  return a.edad - b.edad
} 

function main() {
  for (let i = 0; i<objs.lenght; i++) {
    console.log('La persona es: ' + objs[i].id + 'Con edad' + objs[i].valor)
  }
  console.log(objs.sort(sortFn))
}
main()