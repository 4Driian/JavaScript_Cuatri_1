const cuentaAtras = numero => {
    if(numero === 0){
        console.log('fin');
        return;
    }

    console.log(numero);
return cuentaAtras(numero - 1);
}

cuentaAtras(10)


function fibbo(posicion){
    var n1 = 0 , n2 = 1, siguiente;

    console.log('secuencia');

    for (var i = 1; 1 <= posicion; i++){
        console.log(n1);
        siguiente = n1 + n2;
        n1 = n2;
        n2 = siguiente
    }
}

fibbo(10)