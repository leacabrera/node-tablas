
const argv =  require('yargs')
                .option('base',{
                    alias:'b',
                    type: 'number',
                    demandOption: true
                })
                .option('l', {
                    alias:'listar',
                    type: 'boolean',
                    default: false
                })
                .check( (argv, options) => {
                    if( isNaN(argv.b) ){
                        throw 'la base debe de ser un numero'
                    }
                    return true
                })
                .argv;

module.exports = argv;               