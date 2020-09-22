const express = require('express');
require('dotenv').config();



//Crea el servidor de express
const app = express();


// Directorio publico
app.use(express.static('public'));

//Rutas
app.use('/api/auth', require('./routes/auth'));

//Escucha
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});