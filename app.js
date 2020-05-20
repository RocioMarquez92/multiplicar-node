//const fs = require('fs'); // propia de node. No hay que hacer mas
// const fs = require('express');// No existe en node pero es un paquete que se instala y se utiliza. Código que otra persona hizo.
// const fs = require('./pathArchivo');// nosotros mismo escribimos y que deberán estar en algun lado de nuestro proyecto
const argv = require('./config/yargs').argv;
const colors = require('colors/safe');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Archivo creado: ', colors.green(archivo)))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
}
//console.log(argv);
//let base = 8;

// let argv2 = process.argv;
//console.log('limite', argv.limite);
// console.log(argv2);
// let parametro = argv[2];
// let base = parametro.split('=')[1];
// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado $ { archivo }`))
//     .catch(err => console.log(err));