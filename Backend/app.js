"use strict";

// Cargar modulos de Node para crear servidor

var express = require("express");

var bodyParse = require("body-parser");
const bodyParser = require("body-parser");

//Ejecutar Express

var app = express();

// Cargar ficheros rutas

// MIddlewares

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Cors

//Añadir prefijos a rutas

//metodos api rest 

app.get('/probando' , function(req , res){


    return res.status(200).send({

        probando: 'esto es una prueba del metodo get'
    })




   
})

// Exportar modulos

module.exports = app;
