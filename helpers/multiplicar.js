

const fs = require('fs');
const crearArchivo = async( b = 5 , l ) => {

    try {
        
    
    
        let salida = '';
    
        for ( let i = 1; i <= 10; i++) {
    
            salida += `${b} x ${i} = ${ b * i}\n`;
    
        }

        if(l){
            console.log('============')
            console.log(`TABLA DEL ${b}`)
            console.log('============')
            
            console.log(salida)
        }
        //we creats and saves files
        fs.writeFileSync(`./salida/tabla-${b}.txt`, salida);
    
        return `tabla-${b}.txt creado`;
        
    } catch (error) {
        throw err ;
    }

}

module.exports = {
    crearArchivo
}