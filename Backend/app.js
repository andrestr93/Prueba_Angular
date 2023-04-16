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

//Cargar rutas

var product_routes = require('./routes/product');

app.use( '/', product_routes);


// Exportar modulos

module.exports = app;


// configurar cabeceras http
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
 
    next();
});

