"use strict";

// realizamos conexión
var mongoose = require("mongoose");

var app = require('./app');

var port = 3900;



mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://127.0.0.1:27017/api-rest_productos", {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("conexion realizada correctamente");

    // creacion del servidor y ponerme a escuchar peticiones HTTP

    app.listen(port,() =>{

        console.log("Servidor corriendo en http://localhost/" + port);
        


    });

  });
