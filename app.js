//se usa el fs para crear archivos y gaurdarlos 

const { options } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar');
const  argv  = require('./yargs/yargs');


//con la opcion option de yargs agregamos opciones al help de yargs


console.clear();

//process.argv captura los comando de la consola

// const [ , , arg3 = 'base=5' ] = process.argv;
// const [ , b = 5] = arg3.split('=');



// const b = 7;

crearArchivo (argv.b , argv.l)
      .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
      .catch(err => console.log(err));






