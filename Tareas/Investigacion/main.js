const array1 = [1, 2, 3];
console.log(array1);

console.log('');
console.log('El arreglo contiene un 3? - ',array1.includes(2, 0));
// true

console.log('');
const pets = ['cat', 'dog', 'bat'];
console.log(pets);


console.log('');
console.log('El arreglo contiene "at"? - ', pets.includes('at'));
// false

console.log('');
console.log('El arreglo contiene "bat"? - ', pets.includes('bat'));
// true

console.log('');
console.log('El arreglo contiene "Bat"? - ', pets.includes('Bat'),' OJO, "Bat" ← contiene mayúscula ');
// false

console.log('');
console.log('El arreglo contiene "cat"? - ', pets.includes('cat',1));
// true

const cadena = 'Mañana va a hacer sol';

console.log('');
console.log('La cadena contiene "hacer"? - ',cadena.includes('hacer'));
// true

console.log('');
console.log('La cadena contiene "Hacer"? - ',cadena.includes('Hacer'),' OJO, "Hacer" ← contiene mayúscula ');
// false

const cadena1 = 'Mañana va a hacer sol';

console.log('Ejemplo',cadena1.includes('hacer'));
// true