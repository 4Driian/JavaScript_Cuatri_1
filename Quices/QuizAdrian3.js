let minutos = parseInt(process.argv.slice(2))
let minuto;
let hora;

function Tiempo() {
  minuto = Math.floor((minutos / 60) % 60);
  hora = Math.floor(minutos / 60);
  return minutos + ' = ' + hora + ' Horas y ' + minuto + ' Minutos'
}
  console.log(Tiempo());