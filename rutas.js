const express=require('express');
const aplicacion = express();
const rutasSaludar= require('./rutes/saludos')

aplicacion.use('/saludos',rutasSaludar)

aplicacion.get("/",(peticion,respuesta)=>
{respuesta.send("bienvenido")
})

aplicacion.listen(8080,()=>{
    console.log("Servidor iniciado");
})