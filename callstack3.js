const fs = require('fs');

fs.readFile(
    // Ruta y nombre del archivo
    "hola.txt",

    // Error handling and data use
    (error, data) => {
        if (error) { throw error; }
            
        console.log( data.toString() );
    }
);

setImmediate(
    () => {
        console.log("Esto se ejecuta mientras el archivo es leído");
    }
)