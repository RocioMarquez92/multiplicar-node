const fs = require('fs');
const colors = require('colors');
//let crearArchivo = (base) => {
//Definimos valores por defecto en limite
let listarTabla = (base, limite = 10) => {
    //let result = '';
    console.log('=========================='.green);
    console.log(`Tabla de ${base}`.green);
    console.log('=========================='.green);
    for (let i = 0; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i }`);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) { //Se comprueba que sea un número
            reject(`El valor introducido ${ base } no es un número `);
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `
                ${ base } * ${ i } = ${ base * i }\n `;
        }
        fs.writeFile(`tablas/tabla_${ base }al ${ limite }.txt `, data, (err) => {
            if (err) reject(err);
            else
                resolve(`tabla_${ base } al ${ limite }.txt `);

            //console.log('El archivo ha sido creado');
        })
    })
}
module.exports = {
    crearArchivo,
    listarTabla
}