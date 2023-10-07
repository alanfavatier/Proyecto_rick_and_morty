// Importar el módulo http
const http = require('http');

// Importar el archivo data.js que contiene los datos de los personajes
const data = require('./utils/data.js');
const PORT= 5175;

// Crear y levantar un servidor en el puerto 3001
http.createServer((req, res) => {
    // Configurar el encabezado para permitir cualquier origen (CORS)
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Verificar si la URL incluye '/rickandmorty/character'
    if (req.url.includes('/rickandmorty/character')) {
        //req.url: Esta es una propiedad del objeto de solicitud (req) en Node.js que contiene la URL completa que se está solicitando.
    
        // Obtener el id del personaje de la URL
        const urlParts = req.url.split('/');
        //.split('/'): Este es un método de JavaScript que se usa para dividir una cadena en un array de subcadenas, utilizando un carácter específico como separador
        const characterId = urlParts[urlParts.length - 1];
        // characterId almacena el id (ultimo elemento del array)
        // Verificar si el id es un número
        if (!isNaN(characterId)) {
            // Buscar el personaje por id en los datos
            let character = data.find((character) =>//find() es un método de los arrays en JavaScript que se utiliza para buscar el primer elemento que cumple con una cierta condición dentro del array 
            character.id === parseInt(characterId))//  se compara la propiedad id de cada elemento del array data con el valor de characterId.
    
            //characterId se convierte a un número mediante parseInt(characterId) antes de realizar la comparación. Esto es necesario porque characterId generalmente se obtiene de la URL de la solicitud HTTP, y las URLs son cadenas de texto, mientras que los id de los personajes son números.
       }
    
       if (character) {
        // Si se encuentra el personaje, enviarlo como respuesta en formato JSON
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(character));
      } 
    
    }
}).listen(PORT,"localhost");

module.exports=PORT;