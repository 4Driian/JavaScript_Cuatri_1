const computadora = {
  procesador: "intel i9",
  memoriaRam: '16GB',
  tarjetaGrafica: "RX570",
  case: 'cooler Master',
  RGB: 'si',
  grafica2: function (nuevotarjetaGrafica) {
    this.tarjetaGrafica = nuevotarjetaGrafica;
  },
  procesador2: function (nuevoproce) {
    this.procesador = nuevoproce;
  },
  obtenerDatos: function() {
    return this.procesador + ' ' + this.memoriaRam + ' ' + this.tarjetaGrafica + ' ' + this.case + ' ' + '/ RGB: ' + this.RGB +'.'
  },

};
/*Cambio 1*/
console.log('---Cambio 1----');
console.log(computadora.procesador, computadora.memoriaRam, computadora.tarjetaGrafica, computadora.case, '/ RGB: ' + computadora.RGB);
console.log('Se se hace un upgrade ↓');
computadora.grafica2('nvidia RTX2070');
console.log(computadora.obtenerDatos());

/*Cambio 2*/
console.log('');
console.log('---Cambio 2----');
delete computadora.memoriaRam;
for(property in computadora) {
  console.log(computadora[property]);
}
console.log(computadora);

/*Cambio 3*/
console.log('');
console.log('---Cambio 3----');
console.log(computadora.procesador)
console.log('Se se hace un upgrade ↓');
computadora.procesador2('Ryzen 5 3600X')
console.log(computadora.procesador)
