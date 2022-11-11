const auto = {
  marca: 'Toyota',
  anio: 2020,
  color: 'verde',
  pintar: function(nuevoColor) {
      this.color = nuevoColor
  },
  obtenerDatos:function() {
    return this.marca + ' ' +this.anio + ' ' + this.color + '.'
  }
};

console.log(auto.color);
auto.pintar('azul');
console.log(auto.obtenerDatos());

/*
console.log(auto.color);

const field = 'color';

console.log(auto[field]);

function obtenerPropiedad(propiedad) {
  return auto[propiedad]
}
*/
/*
console.log('color del auto: ' + obtenerPropiedad('color'));
console.log('marca del auto: ' + obtenerPropiedad('marca'));
console.log('año del auto: ' + obtenerPropiedad('anio'));
*/

const properties = Object.keys(auto)

for(var i =0; i < properties.length; i++) {
  if(typeof auto[properties[i]] === 'number') {
    console.log(auto[properties[i]]);
  }
}

for(property in auto) {
  if (typeof auto[property] === 'number'){
    console.log(auto[property]);
  }
}

delete auto.color;
for(property in auto) {
  console.log(auto[property]);
}

console.log(auto);

