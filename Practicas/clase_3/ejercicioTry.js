
function tryCatch(){
  let archivo;
  try {
      archivo = abrirArchivo();
    } catch (error) {
        console.log('error abriendo el archivo');
        console.log('Elija otro archivo');
        archivo = abrirOtroArchivo();
    } finally {
        escribirArchivo(archivo);
        cerrarArchivo(archivo);
    }

  console.log('su archivo fue escrito', archivo);
}

  function abrirArchivo() {
    throw new Error('Error abriendo el archivo, no existe');
  }

  function abrirOtroArchivo() {
    return 'archivo 2';
  }

  function escribirArchivo(archivo) {
    console.log(archivo + 'escrito');
  }

  function cerrarArchivo(archivo) {
    console.log(archivo + 'cerrado');
  }

  tryCatch()